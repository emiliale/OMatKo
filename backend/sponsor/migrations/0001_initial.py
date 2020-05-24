# Generated by Django 3.0.6 on 2020-05-24 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sponsor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sponsor_name', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('logo', models.CharField(blank=True, max_length=300)),
                ('type', models.CharField(choices=[('HON', 'Honorary'), ('MED', 'Media'), ('SPON', 'Sponsor')], max_length=20)),
            ],
        ),
    ]
