import React, { useState } from 'react';
import star from '../imges/Star.png';

function Form() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    if (!company.trim()) errors.company = 'Company is required';
    if (!phoneNumber.trim()) errors.phoneNumber = 'Phone Number is required';
    if (!country.trim()) errors.country = 'Country is required';

    if (Object.keys(errors).length === 0) {
      // Here you can add your form submission logic
      console.log('Form submitted:', { name, jobTitle, email, company, phoneNumber, country });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='form-background'>
      <h2 style={{ textAlign: "center", color: "rgba(74, 163, 91, 1)", paddingTop: "10px" }}>
        Register Now!<img src={star} alt="star" />
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label><br />
          <input 
            type='text' 
            id="name" 
            className='text-field' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title</label><br />
          <input 
            type='text' 
            id="jobTitle" 
            className='text-field' 
            value={jobTitle} 
            onChange={(e) => setJobTitle(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input 
            type='email' 
            id="email" 
            className='text-field' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="company">Company</label><br />
          <input 
            type='text' 
            id="company" 
            className='text-field' 
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
            required 
          />
          {errors.company && <span className="error">{errors.company}</span>}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label><br />
          <input 
            type='tel' 
            id="phoneNumber" 
            className='text-field' 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div>
          <label htmlFor="country">Country</label><br />
          <input 
            type='text' 
            id="country" 
            className='text-field' 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required 
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Form;
