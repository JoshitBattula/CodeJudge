import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    console.log(data);
    // Handle login success or failure here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login to CodeJudge</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            className="bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="remember-me" className="flex items-center text-sm text-gray-900 cursor-pointer">
              <input
                type="checkbox"
                id="remember-me"
                className="mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <p className="text-gray-700 text-center mb-4">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
