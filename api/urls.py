from django.urls import path, include
from .views import CorrelationView, CreateCorrelationView, GetCorrelationView, GetIsAuth, DeleteCorrelationView
urlpatterns = [
    path("corr", CorrelationView.as_view()),
    path("create-corr", CreateCorrelationView.as_view()),
    path("get-corr", GetCorrelationView.as_view()),
    path("is-auth", GetIsAuth.as_view()),
    path("delete/<int:pk>", DeleteCorrelationView.as_view())

]