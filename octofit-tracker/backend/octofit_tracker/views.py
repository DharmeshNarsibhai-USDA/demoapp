from rest_framework import viewsets
from rest_framework.response import Response
from .models import User, Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer

BASE_URL = "https://ubiquitous-umbrella-g4r7p54q6wphj9-8000.app.github.dev"

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

def api_root(request, format=None):
    return Response({
        'users': f'{BASE_URL}/api/users/',
        'teams': f'{BASE_URL}/api/teams/',
        'activity': f'{BASE_URL}/api/activity/',
        'workouts': f'{BASE_URL}/api/workouts/',
        'leaderboard': f'{BASE_URL}/api/leaderboard/',
    })
