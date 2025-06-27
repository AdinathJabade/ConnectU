// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TeacherFields = ({ form, handleChange, showPassword, setShowPassword, errors = {} }) => {
  const fieldsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      fieldsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.4, ease: 'power2.out' }
    );
  }, []);

  return (
    <>
      <div className="relative group mb-4" ref={el => (fieldsRef.current[0] = el)}>
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none">
          <i className="fas fa-chalkboard-teacher"></i>
        </span>
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          className={`w-full pl-10 px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-indigo-50 group-hover:shadow-lg ${errors.email ? 'border-red-400' : 'border-indigo-200'}`}
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
      </div>
      <div className="relative group mb-2" ref={el => (fieldsRef.current[1] = el)}>
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none">
          <i className="fas fa-lock"></i>
        </span>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className={`w-full pl-10 px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-indigo-500 transition pr-10 bg-indigo-50 group-hover:shadow-lg ${errors.password ? 'border-red-400' : 'border-indigo-200'}`}
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 focus:outline-none"
          onClick={() => setShowPassword((prev) => !prev)}
          tabIndex={-1}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          )}
        </button>
        {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password}</p>}
      </div>
    </>
  );
};

export default TeacherFields;
