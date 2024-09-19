"""
URL configuration for django_tour project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .yasg import urlpatterns as doc_urls
from django.conf.urls import include
from rest_framework import routers
from backend_api.views import *


router = routers.SimpleRouter()
router.register(r'tours', TourViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'day', DayViewSet)
router.register(r'gallery', GalleryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    # path('api/v1/tourlist/', TourAPIList.as_view()),
]

urlpatterns += doc_urls
