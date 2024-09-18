from django.urls import path,include
from blog.views import blog_view

app_name='blog'

urlpatterns = [
    path('', blog_view , name='index' ),
    #path('4-challenges-international-students-face-in-the-us/')
]