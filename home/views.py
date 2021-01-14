from django.shortcuts import render
from django.shortcuts import redirect
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.

def home(request):
    return  render(request,'home/index.html')

def contact_form(request):
    return  render(request,'home/contact.html')

def products(request):
    return  render(request,'home/products.html')

def contact_send(request):
    if request.method =='POST':
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        mobile = request.POST['mobile']
        email = request.POST['email']
        message = request.POST['textarea']

    subject = 'Enquiry'
    message = "FirstName: {}\nLastName: {}\nMobile: {}\nEmail: {}\nMessage: {}".format(first_name,last_name,mobile,email,message)
    email_from = settings.EMAIL_HOST_USER
    email_to = [email]
    send_mail(subject, message, email_from, email_to, fail_silently=False)

    return redirect('homepage')

def our_client(request):
    return render(request,'home/client.html')

def about_us(request):
    return render(request,'home/aboutus.html')


def faq(request):
    return  render(request,'home/faq.html')

def expansion(request):
    return render(request,'home/manu.html')

def certificate(request):
    return render(request,'home/cer.html')