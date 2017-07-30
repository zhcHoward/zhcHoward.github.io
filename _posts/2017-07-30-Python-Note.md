---
layout: post
title: Python Note
tags:
- Python
- escape character
- raw string
---

在使用Python写脚本的时候，经常会遇到一种情况：需要使用调用shell中的命令去完成某个任务。这时可以使用`subprocess`模块。

例如，我想将`/etc/default/grub`中的`GRUB_HIDDEN_TIMEOUT`和`GRUB_HIDDEN_TIMEOUT_QUIET`设置给注释掉。使用`sed`命令，可以很容易做到。
````bash
sed -i -r 's/([# ]*)(GRUB_HIDDEN_TIMEOUT\S*)/#\2/' /etc/default/grub
````

在Python中，可以这样使用：

```python
import subprocess

p = subprocess.Popen(["sed -i -r 's/([# ]*)(GRUB_HIDDEN_TIMEOUT\S*)/#\2/' /etc/default/grub"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True, close_fds=True)
output, err = p.communicate()
```

这样看表面上没什么问题，但其实`sed`命令并不会达到想要的效果。原因就是Python会把字符串中的`\`当做转义字符。也就是说`sed`命令本身没什么问题，但把整个命令作为一个字符串传给`Popen`后，字符串被转义，其中的正则表达式已经不是原来的样子了。为了防止Python转义字符，可以在字符串前加上`r`。这样在运行时，Python会把这个字符串作为一个`raw string`来处理，不会对任何字符进行转义。所以，在上面的例子中，只需要将`"sed -i -r …"`改为`r"sed -i -r …"`就可以了。