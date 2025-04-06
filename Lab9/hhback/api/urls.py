from django.urls import path
from . import views

urlpatterns = [
    path("companies/", views.CompanyList.as_view(), name="company-view"),
    path("companies/<int:pk>", views.CompanyDetailVeiw.as_view(), name="company-detail-view"),
    path("companies/<int:pk>/vacancies/", views.CompanyVacancy.as_view(), name="company-vacancy-view"),
    path("vacancies/", views.VacancyList.as_view(), name="vacancy-view"),
    path("vacancies/<int:pk>", views.VacancyDetailView.as_view(), name="vacancy-detail-view"),
    path("vacancies/top_ten", views.VacancyTopTen.as_view(), name="vacancy-10-view")
]