from django.db import models
import requests
import pandas as pd
# from django.contrib.auth.models import User
# Create your models here.

class Correlation(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    code1 = models.CharField(max_length=20)
    code2 = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def corrVal(self):
        year='2019'
        dsource='acs/acs1'
        dname='profile'
        cols=f'NAME,{self.code1},{self.code2}'
        state='*'
        county='*'
        base_url = f'https://api.census.gov/data/{year}/{dsource}/{dname}'
        data_url = f'{base_url}?get={cols}&for=county:{county}&in=state:{state}'
        response=requests.get(data_url)
        data=response.json()
        df=pd.DataFrame(data[1:], columns=data[0])
        df['fips']=df.state+df.county
        df.set_index('fips',inplace=True)
        df.drop(columns=['state','county'],inplace=True)
        df=df.astype(dtype={self.code1:'float64',self.code2:'float64'}, copy=True)
        column_1 = df[self.code1]
        column_2 = df[self.code2]
        correlation = column_1.corr(column_2)
        correlation = round(correlation, 2)
        return correlation


    def __str__(self):
        return f"{self.name1} and {self.name2}"
