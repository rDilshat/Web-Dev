from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductList.as_view(), name="products-view-create"),
    path("products/<int:pk>", views.ProductDetailView.as_view(), name="producs-detail-view"),
    path("categories/", views.CategoryList.as_view(), name="category-list-view"),
    path("categories/<int:pk>", views.CategoryDetailView.as_view(), name="category-detail-view"),
    path("categories/<int:pk>/products/", views.ProductsCategory.as_view(), name="products-category-view")
]