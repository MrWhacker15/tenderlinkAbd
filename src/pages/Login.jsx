// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle redirection
import { Input } from '../components/ui/Input'; // Reusable Input component
import { Button } from '../components/ui/Button'; // Reusable Button component
import { Label } from '../components/ui/Label'; // Reusable Label component

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // 'buyer' or 'bidder' role
  const navigate = useNavigate(); // To navigate programmatically

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password || !role) {
      alert('Please fill in all fields and select a role.');
      return;
    }

    // For demo, we assume login is successful (in a real app, validate with API)
    if (role === 'buyer') {
  navigate('/buyer-dashboard');
} else if (role === 'bidder') {
  navigate('/bidder-dashboard');
} else if (role === 'admin') {
  navigate('/admin-dashboard');
} else if (role === 'evaluator') {
  navigate('/evaluator-dashboard');
}


  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        

        <div>
  <Label htmlFor="role">Select Role</Label>
  <div className="space-x-4 mt-2">
    <label>
      <input
        type="radio"
        name="role"
        value="buyer"
        checked={role === 'buyer'}
        onChange={() => setRole('buyer')}
      /> Buyer
    </label>
    <label>
      <input
        type="radio"
        name="role"
        value="bidder"
        checked={role === 'bidder'}
        onChange={() => setRole('bidder')}
      /> Bidder
    </label>
    <label>
      <input
        type="radio"
        name="role"
        value="admin"
        checked={role === 'admin'}
        onChange={() => setRole('admin')}
      /> Admin
    </label>

    <label>
  <input
    type="radio"
    name="role"
    value="evaluator"
    checked={role === 'evaluator'}
    onChange={() => setRole('evaluator')}
  /> Evaluator
</label>
  </div>
</div>


        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
