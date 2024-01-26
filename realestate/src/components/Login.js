// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    console.log('Form submitted with data:', formData);
    // You can replace the above console.log with your actual login logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
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
        adkhjdshskjfkhjkjhh/>
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};ahhxhis

export default LoginForm;
