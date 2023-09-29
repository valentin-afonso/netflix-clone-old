import React from 'react'
import '../../../styles/layout/Header.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

export default function Header() {
  const { auth, signOut } = useAuth();

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
                <Link as={Link} to="/">Home</Link>
              </li>
            )}
            {auth && (
              <li>
                <a onClick={handleLogout}>LogOut</a>
              </li>
            )}
            <li>
              <a href="/">My fav</a>
            </li>
            <li>
              <a href="/">Search</a>
            </li>
            <li>
              <a href="/">Profil :</a>
            </li>
        </ul>
    </div>
  )
}
