
import './App.css';
import "./styles.css"

// import axios from 'axios';

import React, { useState } from 'react';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    caseType: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { ...formData, id: Date.now() };
    setAppointments([newAppointment, ...appointments]);
    setFormData({
      name: '',
      email: '',
      mobileNumber: '',
      caseType: '',
      description: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='appointment'>
      <h1> Hospital Appointments</h1>
      
      <form onSubmit={handleSubmit}>
      <center>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
        <input type="text" name="caseType" value={formData.caseType} onChange={handleChange} placeholder="Type of Case" required />
       
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <br></br>
        <br></br>
        <button type="submit">Book Appointment</button>
        </center>
        <br></br>
      </form>

      <h2>All Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>Name: {appointment.name}</p>
            <p>Email: {appointment.email}</p>
            <p>Mobile Number: {appointment.mobileNumber}</p>
            <p>Type of Case: {appointment.caseType}</p>
            <p>Description: {appointment.description}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
