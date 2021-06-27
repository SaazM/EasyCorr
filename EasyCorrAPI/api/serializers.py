from rest_framework import serializers
from .models import Correlation

class CorrelationSerializer(serializers.ModelSerializer):
    corrVal = serializers.ReadOnlyField()
    class Meta:
        model = Correlation
        fields = ("id", "apiLink1", "name1", "apiLink2", "name2", "corrVal", "lastUpdated")

class CreateCorrelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correlation
        fields = ("apiLink1", "name1", "apiLink2", "name2")