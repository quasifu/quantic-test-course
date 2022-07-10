#from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import FoodSerializer, CategorySerializer, OrderSerializer
from .models import Food, Category, Order
from .controllers import Delivery

class FoodViews(APIView):
    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        if id:
            item = Food.objects.get(id=id)
            serializer = FoodSerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        items = Food.objects.all()
        serializer = FoodSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

class CategoryViews(APIView):
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        if id:
            item = Category.objects.get(id=id)
            serializer = CategorySerializer(item)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        items = Category.objects.all()
        serializer = CategorySerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

class OrderViews(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, name=None):
        if name:
            item = Order.objects.filter(name__iexact=name)
            serializer = OrderSerializer(item, many=True)
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

        items = Order.objects.all()
        serializer = OrderSerializer(items, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

class DeliveryView(APIView):
    def get(self, request, name=None, distance=0):
      items = Order.objects.filter(name__iexact=name)
      deliveryCost = Delivery.calculate(items,distance)
      return Response({"status": "success", "data": deliveryCost}, status=status.HTTP_200_OK)
