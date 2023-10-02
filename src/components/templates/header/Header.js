import React from 'react'
import '../../../styles/layout/Header.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

export default function Header() {
  const { signOut, user } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='header'>
      <nav>
      <ul>
          {user && (
            <li>
              <Link as={Link} to="/">Home</Link>
            </li>
          )}
          {user && (
            <li>
              <Link as={Link} to="/favourites">Favourites</Link>
            </li>
          )}
          {user && (
            <li>
              <Link as={Link} to="/my-list">My list</Link>
            </li>
          )}                  
          {user && (
            <li>
              <a href="/">Search</a>
            </li>
          )}
        </ul>
      </nav>
      <nav>
      <ul>
          {!user && (
              <li>
                <Link as={Link} to="/login">Login</Link>
              </li>
             
            )}
            {!user && (
              <li>
                <Link as={Link} to="/register">Register</Link>
              </li>
            )}
            {user && (
              <li>
                <a href="/" onClick={handleLogout}>Logout</a>
              </li>
            )}
            {user && (
              <li>
                <p>Profil : {user.email}</p>
              </li>
            )}

        </ul>
      </nav>
    </div>
  )
}
