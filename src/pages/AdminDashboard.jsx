import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-2">Welcome, Admin! Here you can manage users and oversee all tender activity.</p>

      <div className="mt-6 space-y-4">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Buyer Accounts</h2>
          <p>View and manage all buyers registered on the platform.</p>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Bidder Accounts</h2>
          <p>Monitor bidders, review submissions, and take action as needed.</p>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">System Logs</h2>
          <p>Track login activity, errors, and other platform events.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
