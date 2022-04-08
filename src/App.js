/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import SocketDemo from './SocketDemo';
import SocketTwo from './Socket2';
function App() {
  return (
    <>
      <div className='App'>
        <nav
          className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
          id='ftco-navbar'
        >
          <div className='container'>
            <a className='navbar-brand'>Socket App</a>
            <div>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item '>
                  <a href='/num' className='nav-link'>
                    Number
                  </a>
                </li>
                <li className='nav-item '>
                  <a href='/quote' className='nav-link'>
                    Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/num" element={<SocketDemo />} />
            <Route path="/quote" element={<SocketTwo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
