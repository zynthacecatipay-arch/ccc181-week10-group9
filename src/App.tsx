// App: shows the login screen, or the Welcome screen once a token is saved.
// Week 12-13: edited by Member 3 to switch screens (group informed).
import { useState } from 'react';
import Navbar from './components/Navbar';
import BrandPanel from './components/BrandPanel';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { getToken, clearToken } from './api/auth';

export default function App() {
  // a saved token means the user is signed in (this also survives a refresh)
  const [token, setToken] = useState<string | null>(getToken());

  function handleLogout() {
    clearToken();
    setToken(null);
  }

  return (
    <div className="page">
      <Navbar />
      <main className="container">
        {token ? (
          <Welcome token={token} onLogout={handleLogout} />
        ) : (
          <div className="login-layout">
            <BrandPanel />
            <LoginForm onLoginSuccess={setToken} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}