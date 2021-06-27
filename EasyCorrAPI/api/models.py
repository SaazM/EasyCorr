from django.db import models
# from django.contrib.auth.models import User
# Create your models here.

class Correlation(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    apiLink1 = models.CharField(max_length=100)
    name1 = models.CharField(max_length=50)
    apiLink2 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=50)
    lastUpdated = models.DateTimeField(auto_now=True)

    @property
    def corrVal(self):
        #dummy value
        corrVal = 0
        return corrVal


    def __str__(self):
        return f"{self.name1} and {self.name2}"
