// LoginForm.js
import React, { useState } from 'react';
import './Login.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Add your login logic here, e.g., make an API request to authenticate the user
    console.log('Form was successful submited:', formData);
    alert('login Successful')
    // You can replace the above console.log with your actual login logic
  };

  return (
    <form onSubmit={handleSubmit} id='form-login'>
      <h3>Login</h3>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
      />
      </label>
      <label>
        checkbox:
        <input type='checkbox'/>
      </label>
      <br />
      <button type="submit" id='btn-login'>Login</button>
    </form>
  );
};

export default LoginForm;
