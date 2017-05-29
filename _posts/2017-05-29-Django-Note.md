---
layout: post
title: Django Note
tags:
- Django
- Python
---

## [Update Method](https://docs.djangoproject.com/en/1.9/ref/models/querysets/#update)

If you’re just updating a record and don’t need to do anything with the model object, the most efficient approach is to call update(), rather than loading the model object into memory. For example, instead of doing this:
```python
e = Entry.objects.get(id=10)
e.comments_on = False
e.save()
```
...do this:
```python
Entry.objects.filter(id=10).update(comments_on=False)
```

> Using update() also prevents a race condition wherein something might change in your database in the short period of time between loading the object and calling save().
> Update() does an update at the SQL level and, thus, does not call any save() methods on your models, nor does it emit the pre_save or post_save signals (which are a consequence of calling Model.save()).

## Django Objects
Using to_dict() method to retrive columns of an object is convenient, but when it envolves too many records, it becomes very slow. Because when django create the object, it does not only create one instance, but also create the instance of the model's ForeignField and ManyToManyField which is slow and not really necessary.

## [Manager](https://docs.djangoproject.com/en/1.9/topics/db/managers/#adding-extra-manager-methods)
>Adding extra Manager methods is the preferred way to add “table-level” functionality to your models. (For “row-level” functionality – i.e., functions that act on a single instance of a model object – use Model methods, not custom Manager methods.)

## [QuerySet](https://docs.djangoproject.com/en/1.9/ref/models/querysets/)
### When QuerySets are evaluated
* Iteration
* Slicing
* Pickling/Caching
* repr()
* list()
* bool()

## CSFR
During developping a django site, when you login your site with your identity, your cookie will be set with your session_id and csfr_token. Then, if you try to submit something in another page which does not require csrf protection with the same domain(e.g. localhost), you will get an csrf incorrect error. This is because your previous csrf_token is sent to a view which does not require csrf. The solutions are:

* Changing domain. Use 127.0.0.1 for another page
* Or cleaning cookie in your browser(Ctrl+Shift+I -> Resources -> Cookies -> delete related cookies)
* Or use incognite mode for another page