import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await passwordReset(emailRef.current.value);
      console.log(error);
      console.log(data);
      setMsg("Password reset has been sent to your email");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Login</h2>
        <label>Email</label>
        <input type="email" ref={emailRef} required/>
        {msg && (
            <p>{msg}</p>
        )}
        <button type="submit">Send Reset Link</button>
      </form>
      <div className="w-100 text-center mt-2">
        Back to Login? <Link to={"/login"}>Login</Link>
        </div>
    </>
  );
};

export default PasswordReset;