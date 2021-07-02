from django.shortcuts import render
from rest_framework import generics, status
from .models import Correlation
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import CorrelationSerializer, CreateCorrelationSerializer, GetCorrelationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from .funcs import corrValF
import json
# Create your views here.

class CorrelationView(generics.ListAPIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CorrelationSerializer
    def get_queryset(self):
        user = self.request.user
        if hasattr(user, '_wrapped') and hasattr(user, '_setup'):
            if user._wrapped.__class__ == object:
                user._setup()
            user = user._wrapped
        print("-------------------------------")
        print(self.request.data)
        return Correlation.objects.filter(user=user)
class GetCorrelationView(APIView):
    def post(self, request):
        print("-------------------------------")
        print(request.data)
        serializer = GetCorrelationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        corrVal = corrValF(data["code1"], data["code2"])
        return Response({
            "corrVal": corrVal,
        })

class GetIsAuth(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
            "val": str(request.user.is_authenticated)
        }
        return Response(content)

class CreateCorrelationView(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CreateCorrelationSerializer
    def post(self, request, format=None):
        user = request.user
        if hasattr(user, '_wrapped') and hasattr(user, '_setup'):
            if user._wrapped.__class__ == object:
                user._setup()
            user = user._wrapped
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            code1 = serializer.data.get("code1")
            code2 = serializer.data.get("code2")
            #print("-------------------------------")
            #print(request.data)
            correlation = Correlation(code1=code1, code2=code2, user=user)
            correlation.save()
        return Response(CorrelationSerializer(correlation).data, status=status.HTTP_201_CREATED) 

