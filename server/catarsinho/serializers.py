from django.contrib.auth.models import User, Group
from rest_framework import serializers
from catarsinho.models import Project

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user



class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ProjectSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('user',)

    def create(self, validated_data):
        project = Project(**validated_data)
        project.user = self.context['request'].user
        project.save()

        return project
