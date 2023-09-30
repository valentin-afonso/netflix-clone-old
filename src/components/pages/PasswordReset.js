import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);

  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await passwordReset(emailRef.current.value);
      console.log(error);
      console.log(data);
      setMsg("Password reset has been sent to your email");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <div className="container_form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <ul>
          <li>
            <label>Email</label>
            <input type="email" ref={emailRef} required/>
          </li>
          <li>
            <button type="submit">Send Reset Link</button>
          </li>
          <li>
            {msg && (
              <p>{msg}</p>
            )}
          </li>
        </ul> 
      </form>
      <p className="text_link">
        Back to Login? <Link to={"/login"}>Login</Link>
        </p>
    </div>

    </>
  );
};

export default PasswordReset;