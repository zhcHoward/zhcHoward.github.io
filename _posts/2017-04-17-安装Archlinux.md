---
layout: post
title: 安装Archlinux
tags:
- Arch Linux
---

安装Arch Linux其实没什么难的，按照[wiki](https://wiki.archlinux.org/index.php/Installation_guide)上写的一步一步操作就行了。

这里我只是想记录一下在安装过程中遇到的问题：
1. 制作U盘启动
   推荐在Linux或Mac OS下使用`dd`命令。在Windows下，也可以，不过步骤比较繁琐，我试了一次，没成功，就没再试了。
2. 在运行`timedatectl status`时，报错`Failed to query server, invalid parameters`（好像是这个错误信息）
   出错原因似乎是当前系统没有时间。所以要用`timedatectl set-time YYYY-MM-DD HH:mm:ss`命令，给系统设置一个时间。然后，其他相关命令就都能正常使用了。
3. 在用`pacstrap`安装程序时，如果出现Key有问题，无法安装。比较方便的方法是，将`/etc/pacman.conf`的`SigLevel`一行的设置改为`SigLevel = Never`。