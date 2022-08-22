from functools import partial
import json
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from account.models import Account
from apiview import serializer
from apiview.serializer import AccountSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView
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
    



    
        