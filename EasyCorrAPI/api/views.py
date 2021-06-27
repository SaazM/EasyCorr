from django.shortcuts import render
from rest_framework import generics, status
from .models import Correlation
from .serializers import CorrelationSerializer, CreateCorrelationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class CorrelationView(generics.ListAPIView):
    queryset = Correlation.objects.all()
    serializer_class = CorrelationSerializer
class CreateCorrelationView(APIView):
    serializer_class = CreateCorrelationSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            apiLink1 = serializer.data.get("apiLink1")
            apiLink2 = serializer.data.get("apiLink2")
            name1 = serializer.data.get("name1")
            name2 = serializer.data.get("name2")
            correlation = Correlation(apiLink1=apiLink1, apiLink2=apiLink2, name1=name1, name2=name2)
            correlation.save()
        return Response(CorrelationSerializer(correlation).data, status=status.HTTP_201_CREATED) 

