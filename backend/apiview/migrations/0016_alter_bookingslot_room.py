# Generated by Django 4.1 on 2022-08-30 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiview', '0015_booking_allotted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookingslot',
            name='room',
            field=models.IntegerField(unique=True),
        ),
    ]