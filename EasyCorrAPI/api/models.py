from django.db import models

# Create your models here.

class correlation(models.Model):
    apiLink1 = models.CharField(max_length=100)
    name1 = models.CharField(max_length=50)
    apiLink2 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=50)
    correlationVal = models.DecimalField(max_digits=3, decimal_places=2)
    lastUpdated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name1} and {self.name2}"