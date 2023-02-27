from django.shortcuts import render

# Create your views here.
def localstorage_show(request):
    return render(request,'index.html')