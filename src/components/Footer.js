import React from 'react'
import { BsPhone, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
        
<footer class="bg-emerald-500   shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Continued HealthCare</span>
            </a>
            <ul class="flex flex-wrap text-lg text-sm items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <Link to="/about" className='text-white px-8'>
                    About
                </Link>
                <Link to="/services" className='text-white px-8'>
                    Services
                </Link>
                
                <Link to="/contact" className='text-white px-8'>
                    Contact
                </Link>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between ">
        <span class="block text-sm text-yellowtheme sm:text-center dark:text-gray-400 col-span-1">© 2023 
            <a href="https://flowbite.com/" class="hover:underline">
                Continued HealthCare™
            </a>. 
            All Rights Reserved.
        </span>

        <span class="block text-sm text-yellowtheme sm:text-center dark:text-gray-400 col-span-1 "> 
            <a href="rufarochiuta@gmail.com" class="hover:underline">
                Developed by Rufaro Chiuta
            </a>
            
        </span>

        </div>
    </div>
</footer>


            
            
    </div>
  )
}

export default Footer