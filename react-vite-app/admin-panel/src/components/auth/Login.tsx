import React, { useState } from 'react';
import axios from 'axios';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', formData);
      setMessage(`Login successful. Welcome, ${response.data.username}!`);
      // Redirect to the form page or perform other actions upon successful login
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
      {message && (
        <div className="mt-4 text-red-500">{message}</div>
      )}
    </div>
  );
};

export default LoginForm;
