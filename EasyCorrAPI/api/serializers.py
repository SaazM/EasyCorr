from rest_framework import serializers
from .models import Correlation
from django.contrib.auth.models import User

class CorrelationSerializer(serializers.ModelSerializer):
    corrVal = serializers.ReadOnlyField()
    class Meta:
        model = Correlation
        fields = '__all__'


class CreateCorrelationSerializer(serializers.Serializer):
    code1 = serializers.CharField(max_length=20)
    code2 = serializers.CharField(max_length=20)
class GetCorrelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correlation
        fields = ("code1", "code2")