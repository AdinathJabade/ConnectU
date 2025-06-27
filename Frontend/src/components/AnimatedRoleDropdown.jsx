// @ts-nocheck
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const roles = ['Student', 'Alumni', 'TPO', 'Teacher'];

const AnimatedRoleDropdown = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const optionsRef = useRef([]);

  const handleToggle = () => {
    setOpen((prev) => {
      if (!prev) {
        gsap.fromTo(
          dropdownRef.current,
          { height: 0, opacity: 0, borderRadius: '2rem', boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
          {
            height: 'auto',
            opacity: 1,
            borderRadius: '1rem',
            boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)',
            duration: 0.4,
            ease: 'power2.out',
            onStart: () => {
              dropdownRef.current.style.display = 'block';
            },
          }
        );
        gsap.fromTo(
          optionsRef.current,
          { y: -20, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.3, ease: 'back.out(1.7)' }
        );
      } else {
        gsap.to(dropdownRef.current, {
          height: 0,
          opacity: 0,
          borderRadius: '2rem',
          boxShadow: '0 0 0 0 rgba(0,0,0,0)',
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            dropdownRef.current.style.display = 'none';
          },
        });
      }
      return !prev;
    });
  };

  const handleSelect = (role) => {
    onChange(role);
    setOpen(false);
  };

  return (
    <div className="relative w-full mb-2">
      <button
        type="button"
        className={`w-full flex items-center justify-between px-4 py-3 border-2 rounded-lg bg-indigo-50 font-semibold focus:outline-none transition ${error ? 'border-red-400' : 'border-indigo-200'} hover:shadow-lg`}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{value || 'Select Role'}</span>
        <svg
          className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={dropdownRef}
        className={`absolute left-0 right-0 bg-white rounded-lg shadow-lg z-10 overflow-hidden border border-indigo-100 mt-1 ${open ? '' : 'pointer-events-none'}`}
        style={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0, display: open ? 'block' : 'none', borderRadius: '1rem', boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}
      >
        <ul className="py-1" role="listbox">
          {roles.map((role, i) => (
            <li
              key={role}
              ref={el => (optionsRef.current[i] = el)}
              className={`px-4 py-2 cursor-pointer hover:bg-indigo-100 transition text-indigo-700 ${value === role ? 'font-bold bg-indigo-50' : ''}`}
              onClick={() => handleSelect(role)}
              role="option"
              aria-selected={value === role}
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-2">{error}</p>}
    </div>
  );
};

export default AnimatedRoleDropdown;
