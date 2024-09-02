from rest_framework import serializers
from .models import *


class TourSerializer(serializers.ModelSerializer):
    days = serializers.StringRelatedField(many=True)

    category = serializers.StringRelatedField(many=True)

    gallery = serializers.StringRelatedField(many=True)

    class Meta:
        model = Tour
        fields = ['name', 'desc', 'tag', 'link', 'price', 'thumb', 'in_and_out', 'days', 'category', 'gallery']


# class TourListSerializer(TourSerializer):
#     def to_representation(self, instance):
#         return {
#             'name': instance.name,
#             'category': set(_.category.name for _ in instance.category.all()),
#         }


class GallerySerializer(serializers.Serializer):
    class Meta:
        model = Gallery
        fields = ['link']


class CategorySerializer(serializers.Serializer):
    class Meta:
        model = Category
        fields = ['name', 'desk', 'thumb']


class DaySerializer(serializers.Serializer):
    class Meta:
        model = Day
        fields = ['name', 'desk', 'photos']
