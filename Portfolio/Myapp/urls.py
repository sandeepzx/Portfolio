from django.urls import path
from . import views
app_name = 'Myapp'
urlpatterns = [
    path('',views.hi, name= 'hi'),
    path('room', views.room, name='room'),
    path('room/<int:id>/', views.room, name='room_withid'),
    path('room_past/<int:id>/', views.past, name='room_rev'),
]