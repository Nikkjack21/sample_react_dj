# Generated by Django 4.1 on 2022-08-24 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiview', '0005_alter_booking_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='status',
            field=models.CharField(choices=[('PENDING', 'PENDING'), ('DECLINE', 'DECLINED'), ('APPROVE', 'APPROVED')], default='PENDING', max_length=15, null=True),
        ),
    ]
