import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [type, setType] = useState('login');
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // TODO: Connect to backend API
  };

  const handleSwitch = () => {
    setType('signup');
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-300">
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
      <AuthForm type={type} onSubmit={handleLogin} onSwitch={handleSwitch} />
    </div>
  );
};

export default Login;
