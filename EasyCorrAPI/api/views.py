from django.shortcuts import render
from rest_framework import generics
from .models import Correlation
from .serializers import CorelationSerializer
# Create your views here.

class CorrelationView(generics.ListAPIView):
    queryset = Correlation.objects.all()
    serializer_class = CorelationSerializer