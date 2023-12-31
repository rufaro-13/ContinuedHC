'use client';

import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/CHC_png.png'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-emerald-200"
    >
      <Navbar.Brand >
        <Link
          
          to="/"
        >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-12 sm:h-20"
          src={logo}
        /></Link>
        <span className="self-center whitespace-nowrap text-emerald-800 text-xl font-bold dark:text-white">
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
          <p className='text-emerald-800 font-bold md:text-lg'>
            Home
          </p>
        </Link>
        <Link to="/about" className='text-emerald-800 font-bold md:text-lg'>
          About
        </Link>
        <Link to="/services" className='text-emerald-800 font-bold md:text-lg'>
          Services
        </Link>
        
        <Link to="/contact" className='text-emerald-800 font-bold md:text-lg'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


