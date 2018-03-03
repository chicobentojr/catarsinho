from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.TextField()
    value = models.FloatField()
    user = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)
