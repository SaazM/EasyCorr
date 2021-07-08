# EasyCorr
## Web Page Beta V.0.1
[Easy Corr Website](https://www.google.com "Easy Corr Homepage")
## Description
EasyCorr is a website that allows users to gain useful statistical information such as correlations, pearson-r, etc from Census Data(I may expand into different data sources later but for now census data is reliable), an example of this is correlating median income to median cost to percent of people who have a bachelors. Users will also be able to make an account so that they can save correlations that they made.
## Why
This can be used for a lot of things from research to just messing around the website for fun. The world is an oyster(or something like that).## Why not just use an excele file?
## Why not just use excel?
Downloading a file from the census website and using excel or numbers to get statistical intuition involves a tedious process. First of all you may have to download gigabytes of data on your computer. Secondly it takes time to navigate such a large excel file(some datasets have over a hundred columns) and choose the columns you want to correlate, compared to EasyCorr which will allow users to query datasets and correlate them in a click of a button.
## How?
I used django rest for the backend, the backend handles the storing of the data and the calculating of the correlation. The data will be stored in a postgres sql using aws rds but for now the site just uses mysql(will be updated soon). The frontend uses react, the react app calls the backend api(axios) for doing things that i mentioned above, I used bootstrap 5 to style the website.
