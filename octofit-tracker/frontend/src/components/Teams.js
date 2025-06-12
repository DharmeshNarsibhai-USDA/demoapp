import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ubiquitous-umbrella-g4r7p54q6wphj9-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
                <td>{team.members && team.members.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
