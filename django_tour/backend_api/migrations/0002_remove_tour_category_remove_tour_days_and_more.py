# Generated by Django 5.1 on 2024-08-29 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tour',
            name='category',
        ),
        migrations.RemoveField(
            model_name='tour',
            name='days',
        ),
        migrations.RemoveField(
            model_name='tour',
            name='gallery',
        ),
        migrations.AddField(
            model_name='tour',
            name='category',
            field=models.ManyToManyField(null=True, to='backend_api.category'),
        ),
        migrations.AddField(
            model_name='tour',
            name='days',
            field=models.ManyToManyField(null=True, to='backend_api.day'),
        ),
        migrations.AddField(
            model_name='tour',
            name='gallery',
            field=models.ManyToManyField(null=True, to='backend_api.gallery'),
        ),
    ]
