from django.contrib import admin

from apiview.models import Booking

# Register your models here.

class BookingAdmin(admin.ModelAdmin):
    list_display= ( 'fullname', 'phone', 'company_name','email' )
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Booking, BookingAdmin)
