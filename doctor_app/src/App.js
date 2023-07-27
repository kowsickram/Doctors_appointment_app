
import './App.css';
import "./styles.css"
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function App()  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [caseType, setCaseType] = useState('');
  const [description, setDescription] = useState('');
  

function handleSubmit(){
  
}

 
  

  return (
    <div className='appointment'>
      <h1>Hospital Appointments</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Case Type"
          value={caseType}
          onChange={(e) => setCaseType(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br></br>
        <button type="submit">Book Appointment</button>
      </form>
      <h2>All Appointments</h2>
      
    </div>
  );

  };

