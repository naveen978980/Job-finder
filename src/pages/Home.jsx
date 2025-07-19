import React, { useState } from 'react';

export default function JobFinder() {
  const workers = [
    { id: 1, name: 'Ravi Kumar', skill: 'Electrician', phone: '9876543210', location: 'Delhi' },
    { id: 2, name: 'Anjali Sharma', skill: 'Plumber', phone: '9123456780', location: 'Pune' },
    { id: 3, name: 'Sita Devi', skill: 'Painter', phone: '9988223344', location: 'Lucknow' },
  ];

  const bookings = [
    { workerId: 1, date: '2025-07-14', client: 'Akash', location: 'Delhi' },
    { workerId: 2, date: '2025-07-15', client: 'Maya', location: 'Pune' },
    { workerId: 1, date: '2025-07-16', client: 'Ritu', location: 'Noida' },
    { workerId: 3, date: '2025-07-17', client: 'Sanjay', location: 'Lucknow' },
  ];

  const [visibleWorker, setVisibleWorker] = useState(null);

  const toggleDetails = (id) => {
    setVisibleWorker(visibleWorker === id ? null : id);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
       body, html, #root {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); /* nice blue gradient */
}


}
        }
        .container {
          width: 100vw;
          padding: 30px 10px;
        }
        .title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 30px;
        }
        .worker-card {
          background: #ffffff;
          border-left: 6px solid #2563eb;
          margin-bottom: 20px;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          width: 90vw;
        }
        .worker-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        .worker-name {
          font-size: 1.4rem;
          font-weight: bold;
          color: #1e293b;
          margin: 0;
        }
        .worker-skill {
          font-size: 0.95rem;
          color: #475569;
        }
        .toggle-btn {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          margin-top: 10px;
        }
        .toggle-btn:hover {
          background-color: #1d4ed8;
        }
        .worker-details {
          margin-top: 15px;
          font-size: 0.95rem;
          color: #1f2937;
        }
        .worker-details a {
          color: #0ea5e9;
          text-decoration: none;
        }
        .worker-details h4 {
          margin-top: 10px;
          color: #0f172a;
        }
        .worker-details ul {
          padding-left: 20px;
          list-style-type: disc;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .container {
            padding: 40px;
          }
        }
      `}</style>

      <div className="container">
        <h1 className="title"> Job Finder – Workers & Schedules</h1>

        {workers.map((worker) => {
          const showDetails = visibleWorker === worker.id;
          const workerBookings = bookings.filter((b) => b.workerId === worker.id);

          return (
            <div key={worker.id} className="worker-card">
              <div className="worker-header">
                <div>
                  <h2 className="worker-name">{worker.name}</h2>
                  <p className="worker-skill">Skill: {worker.skill}</p>
                </div>
                <button className="toggle-btn" onClick={() => toggleDetails(worker.id)}>
                  {showDetails ? 'Hide Details' : 'View Details'}
                </button>
              </div>
              {showDetails && (
                <div className="worker-details">
                <p><strong>Phone:</strong> <a href={`tel:${worker.phone}`}>{worker.phone}</a></p>
                  <p><strong>Location:</strong> {worker.location}</p>
                  <h4>📅 Scheduled Jobs:</h4>
                  {workerBookings.length > 0 ? (
                    <ul>
                      {workerBookings.map((job, index) => (
                        <li key={index}>
                          {job.date} – for <strong>{job.client}</strong> in {job.location}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No bookings yet.</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}