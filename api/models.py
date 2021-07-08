from django.db import models
from .funcs import corrValF
from django.contrib.auth.models import User
# Create your models here.

class Correlation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    code1 = models.CharField(max_length=20)
    code2 = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['code1', 'code2', "user"], name='unique_corr')
        ]
    @property
    def corrVal(self):
        return corrValF(self.code1, self.code2)


    def __str__(self):
        return f"{self.name1} and {self.name2}"
