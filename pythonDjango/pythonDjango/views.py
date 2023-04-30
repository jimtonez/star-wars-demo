from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .settings.serializers import UserSerializer
from .settings.models import User

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()