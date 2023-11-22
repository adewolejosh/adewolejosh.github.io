---
title: Django querying the faster way
description: Approaches that make your django queries faster
date: "Sep. 10, 2023"
img: django-querying-the-fast-way.jpg
alt: django querying
ref: "Photo by Dušan veverkolog on Unsplash: I loved the Irony lol"
quote: '"Have you ever ran into issues whilst trying to query a large amount of data in django? Well, I have also, but the following article(a continuous reiterative process, will update from t2t) are approaches I have practically taking to optimize my queries. This article is also dedicated to all my django bosses who have helped shaped my knowledge on it... Due to so many reasons this will be an explanation with code show, not necessarily a time efficiency comparison article."'
tags:
    - "django"
    - "big-data"
    - "querying"
    - "suggestive"
    - "continuous"
---


### Intro
---

This is a somewhat technical writing; for a while now I have worked on some python project(s) (mostly using Django and DRF - django rest framework) extensively with a relatively or considerably large amount of data, and on some occasions I've had to work on filters, querysets: sorting and returning data to be consumed, as optimally as possible. This article will be covering some of the things I figured as well as learnt whilst trying to achieve an efficient solution. edited Oct.30 (honestly need to start this already, said will publish at Sept 10 but this is already that, crazy) . Edited again in Nov. 22 :( , deploying thit time abeg!!!

### Dig
---

Avoid using .order_by() as much as possible, this definitely had to come to mind first, crazy but true talk. Django filter provided this method for use when filtering, just in case you wanted to sort it by whatever field. Unfortunately when used on a data of over 100k rows (approximately 100 columns), it
brought about a great lag; An alternative is, get the records, or simply use the .filter() and use python's .sorted() to do that. Although, I didn't compare what happens with more data, I mean, what are the odds- it is better in a longer time or sumn. Well, that's our first: python's .sorted() over django .order_by().

You probably know this if you've used django for long: using .values() and .values_list() (with sometimes .values_list(Flat=True) to flatten the result) this helps in resolving your filtered data into a dictionary and array/list respectively and reducing the amount of data being returned, instead of retrieving every data in every column of every row, you use this to instantly select/pick the columns you need from every row. In some ways this make your querying faster although the trade-off I see is, being expected to manage the columns you need manually I guess. Having to input that I want this and that field and all that.

Using managers properly, well, using managers in django as helpers for filters or worse filters, has some way of keeping your codes neater, giving you more freedom and flexibity to write frequently called filters.