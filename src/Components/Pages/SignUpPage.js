import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/LoginPage.css';

function SignUpPage() {
  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUpPage;
