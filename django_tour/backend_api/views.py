from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets
from rest_framework.pagination import *
from rest_framework import generics


class LimitOffSetPagination(PageNumberPagination):
    page_size = 4
    page_query_param = 'page_size'
    max_page_size = 4


class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    pagination_class = LimitOffSetPagination


# class TourAPIList(generics.ListAPIView):
#     queryset = Tour.objects.select_related("self_category").prefetch_related("self_category_name")
#     serializer_class = TourSerializer
#
#     def list(self, request):
#         queryset = self.filter_queryset(self.get_queryset())
#         serializer = TourListSerializer(queryset, many=True)
#         return Response(serializer.data)


class DayViewSet(viewsets.ModelViewSet):
    queryset = Day.objects.all()
    serializer_class = DaySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer



