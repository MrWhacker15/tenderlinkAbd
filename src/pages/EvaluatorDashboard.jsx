import React from 'react';

const EvaluatorDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Evaluator Dashboard</h1>
      <p className="mb-4">Welcome, Evaluator! Review and score submitted bids.</p>

      <div className="space-y-4">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pending Evaluations</h2>
          <p>No bids currently pending. Check back later.</p>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Evaluation History</h2>
          <p>Track completed evaluations and outcomes.</p>
        </div>
      </div>
    </div>
  );
};

export default EvaluatorDashboard;
