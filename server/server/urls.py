from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from catarsinho import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'projects', views.ProjectViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/', obtain_jwt_token),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
]
