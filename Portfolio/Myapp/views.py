from django.shortcuts import render,HttpResponse
from .models import Datas
# Create your views here.

def hi(req):
    return render(req,'intro.html')
def room(req,id=None):
    obj = Datas.objects.all()
    if id is not None:
        id += 1
        print(id)
    else:    
        id = 0
        print(id)
    return render(req,'index.html',{'input': obj[id],'id' : id})

def past(req,id):
    obj = Datas.objects.all()
    if id != 0:
        id -= 1
        print(id)
    else:
        print(id)
    return render(req,'index.html',{'input': obj[id],'id' : id})


