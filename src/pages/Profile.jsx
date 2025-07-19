import { useState } from 'react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('loggedUser'));

  const [bookings, setBookings] = useState([
    { workerId: 1, date: '2025-07-14', client: 'Akash', location: 'Delhi' },
    { workerId: 2, date: '2025-07-15', client: 'Maya', location: 'Pune' },
    { workerId: 1, date: '2025-07-16', client: 'Ritu', location: 'Noida' }
  ]);

  const [newDate, setNewDate] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newClient, setNewClient] = useState('');

  const myJobs = bookings.filter(job => job.workerId === user?.id);

  const handleAddSchedule = () => {
    if (!newDate || !newLocation || !newClient) return;

    const newJob = {
      workerId: user.id,
      date: newDate,
      location: newLocation,
      client: newClient
    };

    setBookings([...bookings, newJob]);
    setNewDate('');
    setNewLocation('');
    setNewClient('');
  };

  const handleDeleteSchedule = (indexToDelete) => {
    const updated = bookings.filter((job, i) => {
      const isUserJob = job.workerId === user.id;
      const userJobIndex = myJobs.findIndex(j => j === job);
      return !(isUserJob && userJobIndex === indexToDelete);
    });
    setBookings(updated);
  };

  return (
    <>
      <style>{`
        body, html, #root {
          height: 100%;
          margin: 0;
          background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
          font-family: sans-serif;
        }
      `}</style>

      <div className="min-h-screen p-6">
        <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">My Profile</h2>

          {user ? (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Skill:</strong> {user.skill}</p>
              <p><strong>Email:</strong> {user.email}</p>

              <h3 className="mt-6 text-xl font-semibold">My Schedule</h3>
              {myJobs.length === 0 ? (
                <p className="text-gray-500 mt-2">No upcoming jobs</p>
              ) : (
                <ul className="mt-2 space-y-3">
                  {myJobs.map((job, index) => (
                    <li key={index} className="p-4 border rounded flex justify-between items-center">
                      <div>
                        <p><strong>Date:</strong> {job.date}</p>
                        <p><strong>Client:</strong> {job.client}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteSchedule(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Add Schedule Form */}
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Add New Schedule</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Client"
                  />
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Location"
                  />
                </div>
                <button
                  onClick={handleAddSchedule}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Schedule
                </button>
              </div>
            </>
          ) : (
            <p className="text-red-500">Please login first</p>
          )}
        </div>
      </div>
    </>
  );
}
