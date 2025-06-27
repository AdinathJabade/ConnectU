import React, { useState } from 'react';
import { toast } from 'react-toastify';
import StudentFields from './StudentFields';
import AlumniFields from './AlumniFields';
import TeacherFields from './TeacherFields';
import TPOFields from './TPOFields';
import AnimatedRoleDropdown from './AnimatedRoleDropdown';

const roles = ["Student", "Alumni", "TPO", "Teacher"];

const initialForm = {
  name: "",
  email: "",
  password: "",
  role: "Student",
  prn: "",
  passoutYear: "",
};

const AuthForm = ({ type = "login", onSubmit, onSwitch }) => {
  const [form, setForm] = useState({ ...initialForm });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (type === "signup") {
      if (!form.role) newErrors.role = "Role is required";
      if (form.role === "Student") {
        if (!form.name.trim()) {
          newErrors.name = "Full Name is required";
          if (form.name.length > 0 && form.name.length < 3) toast.error("Full Name must be at least 3 characters", { position: "top-right" });
        }
        if (!form.prn.trim()) {
          newErrors.prn = "PRN Number is required";
          if (form.prn.length > 0 && form.prn.length < 10) toast.error("PRN must be 10 digits", { position: "top-right" });
        }
        if (!/^\d{10}$/.test(form.prn.trim())) newErrors.prn = "PRN must be 10 digits";
        if (!form.email.trim()) {
          newErrors.email = "Email is required";
          if (form.email.length > 0 && form.email.length < 5) toast.error("Email must be at least 5 characters", { position: "top-right" });
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) newErrors.email = "Invalid email";
        if (!form.password) {
          newErrors.password = "Password is required";
          if (form.password.length > 0 && form.password.length < 3) toast.error("Password must be at least 3 characters", { position: "top-right" });
        }
        if (form.password.length < 3) newErrors.password = "Password must be at least 3 characters";
      } else if (form.role === "Alumni") {
        if (!form.name.trim()) {
          newErrors.name = "Full Name is required";
          if (form.name.length > 0 && form.name.length < 3) toast.error("Full Name must be at least 3 characters", { position: "top-right" });
        }
        if (!form.passoutYear.trim()) {
          newErrors.passoutYear = "Pass Out Year is required";
          if (form.passoutYear.length > 0 && form.passoutYear.length < 4) toast.error("Year must be 4 digits", { position: "top-right" });
        }
        if (!/^\d{4}$/.test(form.passoutYear.trim())) newErrors.passoutYear = "Year must be 4 digits";
        if (!form.email.trim()) {
          newErrors.email = "Email is required";
          if (form.email.length > 0 && form.email.length < 5) toast.error("Email must be at least 5 characters", { position: "top-right" });
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) newErrors.email = "Invalid email";
        if (!form.password) {
          newErrors.password = "Password is required";
          if (form.password.length > 0 && form.password.length < 3) toast.error("Password must be at least 3 characters", { position: "top-right" });
        }
        if (form.password.length < 3) newErrors.password = "Password must be at least 3 characters";
      } else if (form.role === "TPO" || form.role === "Teacher") {
        if (!form.email.trim()) {
          newErrors.email = "Email is required";
          if (form.email.length > 0 && form.email.length < 5) toast.error("Email must be at least 5 characters", { position: "top-right" });
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) newErrors.email = "Invalid email";
        if (!form.password) {
          newErrors.password = "Password is required";
          if (form.password.length > 0 && form.password.length < 3) toast.error("Password must be at least 3 characters", { position: "top-right" });
        }
        if (form.password.length < 3) newErrors.password = "Password must be at least 3 characters";
      }
    } else {
      // login validation
      if (!form.email.trim()) newErrors.email = "Email is required";
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) newErrors.email = "Invalid email";
      if (!form.password) newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    // Show all errors as toast notifications
    Object.values(newErrors).forEach(msg => {
      if (msg) toast.error(msg, { position: "top-right" });
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PRN validation: block and toast if more than 10 digits
    if (name === "prn" && value.length > 10) {
      toast.error("PRN cannot exceed 10 digits", { position: "top-right" });
      return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleRoleChange = (role) => {
    setForm({ ...form, role });
    setErrors({ ...errors, role: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(form);
    }
  };

  const renderRoleFields = () => {
    switch (form.role) {
      case "Student":
        return <StudentFields form={form} handleChange={handleChange} showPassword={showPassword} setShowPassword={setShowPassword} errors={errors} />;
      case "Alumni":
        return <AlumniFields form={form} handleChange={handleChange} showPassword={showPassword} setShowPassword={setShowPassword} errors={errors} />;
      case "TPO":
        return <TPOFields form={form} handleChange={handleChange} showPassword={showPassword} setShowPassword={setShowPassword} errors={errors} />;
      case "Teacher":
        return <TeacherFields form={form} handleChange={handleChange} showPassword={showPassword} setShowPassword={setShowPassword} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 shadow-2xl rounded-2xl border border-indigo-100 animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700 tracking-tight">
        {type === "login"
          ? "Login to ConnectU"
          : form.role === "Student"
          ? "Student Signup"
          : form.role === "Alumni"
          ? "Alumni Signup"
          : form.role === "TPO"
          ? "TPO Signup"
          : "Teacher Signup"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {type === "signup" && (
          <div className="mb-2">
            <AnimatedRoleDropdown
              value={form.role}
              onChange={handleRoleChange}
              error={errors.role}
            />
          </div>
        )}
        {type === "signup" ? renderRoleFields() : (
          <TeacherFields form={form} handleChange={handleChange} showPassword={showPassword} setShowPassword={setShowPassword} errors={errors} />
        )}
        {errors.general && <p className="text-red-500 text-xs mt-1">{errors.general}</p>}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:from-indigo-600 hover:to-indigo-800 transition transform hover:-translate-y-1 hover:scale-105 duration-200"
        >
          {type === "login" ? "Login" : "Signup"}
        </button>
        <div className="text-center text-sm text-gray-500 mt-2">
          {type === "login" ? (
            <>Don't have an account?{' '}
              <button type="button" className="text-indigo-600 hover:underline font-medium" onClick={onSwitch}>
                Sign up now!
              </button>
            </>
          ) : (
            <>Already have an account?{' '}
              <button type="button" className="text-indigo-600 hover:underline font-medium" onClick={onSwitch}>
                Log in!
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
