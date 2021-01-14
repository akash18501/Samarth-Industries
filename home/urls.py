from django.contrib import admin
from django.urls import path
from django.urls import include
from . import  views
urlpatterns = [
    path('',views.home,name = "homepage"),
    path('contact_from/',views.contact_form,name="contact_form"),
    path('products/',views.products,name = "products"),
    path('contact_send/',views.contact_send,name = "contact_send"),
    path('out_client/',views.our_client,name = "our_client"),
    path('about_us/',views.about_us,name = "about_us"),
    path('faq/',views.faq,name="faq"),
    path('expansion/',views.expansion,name="expansion"),
    path('certificate/',views.certificate,name="certificate"),
]
