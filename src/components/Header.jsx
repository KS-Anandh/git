
// Header.jsx (other dev branch)
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);
    
  useEffect(() => {
    fetch("/api/me")
      .then(res => res.json())
      .then(setUser);
  }, []);

  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/about">About</a>
      </nav>

      {user && <span>{user.name}</span>}
      {user && <span>{user.name}</span>}
    </header>
  );
}
