import React, { useEffect, useState } from 'react';


function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://ubiquitous-umbrella-g4r7p54q6wphj9-8000.app.github.dev/api/activity/')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Activities</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
                <td>{activity.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
