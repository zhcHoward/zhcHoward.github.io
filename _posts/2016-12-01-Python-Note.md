---
layout: post
title: Python Note
tags:
- Python2
- Encoding
---

datetime库下的strftime()函数, 接受一个`str`作为参数,用来把时间对象格式化成字符串。

但在Python2的项目中, 为了能够正常的读写汉字, 通常会在文件头里加一行`from __future__ import unicode_literals`, 这就导致在执行`time.strftime("%H时%M分%S秒")`时会报错，因为传入的是`unicode`而不是`str`了，这时需要将原代码改为`time.strftime("%H时%M分%S秒".encode('utf-8'))`就可以了。