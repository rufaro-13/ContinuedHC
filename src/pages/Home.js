/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { Link } from "react-router-dom";
import domic from "../images/older-man-wheelchair-smiles-nurse-assistant-she-hands-him-glass-water.jpg"

import paliat from '../images/high-angle-man-sleeping-with-mask.jpg'
import respite from '../images/african-social-worker-helping-senior-woman.jpg'
import supported from '../images/medium-shot-woman-getting-breakfast.jpg'
import serv from '../images/24-hours.gif'
function Home() {
  return (
    <div>
        
        <section class="bg-cover bg-center bg-no-repeat bg-hero_pattern bg-gray-700 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <marquee behavior="scroll" direction="left"><h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">Welcome to Continued HealthCare</h1></marquee>
                <p class="mb-8 text-2xl font-bold text-gray-300  lg:text-4xl sm:px-16 lg:px-48">We pride ourselves in providing high quality person centred care to people in the
                 comfort of their home.
                    
                </p>
                <div class="flex flex-col space-y-4 rounded-lg border-solid border-navcolour sm:flex-row sm:justify-center pt-5 sm:space-y-0 sm:space-x-4">
                    
                   <p className='text-white rounded-lg border-4 py-3 px-3 border-greentheme text-2xl lg:text-3xl md:w-1/2'>
                   We offer high quality and affordable services ranging from domiciliary care, respite care, end of life and many more. We are confident in our team of exceptionally
                    competent, caring and well-trained staff. We promote human rights, dignity and respect individuals choices.</p>

                        
                      
                </div> 
            </div>
        </section>

        <section>
            <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 flex ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                        Here are some of the services we offer:
                    </h4>

                    <div className="mb-4 rounded-lg overflow-hidden sm:w-16 lg:mt-0 mt-0 sm:mt-0">
                        <img src={serv} alt="Residential Care" className="w-full lg:h-full h-12 object-cover" />
                    </div>
                </div> 

                <div class=" lg:flex grid  lg:grid-cols-4 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">

                    <div className="px-2 col-span-1 lg:w-1/4 md:w-1/2 pt-2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={domic} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p>
                            Domiciliary Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Our services enable people to remain independent at home by helping them with personal care, 
                            medication, household tasks and other activities which help them maintain their quality of life.
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:mt-6 md:py-3 py-2 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                                    Learn more
                                </Link>
                        </p>
                    </div>
                    

                    <div className="px-2 col-span-1 lg:w-1/4 md:w-1/2 pt-2 sm:items-center sm:justify-center">
                    
                        <img class="rounded-t-lg" src={paliat} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p>
                            Palliative Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We provide physical, emotional, social, and spiritual support for patients and their families 
                            during defining moments of life.
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-2 md:mt-20 py-2 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                                    Learn more
                            </Link>
                        </p>
                        
                    </div>

                    <div className="px-2 col-span-1 lg:w-1/4 md:w-1/2 pt-2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={respite} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p>
                            Respite Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We provide temporary care services, designed to give family members sometime off 
                            to re-energise whilst having peace of mind that their loved ones are looked after.
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-20 py-2 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-gray-300">
                                    Learn more
                            </Link>
                        </p>
                    </div>

                    <div className="px-2 col-span-1 lg:w-1/4 md:w-1/2 pt-2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={supported} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p >
                            Supported Living
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Our Supported Living services enable people to live independently and manage their own tenancies, with support 
                            designed around their needs and goals.
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:mt-6 md:py-3 py-2 px-5 text-base font-medium text-sm md:text-lg text-center
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