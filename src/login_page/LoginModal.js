import React, { useState } from 'react';
import axios from "axios"

function LoginModal({ isOpen, onClose }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:8000/users/login', { email, password }).then((res) => {
        console.log('Logged in successfully:', res.data);
        alert(res.data.message)
        onClose();
      })
    } catch (e) {
      console.error('Login error:', e.response.data);
      setError(e.response.data.error);
      alert(error)
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 10 }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose} style={{ marginLeft: 10 }}>Cancel</button>
      </div>
    </div>
  );
}

export default LoginModal;
