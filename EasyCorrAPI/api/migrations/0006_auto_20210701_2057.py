# Generated by Django 3.2.4 on 2021-07-02 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_correlation_unique_corr'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='correlation',
            name='unique_corr',
        ),
        migrations.AddConstraint(
            model_name='correlation',
            constraint=models.UniqueConstraint(fields=('code1', 'code2', 'user'), name='unique_corr'),
        ),
    ]
