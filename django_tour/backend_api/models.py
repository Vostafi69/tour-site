from django.db import models

# Create your models here.


class Tour(models.Model):
    name = models.CharField(verbose_name='tour_name', max_length=150)
    category = models.ManyToManyField('Category', null=True)
    desc = models.TextField(blank=True, null=True)
    tag = models.CharField(verbose_name='tags', max_length=150)
    link = models.CharField(verbose_name='link', max_length=150)
    price = models.CharField(verbose_name='price', max_length=150)
    thumb = models.CharField(verbose_name='thumbnail', max_length=150)
    in_and_out = models.CharField(verbose_name='in_and_out', max_length=150)
    gallery = models.ManyToManyField('Gallery', null=True)

    def __str__(self):
        return self.name


class Gallery(models.Model):
    link = models.CharField(max_length=150)


class Category(models.Model):
    name = models.CharField(verbose_name="category_name", max_length=150)
    desk = models.TextField(blank=True, null=True)
    thumb = models.ImageField(upload_to="photos_category/%Y/%m/%d", null=True, blank=True)

    def __str__(self):
        return self.name


class Day(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='days', null=True)
    name = models.CharField(verbose_name="day_name", max_length=150)
    desk = models.TextField()
    photos = models.ImageField(upload_to="photos_day/%Y/%m/%d", null=True, blank=True)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=50)
