import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/LoginPage.css';

function LoginPage() {
  return (
    <main className="main-content">
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </main>
  );
}

export default LoginPage;