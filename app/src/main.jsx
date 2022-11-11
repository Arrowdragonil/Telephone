import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './index.css'
import NotFound from './pages/404';
import Home from './pages/home';
import Telephone from './pages/telephone';
import Telephones from './pages/telephones';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="Home" element={<Home />} /> */}
          <Route path="Telephones" element={<Telephones />} />
          <Route path="Telephones/:id" element={<Telephone />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
