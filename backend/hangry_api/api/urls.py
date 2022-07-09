from django.urls import path
from .views import FoodViews, CategoryViews

urlpatterns = [
    path('food/', FoodViews.as_view()),
    path('food/<int:id>', FoodViews.as_view()),
    path('category/', CategoryViews.as_view()),
    path('category/<int:id>', CategoryViews.as_view())
]
