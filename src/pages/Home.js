import React from 'react'
import { Link } from "react-router-dom";
import domic from "../images/older-man-wheelchair-smiles-nurse-assistant-she-hands-him-glass-water.jpg"
import { Card } from 'flowbite-react';
import paliat from '../images/high-angle-man-sleeping-with-mask.jpg'
import respite from '../images/african-social-worker-helping-senior-woman.jpg'
import supported from '../images/medium-shot-woman-getting-breakfast.jpg'
import serv from '../images/24-hours.gif'
function Home() {
  return (
    <div>
        
<section class="bg-center bg-no-repeat bg-hero_pattern bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <marquee behavior="scroll" direction="left"><h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">Welcome to Continued HealthCare</h1></marquee>
        <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48">We love to serve you with compassionate care.</p>
        {/* <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" 
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 
            hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" 
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center
             text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div> */}
    </div>
</section>

<section>
    <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

        <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 flex ">
            <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                Here are some of the services we offer:
            </h4>

            <div className="mb-4 rounded-lg overflow-hidden sm:w-16 mt-4 sm:mt-0">
                <img src={serv} alt="Residential Care" className="w-full h-full object-cover" />
            </div>
        </div> 

        <div class=" lg:flex grid  lg:grid-cols-4 lg:gap-x-3 m-auto grid-cols-2 gap-2 px-2 item-stretch ">

        <div className="px-2 col-span-1 lg:w-1/4 w-1/2 sm:items-center sm:justify-center">
            <img class="rounded-t-lg" src={domic} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                Domiciliary Care
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 pt-4">
                <p class='text-left'>
                Our services enable people to remain independent at home by helping them with personal care, 
                medication, household tasks and other activities which help them maintain their quality of life.
                </p>

                <Link to="services" 
                     class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center
                    text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                        Learn more
                    </Link>
            </p>
        </div>
        
        <div className="px-2 col-span-1 lg:w-1/4 w-1/2  sm:items-center sm:justify-center">
        
            <img class="rounded-t-lg" src={paliat} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                Palliative Care
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 pt-4">
                <p lass='text-left'>
                We provide physical, emotional, social, and spiritual support for patients and their families
                day and night comfort during defining moments of life.
                </p>

                <Link to="services" 
                     class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center
                    text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                        Learn more
                    </Link>
            </p>
        </div>

        <div className="px-2 col-span-1 lg:w-1/4 w-1/2  sm:items-center sm:justify-center">
            <img class="rounded-t-lg" src={respite} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                Respite Care
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 pt-4">
                <p>
                It refers to temporary care service, designed to give carers such as family members,
                                    or the person receiving care, a much-needed break.
                </p>

                <Link to="services" 
                     class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center
                    text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                        Learn more
                    </Link>
            </p>
        </div>

        <div className="px-2 col-span-1 lg:w-1/4 w-1/2  sm:items-center sm:justify-center">
            <img class="rounded-t-lg" src={supported} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                Supported Living
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 pt-4">
                <p>
                Our Supported Living services enable people to live independently and manage their own tenancies, with support 
                 designed around their needs and goals.
                </p>

                <Link to="services" 
                     class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center
                    text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                        Learn more
                    </Link>
            </p>
        </div>
        
        
        </div>       
    
    </div>


</section>

    </div>
  )
}

export default Home