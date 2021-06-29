from rest_framework import serializers
from .models import Correlation

class CorrelationSerializer(serializers.ModelSerializer):
    corrVal = serializers.ReadOnlyField()
    class Meta:
        model = Correlation
        fields = ("id", "code1","code2", "corrVal", "created_at")

class CreateCorrelationSerializer(serializers.Serializer):
    code1 = serializers.CharField(max_length=20)
    code2 = serializers.CharField(max_length=20)
class GetCorrelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correlation
        fields = ("code1", "code2")