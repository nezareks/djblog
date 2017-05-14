from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from blogdb.models import Article
from blogdb.serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer