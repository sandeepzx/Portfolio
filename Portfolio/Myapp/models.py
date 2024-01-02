from django.db import models

# Create your models here.
class Datas(models.Model):
    name = models.CharField(max_length=250)
    img =  models.ImageField(upload_to='pics')
    course = models.CharField(max_length=250)
    institute = models.CharField(max_length=250)
    year = models.DateField()
    mark = models.CharField(max_length=250)