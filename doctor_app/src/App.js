
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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Type of Case</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>{appointment.name}</td>
            <td>{appointment.email}</td>
            <td>{appointment.mobileNumber}</td>
            <td>{appointment.caseType}</td>
            <td>{appointment.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default App;
