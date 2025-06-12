import React from 'react'
import Navbar from '../components/navbar';
import Header from '../components/Header';
const Home = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(/bg_img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Navbar />
        <Header />
      </div>
  )
}

export default Home;
