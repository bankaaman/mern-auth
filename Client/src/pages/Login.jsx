import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios'

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  background: 'linear-gradient(135deg, #bfdbfe, #a78bfa)',
  position: 'relative',
}

const logoStyle = {
  position: 'absolute',
  left: '1.25rem',
  top: '1.25rem',
  width: '7rem',
  cursor: 'pointer',
}

const formContainerStyle = {
  backgroundColor: '#1e293b', // bg-slate-900
  padding: '2.5rem',          // p-10 (2.5 * 1rem)
  borderRadius: '0.5rem',     // rounded-lg
  boxShadow: '0 10px 15px rgba(0,0,0,0.3)', // shadow-lg
  width: '100%',
  maxWidth: '24rem',          // sm:w-96
  color: '#c7d2fe',           // text-indigo-300
  fontSize: '0.875rem',       // text-sm
  boxSizing: 'border-box',
}

const headingStyle = {
  fontSize: '1.875rem',       // text-3xl
  fontWeight: 600,
  color: 'white',
  textAlign: 'center',
  marginBottom: '0.75rem',    // mb-3
}

const paragraphStyle = {
  textAlign: 'center',
  fontSize: '0.875rem',
  marginBottom: '1.5rem',     // mb-6
  color: '#c7d2fe',
}

const inputWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',             // gap-3
  width: '100%',
  padding: '0.625rem 1.25rem', // py-2.5 px-5
  borderRadius: '9999px',     // rounded-full
  backgroundColor: '#333A5C',
  marginBottom: '1rem',       // mb-4
  boxSizing: 'border-box',
}

const inputStyle = {
  flex: 1,
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'white',
  fontSize: '1rem',
}

const forgotPasswordStyle = {
  marginBottom: '1rem',
  color: '#6366f1',           // text-indigo-500
  cursor: 'pointer',
  textAlign: 'left',
}

const buttonStyle = {
  width: '100%',
  padding: '0.625rem 0',      // py-2.5
  borderRadius: '9999px',
  backgroundImage: 'linear-gradient(to right, #6366f1, #312e81)', // from-indigo-500 to-indigo-900
  color: 'white',
  fontWeight: '500',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
}

const toggleTextStyle = {
  color: '#94a3b8',           // text-gray-400
  textAlign: 'center',
  fontSize: '0.75rem',        // text-xs
  marginTop: '1rem',
}

const toggleLinkStyle = {
  color: '#3b82f6',           // text-blue-400
  cursor: 'pointer',
  textDecoration: 'underline',
}

const Login = () => {
  const navigate = useNavigate()
  const { backendUrl, setIsLoggedIn } = useContext(AppContent)
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      axios.defaults.withCredentials = true
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/auth/register', { name, email, password })
        if (data.success) {
          setIsLoggedIn(true)
          navigate('/')
        } else {
          alert(data.message)
        }
      } else {
        // Handle login logic here (if needed)
        const { data } = await axios.post(backendUrl + '/api/auth/login', { email, password });
        if (data.success) {
          setIsLoggedIn(true);
          navigate('/');
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert('Something went wrong!')
    }
  }

  return (
    <div style={containerStyle}>
      <img onClick={() => navigate('/')} src={assets.logo} alt="" style={logoStyle} />
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>{state === 'Sign Up' ? 'Create account' : 'Login account'}</h2>
        <p style={paragraphStyle}>{state === 'Sign Up' ? 'Create your account' : 'Login to your account'}</p>
        <form onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div style={inputWrapperStyle}>
              <img src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full Name"
                required
                style={inputStyle}
              />
            </div>
          )}
          <div style={inputWrapperStyle}>
            <img src={assets.mail_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email ID"
              required
              style={inputStyle}
            />
          </div>
          <div style={inputWrapperStyle}>
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              style={inputStyle}
            />
          </div>
          <p style={forgotPasswordStyle} onClick={() => navigate('/reset-password')}>
            Forgot password
          </p>
          <button type="submit" style={buttonStyle}>
            {state}
          </button>
        </form>
        {state === 'Sign Up' ? (
          <p style={toggleTextStyle}>
            Already have an account?{' '}
            <span style={toggleLinkStyle} onClick={() => setState('Login')}>
              Login here
            </span>
          </p>
        ) : (
          <p style={toggleTextStyle}>
            Don't have an account?{' '}
            <span style={toggleLinkStyle} onClick={() => setState('Sign Up')}>
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login