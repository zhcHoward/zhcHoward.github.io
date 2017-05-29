---
layout: post
title: Installing Debian
tags:
- Linux
- Debian
---

Recently, the linux I installed on my Toshiba ChromeBook 2 was unable to connect WIFI, so I decide to install Debian on chromebook. 

### Installing steps:
1. Make a bootable usb image as usual. Use UltralISO(on Windows) or dd(on Mac or Linux).
2. Install step by step, but I met some problems:
    * My chromebook has a wifi module that need non-free driver to work properly. So I need to download the right file from [Intel's web site](https://wireless.wiki.kernel.org/en/users/Drivers/iwlwifi). Then, copy them to the usb drive for installation and I met some other problems:
        1. When you installing Debian and meet this problem, you can just pull out the usb driver that you use for installation and copy the file you needed to it. But if you use `dd` to make the bootable image in Step 1, you won't be able to do this. On a Linxu PC and Mac your usb drive is recognized as read only. And on a Windows PC, for example my Win10 desktop, the partition of the usb driver cannot be recognized correctly and  it will tell you that your usb driver has not enough space left for copying files. In this case, you have to use a second usb driver.
        2. If you use a second driver, make sure your usb driver is in the right format. Using `FAT32` instead of `exFAT`. And remember to remove your installation driver when you plug the second driver in. If you keep the installation driver plugged in, your installation driver will be searched instead of your second driver.
    * During `Install the base system` process, I get a Debootstrap error: `Failed to determine the codename for the release`. The reason for this error is that your usb is not mounted at `/cdrom`. You can manually mount your usb by:
        1. Press `ALT` + `F2` to go to a console
        2. Enter command: `mount /dev/sdXn /cdrom`. `X` is a charater from a to z. `n` is a number of the partition on your usb, normally, it is 1. For example, my command is `mount /dev/sda1 /cdrom`. 
        3. Press `ALT` + `F1` to get back to installation and retry `Install the base system`. [(details)](http://forums.debian.net/viewtopic.php?t=110803)
3. After installation, reboot into the new system. Problems:
    1. Touchpad does not work. I haven't figure out why yet.
    2. When I try install software with `sudo apt-get install`, I get a error `bash: sudo: command not found`. You need to install `sudo`.
        * `su root -` change to root user
        * `apt-get install sudo`
        * `CTRL` + `D` to get back to normal user

    3. Then, another error occur when I try `sudo apt-get install`: `XXX is not in the sudoers file`. `XXX` is your username. So you need to add yourself to the sudoers file.
        * `su root -`
        * `visudo -f /etc/sudoers`
        * Copy the line looks like `root   All = (All:ALL) ALL`. This is what I see in Debian, in other system, it may look a little different, i.e. it is `root   ALL = (ALL) ALL` in macos.
        * Paste the line under `root` line and change name root to your username.
        * Exit

    If you are not familiar with `vi` the text editor used by `visudo`, you can use any other text editor you like. For example, `gedit /etc/sudoers`.
    After changing the sudoers file, you'd better check that file with `visudo -c`. This command will check the syntax error in `sudoers`.
    If sudo still doesn't work, try reboot your system.

    ​    