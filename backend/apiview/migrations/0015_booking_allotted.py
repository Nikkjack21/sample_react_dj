# Generated by Django 4.1 on 2022-08-30 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiview', '0014_alter_bookingslot_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='allotted',
            field=models.BooleanField(default=False),
        ),
    ]
