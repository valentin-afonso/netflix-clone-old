import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRef.current?.value || !confirmPasswordRef.current?.value) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match. Try again");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await updatePassword(passwordRef.current.value);
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      setErrorMsg("Error in Updating Password. Please try again");
    }
    setLoading(false);
  };

  return (
    <>
    <div className="container_form">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Update Password</h2>
        <ul>
          <li>
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
          </li>
          <li>
            <label>Confirm Password</label>
            <input type="password" ref={confirmPasswordRef} required />
          </li>
          <li>
            {errorMsg && (
              <p>{errorMsg}</p>
            )}
          </li>
          <li>
            <button type="submit">Update</button>
          </li>
        </ul>
      </form>
    </div>
    </>
  );
};

export default UpdatePassword;