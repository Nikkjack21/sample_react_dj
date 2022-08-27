import json
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from account.models import Account
from apiview.models import Booking
from apiview.serializer import AccountSerializer, BookingSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import SessionAuthentication
# Create your views here.



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['id'] = user.id
        token['username'] = user.username
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['is_admin'] = user.is_admin
        # ...
        
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer




class RegisterUser(APIView):
    def post(self, request):
        user = AccountSerializer(data=request.data)
        if user.is_valid():
            user.save()
            return Response(user.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
        

class DeleteUser(APIView):
    def post(self, request, pk):
        user = Account.objects.get(id=pk)
        user.delete()
        return Response(status=status.HTTP_202_ACCEPTED)

class EditUser(APIView):
    def post(self, request, id):
        user = Account.objects.get(id=id)
        userData =  AccountSerializer(instance=user, data=request.data, partial=True)
        if userData.is_valid():
            userData.save()
        return Response(userData.data, status=status.HTTP_200_OK)



@api_view(['GET'])
def allUser(request):
    users = Account.objects.all()
    serializer = AccountSerializer(users, many=True)
    return Response(serializer.data)
    



class DetailsAdd(APIView):
    def post(self,request ):
        print('POST', request.body)
        body = request.body.decode('utf-8')
        body = json.loads(body)
        first_name=body['first_name']
        last_name=body['last_name']
        email=body['email']
        username=body['username']
        password=body['password'] 
        user = Account.objects.create_user(email=email,username=username,password=password ,first_name=first_name,last_name=last_name)
        user.save()
        
        return Response (200)



class TestUser(APIView):
    def post(self, request,id):
            body = request.body.decode('utf-8')
            body = json.loads(body)
            fullname=body['fullname']
            phone=body['phone']
            email=body['email']
            company_name=body['company_name']
            city=body['city']
            state=body['state']
            address=body['address']
            user = Account.objects.get(id=id)
            book = Booking.objects.create(fullname=fullname, phone=phone,
            email=email, user=user , company_name=company_name, city=city, state=state,address=address)
            book.save()
            return Response(200)
        
    
@api_view(['GET'])
def viewuser(request):
        user = request.user
        print('USer present', user),
        return Response(user,200)
   


class AddBooking(APIView):
    def post(self, request):
        booking         = BookingSerializer(data = request.data)
        print('Booking' ,request.user)
        if booking.is_valid():
            booking.save()

            return Response(booking.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)




from rest_framework import viewsets
class BookGenericAdd(APIView):
    def post(self, request):
       serializer = BookingSerializer()
       return Response(serializer.data, status=status.HTTP_200_OK)





class AllBookingList(APIView):
    def get(self, request):
        booking      = Booking.objects.filter(pending=True, approved=False, declined=False)
        list         = BookingSerializer(booking, many=True)
        if list:
            return Response(list.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
  
  

class BookingStatus(APIView):
    def post(self, request, id):
        booking = Booking.objects.get(id=id)

        bookingData  = BookingSerializer(instance=booking, data=request.data, partial=True)
        if bookingData.is_valid():
            bookingData.save()
        return Response(bookingData.data, status=status.HTTP_200_OK)



class ApprovedView(APIView):
    def post(self, request, id):
        booking             = Booking.objects.get(id=id)
        booking.approved    = True  
        booking.pending     = False      
        booking.save()

        test = Booking.objects.filter(approved=True)
        sample = BookingSerializer(test, many=True)

        return Response(sample.data, status=status.HTTP_200_OK)



@api_view(['POST'])
def ChangeStatus(request, id):
    booking             = Booking.objects.get(id=id)
    booking.approved    = True        
    booking.save()
    return Response(200)

  
        
class DeclinedView(APIView):
    def post(self, request, id):
        booking             = Booking.objects.get(id=id)
        booking.declined    = True        
        booking.save()
        bookData = BookingSerializer(instance=booking, data=request.data, partial=True)
        if bookData.is_valid():
            bookData.save()
        return Response(bookData.data, status=status.HTTP_200_OK)

class ListApproved(APIView):
    def get(self, request):
        booking =  Booking.objects.filter(approved=True)
        ser    = BookingSerializer(booking, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)

class ListDeclined(APIView):
    def get(self, request):
        booking =  Booking.objects.filter(declined=True)
        ser    = BookingSerializer(booking, many=True)
        return Response(ser.data, status=status.HTTP_200_OK)

    
    
class BookingDetails(APIView):
    def get(self, request, id):
        booking         = Booking.objects.get(id=id)
        list            = BookingSerializer(booking)
        print('boookin', booking)
        return Response(list.data)

