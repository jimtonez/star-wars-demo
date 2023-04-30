from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'user_email', 'user_name', 'character_name', 'image', 'ship_url', 'color', 'enabled', 'complete')