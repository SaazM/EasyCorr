from django.shortcuts import render
from rest_framework import generics, status
from .models import Correlation
from .serializers import CorrelationSerializer, CreateCorrelationSerializer, GetCorrelationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .funcs import corrValF
# Create your views here.

class CorrelationView(generics.ListAPIView):
    queryset = Correlation.objects.all()
    serializer_class = CorrelationSerializer
class GetCorrelationView(APIView):
    def post(self, request):
        serializer = GetCorrelationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        corrVal = corrValF(data["code1"], data["code2"])
        return Response({
            "corrVal": corrVal,
        })


class CreateCorrelationView(APIView):
    serializer_class = CreateCorrelationSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            code1 = serializer.data.get("code1")
            code2 = serializer.data.get("code2")
            correlation = Correlation(code1=code1, code2=code2)
            correlation.save()
        return Response(CorrelationSerializer(correlation).data, status=status.HTTP_201_CREATED) 

