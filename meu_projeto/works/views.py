from django.shortcuts import render
from .models import Project

def index(request):
    projects = Project.objects.all()
    return render(request, 'works/index.html', {'projects': projects})

def portfolio(request):
    return render(request, 'works/portfolio.html')

def projects(request):
    return render(request, 'works/projects.html')
