from rest_framework import serializers
from .models import Food
from .models import Category

class FoodSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=225)
    price = serializers.FloatField()
    description = serializers.CharField(max_length=225)

    class Meta:
        model = Food
        fields = ('__all__')

class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=225)
    description = serializers.CharField(max_length=225)

    class Meta:
        model = Category
        fields = ('__all__')