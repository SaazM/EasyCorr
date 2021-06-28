from rest_framework import serializers
from .models import Correlation

class CorrelationSerializer(serializers.ModelSerializer):
    corrVal = serializers.ReadOnlyField()
    class Meta:
        model = Correlation
        fields = ("id", "code1","code2", "corrVal", "created_at")

class CreateCorrelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correlation
        fields = ("code1", "code2")