from django.urls import path
from . import views

urlpatterns = [
    path('', views.taskList, name='task-list'),
    path('task/:id',views.taskView, name="task-view"),
    path('yourname/<str:name>', views.yourName, name='your-name')
]