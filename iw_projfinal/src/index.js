import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import WIP from './WIP/WIP';
import Profile from './Profile/Profile';

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
          <Route path="Home" element={<Home />} />
          <Route path="WIP" element={<WIP />} />
          <Route path="Profile" element={<Profile />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App /> );

