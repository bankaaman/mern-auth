import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5rem',           // mt-20
    paddingLeft: '1rem',         // px-4
    paddingRight: '1rem',
    textAlign: 'center',
    color: '#1F2937',            // text-gray-800
  };

  const imageStyle = {
    width: '9rem',               // w-36 (36 * 0.25rem = 9rem)
    height: '9rem',              // h-36
    borderRadius: '9999px',      // rounded-full
    marginBottom: '1.5rem',      // mb-6
  };

  const heading1Style = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',               // gap-2
    fontSize: '1.25rem',         // text-xl (20px)
    fontWeight: 500,             // font-medium
    marginBottom: '0.5rem',      // mb-2
  };

  const handWaveStyle = {
    width: '2rem',               // w-8 (8 * 0.25rem)
    aspectRatio: '1 / 1',        // aspect-square
  };

  const heading2Style = {
    fontSize: '1.875rem',        // text-3xl (30px)
    fontWeight: 600,             // font-semibold
    marginBottom: '1rem',        // mb-4
  };

  const paragraphStyle = {
    marginBottom: '2rem',        // mb-8
    maxWidth: '28rem',           // max-w-md (~448px)
  };

  const buttonStyle = {
    border: '1px solid #6B7280', // border-gray-500
    borderRadius: '9999px',       // rounded-full
    padding: '0.625rem 2rem',     // py-2.5 (10px) px-8 (32px)
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s ease',
  };

  const [hover, setHover] = React.useState(false);

  const buttonHoverStyle = hover ? { backgroundColor: '#FEE2E2' } : {}; // hover:bg-red-100

  return (
    <div style={containerStyle}>
      <img src={assets.header_img} alt="" style={imageStyle} />
      <h1 style={heading1Style}>
        Hey Developer
        <img src={assets.hand_wave} alt="" style={handWaveStyle} />
      </h1>
      <h2 style={heading2Style}>Welcome to our app</h2>
      <p style={paragraphStyle}>lets start with a quick product tour</p>
      <button
        style={{ ...buttonStyle, ...buttonHoverStyle }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        get started
      </button>
    </div>
  )
}

export default Header
