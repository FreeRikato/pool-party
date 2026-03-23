import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) return;
    login(username);
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 kinetic-gradient opacity-10" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl" />

      <div className="relative w-full max-w-md px-6">
        {/* Glass card */}
        <div className="glass-panel rounded-3xl p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-headline text-4xl font-bold text-primary mb-2 tracking-tight">
              Join the Arena
            </h1>
            <p className="font-body text-on-surface-variant text-sm">
              Create your account and get playing
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="font-label text-sm font-semibold text-on-surface block"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                className="w-full bg-surface-container-low px-5 py-4 rounded-xl font-body text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="font-label text-sm font-semibold text-on-surface block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-surface-container-low px-5 py-4 rounded-xl font-body text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="font-label text-sm font-semibold text-on-surface block"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full bg-surface-container-low px-5 py-4 rounded-xl font-body text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container font-label font-bold py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20 mt-6"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-on-surface-variant">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-label font-semibold text-primary hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
