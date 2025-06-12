// Test data for octofit_db
use octofit_db;
db.users.insertMany([
  { email: 'alice@example.com', name: 'Alice', password: 'alicepass' },
  { email: 'bob@example.com', name: 'Bob', password: 'bobpass' },
  { email: 'carol@example.com', name: 'Carol', password: 'carolpass' }
]);

const alice = db.users.findOne({ email: 'alice@example.com' });
const bob = db.users.findOne({ email: 'bob@example.com' });
const carol = db.users.findOne({ email: 'carol@example.com' });

db.teams.insertMany([
  { name: 'Team Alpha', members: [alice._id, bob._id] },
  { name: 'Team Beta', members: [carol._id] }
]);

db.workouts.insertMany([
  { name: 'Pushups', description: 'Do 20 pushups', difficulty: 'Easy' },
  { name: 'Running', description: 'Run 1 mile', difficulty: 'Medium' }
]);

db.activity.insertMany([
  { user: alice._id, activity_type: 'run', duration: 30, date: ISODate('2025-06-10T00:00:00Z'), points: 10 },
  { user: bob._id, activity_type: 'walk', duration: 60, date: ISODate('2025-06-11T00:00:00Z'), points: 8 },
  { user: carol._id, activity_type: 'strength', duration: 45, date: ISODate('2025-06-12T00:00:00Z'), points: 12 }
]);

db.leaderboard.insertMany([
  { user: alice._id, points: 10, rank: 2 },
  { user: bob._id, points: 8, rank: 3 },
  { user: carol._id, points: 12, rank: 1 }
]);
