from django.urls import path, include
from .views import CorrelationView
urlpatterns = [
    path("", CorrelationView.as_view())
]