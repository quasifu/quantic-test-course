from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=225)
    price = models.FloatField()
    description = models.CharField(max_length=225)

class Category(models.Model):
  name = models.CharField(max_length=225)
  description = models.CharField(max_length=225)