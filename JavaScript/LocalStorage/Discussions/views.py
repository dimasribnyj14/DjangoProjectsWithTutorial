from django.shortcuts import render, redirect
from Discussions.models import Discussion
# Create your views here.
def discussions(request):
    if request.method == 'POST':
        # Заголовок, контент, Изображение (берем из запроса и записываем в переменную)
        name = request.POST.get('name')
        text = request.POST.get('text')
        # Создаем и добавляем пост в базу данных
        Discussion.objects.create(name = name, text = text)
        return redirect('discussions')
    # Список постов, взятых из базы данных
    list_posts = Discussion.objects.all()
    return render(request,'discussions.html',context={"list_posts":list_posts})