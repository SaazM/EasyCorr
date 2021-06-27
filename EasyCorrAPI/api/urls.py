from django.urls import path, include
from .views import CorrelationView, CreateCorrelationView
urlpatterns = [
    path("", CorrelationView.as_view()),
    path("create-corr", CreateCorrelationView.as_view())
]