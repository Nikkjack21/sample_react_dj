from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from account.models import Account

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ['id','first_name', 'last_name', 'username', 'email', 'password', 'is_admin' ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data) 
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance