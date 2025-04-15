import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Restaurant from './Restaurant';


const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2.5 sec loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
    
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px 50px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      }}>
        <div className="loader-circle" />
        <p style={{
          marginTop: '20px',
          color: '#d4af37',
          fontWeight: 'bold',
          fontFamily: 'Georgia, serif',
          fontSize: '18px'
        }}>
          Entering Ismail Hotel...
        </p>
    
        <style>{`
          .loader-circle {
            width: 60px;
            height: 60px;
            border: 6px solid rgba(255, 255, 255, 0.3);
            border-top: 6px solid #d4af37;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
    
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  
  }
  
  

  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-text">
          <h1>Welcome to Ismail Hotel</h1>
          <p>Experience luxury, tradition, and world-class hospitality.</p>
          <button onClick={() => navigate('/book')}>Book Your Stay</button>
        </div>
      </header>

      <Restaurant />

      <section className="cta-section">
        <h2>Ready for the Royal Experience?</h2>
        <button onClick={() => navigate('/booking')}>Book Now</button>
      </section>

      <button onClick={() => navigate('/login')} className="login-btn">
        Customer Login
      </button>

      <section className="about-founder">
        <h2>About Ismail Mohammed</h2>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQG-AxFm0y_Zbg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708985493346?e=2147483647&v=beta&t=S-tm-gN0ayTA1O32xJsd_DUgv7rnX899pwof2-azgFM"
          alt="Ismail Mohammed"
          className="founder-img"
        />
        <p>
          Ismail Hotel was founded by Mr. Ismail Mohammed with a vision to provide affordable luxury for all.
          His dedication to excellence and passion for hospitality have made this hotel a home for travelers from all over the world.
        </p>
      </section>
    </div>
  );
};

export default Home;
