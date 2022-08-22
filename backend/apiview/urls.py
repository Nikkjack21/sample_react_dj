from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from apiview.views import DeleteUser, DetailsAdd, EditUser, MyTokenObtainPairView, RegisterUser
from .import views

urlpatterns = [
  
      path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('all', views.allUser),
    path('register', RegisterUser.as_view()),
    path('delete/<int:pk>', DeleteUser.as_view()),
    path('edit/<int:id>', EditUser.as_view()),
    path('adduser', DetailsAdd.as_view())



]