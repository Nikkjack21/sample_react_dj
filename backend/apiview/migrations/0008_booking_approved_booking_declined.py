# Generated by Django 4.1 on 2022-08-24 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiview', '0007_alter_booking_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='booking',
            name='declined',
            field=models.BooleanField(default=False),
        ),
    ]
