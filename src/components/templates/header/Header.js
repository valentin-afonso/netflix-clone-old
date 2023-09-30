import React from 'react'
import '../../../styles/layout/Header.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

export default function Header() {
  const { auth, signOut, user } = useAuth();

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
          {auth && (
            <li>
              <Link as={Link} to="/">Home</Link>
            </li>
          )}
          {auth && (
            <li>
              <a href="/">My fav</a>
            </li>
          )}
          {auth && (
            <li>
              <a href="/">My list</a>
            </li>
          )}                  
          {auth && (
            <li>
              <a href="/">Search</a>
            </li>
          )}
        </ul>
      </nav>
      <nav>
      <ul>
          {!auth && (
              <li>
                <Link as={Link} to="/login">Login</Link>
              </li>
             
            )}
            {!auth && (
              <li>
                <Link as={Link} to="/register">Register</Link>
              </li>
            )}
            {auth && (
              <li>
                <a href="/" onClick={handleLogout}>Logout</a>
              </li>
            )}
            {auth && (
              <li>
                <p>Profil : {user.email}</p>
              </li>
            )}

        </ul>
      </nav>
    </div>
  )
}
