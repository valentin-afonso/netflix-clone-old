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
    <div className="container_form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <ul>
          <li>
            <label>Email</label>
            <input type="email" name="email" ref={emailRef} required/>
          </li>
          <li>
            <label>Password</label>
            <input type="password" name="password" ref={passwordRef} required/>
          </li>
          <li>
            <button type="submit">Login</button>
          </li>
          <li>
            {errorMsg && (
              <p>{errorMsg}</p>
            )}
          </li>
        </ul>
      </form>
      <p className="text_link">
        New User? <Link to={"/register"}>Register</Link>
      </p>
      <p className="text_link">
        Forgot Password? <Link to={"/passwordreset"}>Click Here</Link>
      </p>
    </div>

    </>
  );
};

export default Login;