import { useRef, useState } from 'react'
import { Link, redirect } from "react-router-dom";
import { useAuth } from '../contexts/Auth'

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signIn  } = useAuth()


  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
        redirect("/");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account ? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}