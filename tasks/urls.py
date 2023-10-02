from django.urls import path
from . import views

urlpatterns = [
    path('', views.taskList, name='task-list'),
    path('task/<int:id>',views.taskView, name="task-view"),
    path('newtask/', views.newTask, name='new-task'),
    path('edit/<int:id>', views.editTask, name='edit-task'),
    path('delete/<int:id>', views.deleteTask, name='delete-task'),
]