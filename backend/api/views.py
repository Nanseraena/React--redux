from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET', 'POST'])
def todo_list(request):
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        item = request.data.get('item')
        if item:
            todo = Todo.objects.create(item=item)
            return Response(TodoSerializer(todo).data)
        return Response({'error': 'Item required'}, status=400)

@api_view(['DELETE'])
def todo_detail(request, pk):
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response(status=404)
    
    todo.delete()
    return Response(status=204)

@api_view(['GET'])
def dashboard_stats(request):
    data = {
        'users': 1234,
        'sessions': 567,
        'revenue': 12450
    }
    return Response(data)
