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
    <header>
      <h1>My App</h1>
      {user && <span>{user.name}</span>}
      {user && <span>{user.name}</span>}
    </header>
  );
}
