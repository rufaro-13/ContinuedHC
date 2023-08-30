'use client';

import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-emerald-500"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">
          Continued Health Care
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-white'>
            Home
          </p>
        </Link>
        <Link to="/about" className='text-white'>
          About
        </Link>
        <Link to="/services" className='text-white'>
          Services
        </Link>
        
        <Link to="/contact" className='text-white'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


