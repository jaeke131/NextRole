import { Mail, Lock } from "lucide-react";
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-brand">NextRole</div>

      <div className="auth-card">
        <h1>Welcome back</h1>
        <p className="auth-subtitle">Log in to track your applications.</p>

        <form className="auth-form">
          <label>Email</label>
          <div className="auth-input-wrapper">
            <Mail size={18} />
            <input type="email" placeholder="you@example.com" />
          </div>

          <label>Password</label>
          <div className="auth-input-wrapper">
            <Lock size={18} />
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>

        <p className="auth-switch">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}