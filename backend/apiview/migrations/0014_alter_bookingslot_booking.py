# Generated by Django 4.1 on 2022-08-29 19:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiview', '0013_bookingslot_booking'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookingslot',
            name='booking',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiview.booking'),
        ),
    ]