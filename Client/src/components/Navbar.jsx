import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  // Container styles
  const navStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // corrected from 'item-center'
    padding: '1rem',      // p-4
    position: 'absolute',
    top: 0,
    // For sm:p-6 sm:px-24, inline styles cannot do media queries, so optional:
    // You can add padding via JS if you want responsiveness (see note below)
  };

  // Logo styles
  const logoStyle = {
    width: '7rem',       // w-28
  };

  // Button styles
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',          // gap-2 (8px)
    border: '1px solid #6B7280', // border-gray-500 (#6B7280)
    borderRadius: '9999px', // rounded-full
    padding: '0.5rem 1.5rem', // py-2 px-6
    color: '#1F2937',        // text-gray-800
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  // Button hover effect with inline styles isn't possible directly,
  // So we can add an onMouseEnter/onMouseLeave to change styles dynamically if needed.

  // For simplicity, here's a quick hover effect using React state:
  const [hover, setHover] = React.useState(false);

  const buttonHoverStyle = hover
    ? { backgroundColor: '#F3F4F6' } // hover:bg-gray-100
    : {};

  return (
    <div style={navStyle}>
      <img src={assets.logo} alt="" style={logoStyle} />

      <button
        onClick={() => navigate('/login')}
        style={{ ...buttonStyle, ...buttonHoverStyle }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Login
        <img src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
