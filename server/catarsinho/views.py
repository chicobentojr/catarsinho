from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from catarsinho.serializers import UserSerializer, ProjectSerializer
from catarsinho.models import Project


class UserViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProjectViewSet(viewsets.ModelViewSet):

    permission_classes = (permissions.AllowAny,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
