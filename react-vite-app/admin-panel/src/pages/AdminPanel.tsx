import React from 'react';
import Navbar from "../components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from '../components/auth/Login';
import MultiStepForm from '../components/form/MultiStepForm';
import Registration from '../components/auth/Registration';

const AdminPanel: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MultiStepForm/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      
    </>
  );
};

export default AdminPanel;