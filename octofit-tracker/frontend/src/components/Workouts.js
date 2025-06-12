import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://ubiquitous-umbrella-g4r7p54q6wphj9-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Workouts</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{workout.name}</td>
                <td>{workout.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
