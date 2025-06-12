from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data.'

    def handle(self, *args, **kwargs):
        # Users
        user1 = User.objects.create(email='alice@example.com', name='Alice', password='alicepass')
        user2 = User.objects.create(email='bob@example.com', name='Bob', password='bobpass')
        user3 = User.objects.create(email='carol@example.com', name='Carol', password='carolpass')

        # Teams
        team1 = Team.objects.create(name='Team Alpha')
        team2 = Team.objects.create(name='Team Beta')
        team1.members.add(user1, user2)
        team2.members.add(user3)

        # Workouts
        workout1 = Workout.objects.create(name='Pushups', description='Do 20 pushups', difficulty='Easy')
        workout2 = Workout.objects.create(name='Running', description='Run 1 mile', difficulty='Medium')

        # Activities
        Activity.objects.create(user=user1, activity_type='run', duration=30, date=date(2025, 6, 10), points=10)
        Activity.objects.create(user=user2, activity_type='walk', duration=60, date=date(2025, 6, 11), points=8)
        Activity.objects.create(user=user3, activity_type='strength', duration=45, date=date(2025, 6, 12), points=12)

        # Leaderboard
        Leaderboard.objects.create(user=user1, points=10, rank=2)
        Leaderboard.objects.create(user=user2, points=8, rank=3)
        Leaderboard.objects.create(user=user3, points=12, rank=1)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
