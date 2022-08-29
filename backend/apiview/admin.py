from django.contrib import admin

from apiview.models import Booking, BookingSlot

# Register your models here.

class BookingAdmin(admin.ModelAdmin):
    list_display= ( 'fullname', 'phone', 'company_name','email' )
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


class SlotAdmin(admin.ModelAdmin):
    list_display= (  'room', 'is_booked' )




admin.site.register(BookingSlot, SlotAdmin)
admin.site.register(Booking, BookingAdmin)
