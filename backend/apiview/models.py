from operator import mod
from django.db import models
from account.models import Account


class Booking(models.Model):

    BOOKING_STATUS = (
        ('PENDING', 'PENDING'),
        ('DECLINED', 'DECLINED'),
        ('APPROVED', 'APPROVED'),
    )


    user                = models.ForeignKey(Account, on_delete=models.CASCADE, null=True)
    fullname            = models.CharField(max_length=25)
    phone               = models.IntegerField()
    company_name        = models.CharField(max_length=25)
    city                = models.CharField(max_length=25)
    state               = models.CharField(max_length=25)
    email               = models.CharField(max_length=30, unique=True)
    address             = models.CharField(max_length=100,null=True)
    approved            = models.BooleanField(default=False)
    declined            = models.BooleanField(default=False)
    pending             = models.BooleanField(default=True)
    allotted            = models.BooleanField(default=False)

    class Meta:
        verbose_name        = 'Booking'
        verbose_name_plural = 'Booking'


    def __str__(self):
        return self.company_name

    


class BookingSlot(models.Model):
    booking     = models.ForeignKey(Booking,on_delete=models.SET_NULL, null=True, blank=True)
    room        = models.IntegerField(unique=True)
    is_booked   = models.BooleanField(default=False, null=True, blank=True) 

    def _str__(self):
        return self.booking





