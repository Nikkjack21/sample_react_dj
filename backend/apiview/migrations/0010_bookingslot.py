# Generated by Django 4.1 on 2022-08-27 09:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiview', '0009_remove_booking_status_booking_pending'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookingSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room', models.IntegerField()),
                ('is_booked', models.BooleanField(default=False)),
                ('booking', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiview.booking')),
            ],
        ),
    ]
