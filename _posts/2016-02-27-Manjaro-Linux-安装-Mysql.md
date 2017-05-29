---
layout: post
title: Manjaro Linux 安装 Mysql
tags:
- Linux
- Mysql
- MariaDB
---

在Ubuntu上安装Mysql，从安装到初始化配置，流程基本很清晰，简单。但是，在Archlinux上，安装过程略有不同，在这里记录以下：[^Manjaro]

## 1. 安装Mysql：
```bash
pacman -S mysql
```
因为在Archlinux中，Mysql被MariaDB取代，所以在输入上面的命令后，安装命令会让你选择安装什么数据库。默认是MariaDB,另外一个我也不知道是什么数据库。在选择完要安装的数据库后，只需要等待安装完成就可以了。[^Mysql]

## 2. 完成安装：
```bash
mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
```
在第1步完成后，输入上面的命令，以完成Mysql的初始化。

## 3. 启动Mysql服务：
```bash
systemctl start mysqld
```
在这一步，Mysql服务有可能启动失败，你可以通过运行
```bash
systemctl status mysqld
```
来查看Mysql服务的运行状态。
如果，Mysql服务启动失败，有可能是因为/var/lib/mysql目录的权限是root的。因为第二步中的命令是需要root权限去运行的。解决办法：
```bash
chown mysql:mysql /var/lib/mysql -R
```

## 4. 配置Mysql默认设置（如root密码）：
```bash
mysql_secure_installation
```
输入上面的命令后，根据它的提示，一步一步往下设置就可以了。至此，Mysql也就安装完成了。

## Reference:
### Archwiki: [https://wiki.archlinux.org/index.php/MySQL](https://wiki.archlinux.org/index.php/MySQL)

[^Manjaro]: Manjaro Linux是基于Archlinux的一个分支，大部分命令与Archlinux并没有区别。

[^Mysql]: 虽然Mysql被Mariadb取代，但是你仍然可以在AUR([Arch User Repository](https://aur.archlinux.org/))中找到Mysql，不过AUR中的Mysql需要自己编译，有可能会花很久。而且，在编译Mysql之前，需要保证你的/tmp文件夹有足够大的空间，不然会因为/tmp目录没有足够的空间导致编译出错，我在编译的时候，给/tmp挂载了10GB的空间。