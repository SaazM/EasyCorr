import requests
import pandas as pd
def corrValF(code1, code2):
    year='2019'
    dsource='acs/acs1'
    dname='profile'
    cols=f'NAME,{code1},{code2}'
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
    df=df.astype(dtype={code1:'float64',code2:'float64'}, copy=True)
    column_1 = df[code1]
    column_2 = df[code2]
    correlation = column_1.corr(column_2)
    correlation = round(correlation, 2)
    return correlation