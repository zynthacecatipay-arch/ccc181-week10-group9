// Welcome screen shown after a successful login (Member 3)
import { useEffect, useState } from 'react';
import { getMe, ApiError, messageFor } from '../api/auth';
import type { User } from '../api/auth';

type WelcomeProps = {
  token: string;
  onLogout: () => void;
};

export default function Welcome({ token, onLogout }: WelcomeProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getMe(token)
      .then(setUser) // Success
      .catch((err) => {
        console.error(err);
        if (err instanceof ApiError && err.status === 401) {
          onLogout(); // token is bad or expired: back to the login form
          return;
        }
        setError(messageFor(err)); // Error
      })
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) {
    return <p className="auth-status">Loading...</p>;
  }

  if (error) {
    return (
      <section className="welcome">
        <p className="auth-error" role="alert">{error}</p>
        <button className="btn btn--secondary welcome__logout" onClick={onLogout}>
          Back to sign in
        </button>
      </section>
    );
  }

  return (
    <section className="welcome">
      <h1 className="welcome__title">Welcome, {user?.name ?? user?.email}!</h1>
      <button className="btn btn--secondary welcome__logout" onClick={onLogout}>
        Log out
      </button>
    </section>
  );
}