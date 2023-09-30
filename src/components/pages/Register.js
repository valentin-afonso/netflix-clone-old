import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <>
    <div className="container_form">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <ul>
          <li>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
          </li>
          <li>
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
          </li>
          <li>
            <label>Confirm Password</label>
            <input type="password" ref={confirmPasswordRef} required />
          </li>
          <li>
            <button type="submit">Register</button>
          </li>
          <li>
            {errorMsg && (
                <p>{errorMsg}</p>
              )}
            {msg && (
                <p>{msg}</p> 
            )}
          </li>
        </ul>
      </form>
      <p className="text_link">
        Already a User? <Link to={"/login"}>Login</Link>
      </p>
    </div>
    </>
  );
};

export default Register;