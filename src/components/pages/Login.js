import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Login</h2>
        <label>Email</label>
        <input type="email" name="email" ref={emailRef} required/>
        <label>Password</label>
        <input type="password" name="password" ref={passwordRef} required/>
        <button type="submit">Login</button>
        {errorMsg && (
            <p>{errorMsg}</p>
        )}
      </form>
      <div>
        New User? <Link to={"/register"}>Register</Link>
      </div>
    </>
  );
};

export default Login;