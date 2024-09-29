import React from 'react'
import domiciliary from '../images/smiley-man-woman-medium-shot.jpg'
//import domic from "../images/african-social-worker-helping-senior-woman.jpg"
 import paliat from '../images/smiley-man-woman-medium-shot.jpg'
/*import respite from '../images/high-angle-man-sleeping-with-mask.jpg'
 */

function Services() {
  return (
    <div>


        <section>
            <div class=" px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-emerald-800 md:text-3xl lg:text-3xl">
                       Our services:
                    </h4>
                </div> 

                <div class="md:flex pt-4 pb-4">

                    <div class="md:w-1/2 col-span-1 px-4 pt-2">
                        <img src={domiciliary}class=" rounded-lg md:h-92  mr-3" alt=""/> 
                    </div>

                    <div class="md:w-1/2  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-4 ">
                        <h5 class="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none text-center text-black md:text-2xl lg:text-2xl">
                            Domiciliary Care(Home Care) <br/><br/>
                        </h5>

                        <p class='font-normal text-sm md:text-lg px-2'>
                        We provide a range of services to support individuals in their home. A trained 
                        carer visits the individual cared for, usually for a few hours each day or as the individual requires. Our services enable
                         people to remain independent at home and help them maintain their quality of life.
                        The range of services includes:<br/><br/>
                        <ul class="list-disc ">
                            <li>household chores</li>
                            <li>making meals</li>
                            <li>running errands</li>
                            <li>personal care</li>
                            <li>administering medication</li>
                            <li>companionship</li>
                            <li>socila inclusion</li>
                        </ul>

                        <br/><br/>

                        </p>

                    </div>

                    
                </div>

                <p class='font-normal text-sm md:text-lg  sm:items-center sm:justify-center px-2'>
                    Why should you choose our domiciliary care services: <br/><br/>
                    <ul class="list-disc ">
                        <li> We are affordable, we listen we incorporate your wishes.</li>
                        <li>We provide care at home in your familiar and comfortable environment for the cared for individual.</li>
                        <li>A sense of retaining their independence and individual benefits from improved mental health is our priority.  </li>
                        <li>We support people to maintain their independence and promote choice.</li>
                        <li>We respect and promote dignity in delivery of our services.</li>
                        <li>We listen to your wishes and tailor make our services to suit your needs</li>
                    </ul>
                </p>

                <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                    <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                        <h4 class="mb-4 text-1xl font-bold tracking-tight leading-none text-emerald-700 md:text-3xl lg:text-3xl">
                            Here is the other services we offer:
                        </h4>
                    </div> 

                    <div class="md:flex grid  lg:grid-cols-1 lg:gap-x-4 m-auto md:grid-cols-1 md:gap-2  grid-cols-1 px-2 item-stretch " >

                        <div className="px-4 col-span-1  sm:items-center sm:justify-center pt-3">
                        
                                <img class="rounded-t-lg" src={paliat} alt="" />
                               
                                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                    <p>
                                    Palliative Care(End-of-life Care)
                                    </p>
                                </h5>
                                <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                                    <p className='rounded-lg text-left '>
                                    
                                    We provide a range of services to those with a terminal illness. Continued Healthcare strives to provide physical, emotional,
                                      social, and spiritual support for service users  and their families during defining moments of life.<br/><br/>
                                      When you join us, we will: <br/><br/>
                                    <ul class="list-disc ">
                                        <li>Provide you with reassurance, comfort and companionship.</li>
                                        <li>Comfort your loved ones by knowing that you are receiving good quality care.</li>
                                        <li>Help to manage pain using prescribed medication as well as engaging in therapeutic intervention.</li>
                                    </ul>
                                    </p>

                                    
                                </p>
                            
                        </div>

                        {/* <div className="px-4 col-span-1 lg:w-1/2 md:w-1/2 sm:items-center sm:justify-center pt-3 ">
                            
                                <img class="rounded-t-lg" src={respite} alt="" />
                                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                    <p>
                                    Respite Care
                                    </p>
                                </h5>
                                <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                                    <p className='text-left'>
                                    We provide temporary care services, designed to give  family members sometime off to re-energise whilst 
                                    having peace of mind that their loved ones are looked after.  This gives our service users a change of environment 
                                    and experience which sometimes is good for mental health.

                                    We can provide these services at home or residential facilities. The services include:<br/><br/>

                                    <ul class="list-disc ">
                                        <li>Individual's care is taken overprovide by a trained carer for an agreed amount of time</li>
                                        <li>Taking out the cared for indivdual</li>
                                        
                                    </ul><br/>

                                    We strive to:
<br/>
                                    <ul class="list-disc ">
                                        <li>promote the mental health and wellbeing of our carers and the individual being cared for.</li>
                                        <li>prevent burnouts and provide the opportunity for a break to family members or carers.</li>
                                        <li>offer a person centred care, placing our service users at the centre of our services</li>
                                    </ul>
                                </p> 
                                </p>
                            
                        </div> */}

                       {/*  <div className="px-4 col-span-1 lg:w-1/3 md:w-1/2 sm:items-center sm:justify-center pt-3">
                            <img class="rounded-t-lg" src={domic} alt="" />
                            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                    <p>
                                    Supported Living Care
                                    </p>
                            </h5>

                            <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                                    <p className='text-left'>
                                    Our Supported Living services enable people to live independently and manage their own tenancies, 
                                    with support designed around their needs and goals. We aim to promote choice and personalise our 
                                    services to the needs of our service users. We support adults with mental health needs, dementia, 
                                    learning disability and those recovering from hospital discharge.The services we offer include support with:<br/><br/>
                                    <ul class="list-disc ">
                                        <li>Cooking, cleaning and maintaining the home.</li>
                                        <li>Promoting a healthy lifestyle</li>
                                        <li>Personal care, such as getting washed and dressed</li>  
                                        <li>Support with medication.</li>
                                        <li>Social inclusion</li>  
                                        <li>Promoting relationships with family and friends.</li>                                    
                                    </ul>

                                    
                                </p> 
                                </p>
    
                            
                        </div> */}
                                        
                    </div>

                </div>
            </div>
        </section>
    </div>
)
}

export default Services