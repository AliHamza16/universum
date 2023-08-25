import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import Post from './Pages/Post/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;
