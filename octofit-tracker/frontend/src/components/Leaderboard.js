import React, { useEffect, useState } from 'react';


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://ubiquitous-umbrella-g4r7p54q6wphj9-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Leaderboard</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.user}</td>
                <td>{entry.points}</td>
                <td>{entry.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
