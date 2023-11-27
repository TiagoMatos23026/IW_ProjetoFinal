import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register/Register';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import WIP from './WIP/WIP';
import Profile from './Profile/Profile';
import CreatePage from './CreatePage/CreatePage';
import Login from './Login/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="Home" element={<WIP />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Register" element={<Register />} />
          <Route path="CreatePage" element={<CreatePage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Logout" element={<WIP />} />

          
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App /> );

