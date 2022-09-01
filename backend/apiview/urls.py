from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from apiview.views import AddBooking, AddSlot, AllBookingList, ApprovedView, AssignSlot, BookingDetails, BookingStatus, DeclinedView, DeleteUser, DetailsAdd, EditUser, ListApproved, ListDeclined, MyTokenObtainPairView, RegisterUser, TestUser, TotalList, ViewSlots, getBookingDetails 
from .import views

urlpatterns = [
  
      path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('all', views.allUser),
    path('register', RegisterUser.as_view()),
    path('delete/<int:pk>', DeleteUser.as_view()),
    path('edit/<int:id>', EditUser.as_view()),
    path('adduser', DetailsAdd.as_view()),

    # Bookings

    # path('booking', AddBooking.as_view()),
    path('list', AllBookingList.as_view()),
    # path('status/<int:id>', BookingStatus.as_view()),
    # path('change/<int:id>', views.ChangeStatus),
    path('approved/<int:id>', ApprovedView.as_view()),
    path('declined/<int:id>', DeclinedView.as_view()),
    path('listapproved', ListApproved.as_view()),
    path('listdeclined', ListDeclined.as_view()),
    path('booking/<int:id>/', TestUser.as_view()),
    path('booking-details/<int:id>', BookingDetails.as_view()),
    path('all-list',TotalList.as_view()),

    #Slot-Adding
    path('view-slots', ViewSlots.as_view()),
    path('add-slot', AddSlot.as_view()),
    path('assign-slot/<int:id>/<int:pk>', AssignSlot.as_view()),
    path('booking-details/<int:id>',getBookingDetails.as_view()),

    



]