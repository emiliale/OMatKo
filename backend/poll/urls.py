from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
      path('<int:vote_id>/', views.detail, name='detail'),
    path('<int:vote_id>/vote/', views.vote, name='vote'),
]
