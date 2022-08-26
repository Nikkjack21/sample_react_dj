from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from apiview.views import AddBooking, AllBookingList, ApprovedView, BookGenericAdd, BookingStatus, DeclinedView, DeleteUser, DetailsAdd, EditUser, ListApproved, ListDeclined, MyTokenObtainPairView, RegisterUser
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

    path('booking', AddBooking.as_view()),
    path('list', AllBookingList.as_view()),
    path('status/<int:id>', BookingStatus.as_view()),
    path('change/<int:id>', views.ChangeStatus),
    path('approved/<int:id>', ApprovedView.as_view()),
    path('declined/<int:id>', DeclinedView.as_view()),
    path('listapproved', ListApproved.as_view()),
    path('listdeclined', ListDeclined.as_view()),
    path('addtest', BookGenericAdd.as_view()),

    



]