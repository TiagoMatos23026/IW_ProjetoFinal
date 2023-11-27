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
        <Route className ="container" path="/" element={<Layout />}>
            <Route className ="container" path="Home" element={<WIP />} />
            <Route className ="container" path="Profile" element={<Profile />} />
            <Route className ="container" path="Register" element={<Register />} />
            <Route className ="container" path="CreatePage" element={<CreatePage />} />
            <Route className ="container" path="Login" element={<Login />} />
            <Route className ="container" path="Logout" element={<WIP />} />

        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

