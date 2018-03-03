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
    queryset = Project.objects.order_by('-created_at').all()
    serializer_class = ProjectSerializer


class AllProjectViewSet(viewsets.ModelViewSet):

    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.filter(user=self.request.user).order_by('-created_at').all()
