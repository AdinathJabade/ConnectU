import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [type, setType] = useState('signup');
  const navigate = useNavigate();

  const handleSignup = (data) => {
    console.log("Signup Data:", data);
    // TODO: Connect to backend API
  };

  const handleSwitch = () => {
    setType('login');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AuthForm type={type} onSubmit={handleSignup} onSwitch={handleSwitch} />
    </div>
  );
};

export default Signup;
