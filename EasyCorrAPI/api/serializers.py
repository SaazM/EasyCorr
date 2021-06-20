from rest_framework import serializers
from .models import Correlation

class CorelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correlation
        fields = ("id", "apiLink1", "name1", "apiLink2", "name2", "correlationVal", "lastUpdated")