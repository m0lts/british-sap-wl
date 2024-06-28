import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    acreage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="container">
      <figure className="logo-container">
        <img src={logo} alt="britishSAP" className='logo' />
      </figure>
      <h1 className="hero-title">Fast and affordable SAP testing for regenerative farmers.</h1>
      <p className='hero-text'>Register your interest in our service to stay in the know for when we get up and running.</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="acreage">Acreage (in acres):</label>
        <input
          type="number"
          id="acreage"
          name="acreage"
          value={formData.acreage}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;

