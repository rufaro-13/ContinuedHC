import React from 'react'
import goal from '../images/goal.gif'
import heart from '../images/wired-flat-20-love-heart.gif'

function About() {
  return (
    <div>
      <section>
            <div class=" px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                       About US:
                    </h4>
                </div>

                <div class="flex pt-4 pb-4">

                    <div class="md:w-1/2  sm:82 rounded-lg bg-emerald-200  sm:items-center sm:justify-center   mx-4 ">
                        <h5 class="mx-auto mb-4 text-1xl font-bold tracking-tight leading-none text-center text-black md:text-2xl lg:text-2xl">
                           Our Mission <br/><br/>
                        </h5>

                        <p class="pl-4">
                        As CHC we take pride in seeing our clients maintain their life style We aim : <br/><br/>
                        <ul class="pl-4 list-disc">
                            <li> to provide a high standard of care and support to every service user.</li>
                            <li> to ensure the independence of our clients in a safe and comfortable environment </li>
                            <li> to help individuals with a variety of disabilities and complex needs live an independent life 
                              and make choices</li>
                            
                        </ul>

                        <br/><br/>

                        </p>

                    </div>

                    <div class="md:w-1/2   px-4">
                    <img src={goal}class=" rounded-lg h-48 mr-3" alt=""/> 
                    </div>  

                   

                </div>

                <div class="flex pt-4 pb-4">

                    <div class="md:w-1/2 item-center justify-center  px-4">
                    <img src={heart}class=" rounded-lg h-48 mr-8" alt=""/> 
                    </div> 

                    <div class="md:w-1/2  sm:82 rounded-lg bg-emerald-200  sm:items-center sm:justify-center   mx-4 ">
                        <h5 class="mx-auto mb-4 text-1xl font-bold tracking-tight leading-none text-center text-black md:text-2xl lg:text-2xl">
                           Why choose us <br/><br/>
                        </h5>

                        <p class="pl-4">
                        As CHC we take pride in seeing our clients maintain their life style We aim : <br/><br/>
                        <ul class="pl-4 list-disc">
                            <li> to provide a high standard of care and support to every service user.</li>
                            <li> to ensure the independence of our clients in a safe and comfortable environment </li>
                            <li> to help individuals with a variety of disabilities and complex needs live an independent life 
                              and make choices</li>
                            
                        </ul>

                        <br/><br/>

                        </p>

                    </div> 

                </div>

            </div>
      </section> 
    </div>
  )
}

export default About