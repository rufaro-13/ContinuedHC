import React from 'react'
import domiciliary from '../images/smiley-man-woman-medium-shot.jpg'
import domic from "../images/african-social-worker-helping-senior-woman.jpg"
import paliat from '../images/smiley-man-woman-medium-shot.jpg'
import respite from '../images/high-angle-man-sleeping-with-mask.jpg'

function Services() {
  return (
    <div>
        <section>
            <div class=" px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                       Our services:
                    </h4>
                </div> 

                <div class="md:flex pt-4 pb-4">

                    <div class="md:w-1/2 col-span-1 px-4 pt-2">
                        <img src={domiciliary}class=" rounded-lg md:h-92  mr-3" alt=""/> 
                    </div>

                    <div class="md:w-1/2  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-4 ">
                        <h5 class="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none text-center text-black md:text-2xl lg:text-2xl">
                            Domiciliary Care <br/><br/>
                        </h5>

                        <p class='font-normal text-sm md:text-lg px-2'>
                        Also known as 'Home care' refers to the range of services put in place to support an individual in their home. A trained 
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
                        </ul>

                        <br/><br/>

                        </p>

                    </div>

                    
                </div>

                <p class='font-normal text-sm md:text-lg  sm:items-center sm:justify-center px-2'>
                    Why should you choose our domiciliary care services: <br/><br/>
                    <ul class="list-disc ">
                        <li>They are very affordable.</li>
                        <li>We provide care at home in your familiar and comfortable environment for the cared for individual.</li>
                        <li>A sense of retaining their independence and individual benefits from improved mental health is our priority.  </li>
                        <li>We support people to maintain their independence and promote choice.</li>
                        <li>We respect and promote dignity in delivery of our services.</li>
                        <li>We listen to your wishes and tailor make our services to suit your needs</li>
                    </ul>
                </p>

                <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                    <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                        <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                            Here are some of the services we offer:
                        </h4>
                    </div> 

                    <div class="md:flex grid  lg:grid-cols-3 lg:gap-x-4 m-auto md:grid-cols-2 md:gap-2  grid-cols-1 px-2 item-stretch " >

                        <div className="px-4 col-span-1 lg:w-1/3 md:w-1/2 sm:items-center sm:justify-center pt-3">
                        
                                <img class="rounded-t-lg" src={paliat} alt="" />
                               
                                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                    <p>
                                    Palliative Care
                                    </p>
                                </h5>
                                <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                                    <p className='rounded-lg text-left '>
                                    
                                    Palliative care also known as 'end-of-life care' refers to the services given to
                                     those with a terminal illness. Continued Healthcare strives to provide physical, emotional,
                                      social, and spiritual support for service users  and their families during defining moments of life.<br/><br/>
                                    If you join us, we will: <br/><br/>
                                    <ul class="list-disc ">
                                        <li>Provide you with reassurance, comfort and company</li>
                                        <li>Comfort loved ones by knowing that the individual is being cared for</li>
                                        <li>Aid relief of some symptoms via medication that can be administered as an out-patient</li>
                                    </ul>
                                    </p>

                                    
                                </p>
                            
                        </div>

                        <div className="px-4 col-span-1 lg:w-1/3 md:w-1/2 sm:items-center sm:justify-center pt-3 ">
                            
                                <img class="rounded-t-lg" src={respite} alt="" />
                                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                    <p>
                                    Respite Care
                                    </p>
                                </h5>
                                <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                                    <p className='text-left'>
                                    We provide temporary care services, designed to give carers such as family members,
                                    or the person receiving care, a much-needed break. We can provide these services at home or residential facilities.

                                    The services include:<br/><br/>

                                    <ul class="list-disc ">
                                        <li>Individual's care is taken over by a trained carer for a few hours</li>
                                        <li>Taking out the cared for indivdual</li>
                                        
                                    </ul><br/>

                                    We will make sure that:<br/>
                                    <ul class="list-disc ">
                                        <li>We are on top of the mental health and wellbeing of both the carer and the individual being cared for</li>
                                        <li>We prevent burnouts and provide the opportunity for a break to family members or carers</li>
                                    </ul>
                                </p> 
                                </p>
                            
                        </div>

                        <div className="px-4 col-span-1 lg:w-1/3 md:w-1/2 sm:items-center sm:justify-center pt-3">
                            <img class="rounded-t-lg" src={domic} alt="" />
                            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                    <p>
                                    Supported Living Care
                                    </p>
                            </h5>

                            <p className="font-normal text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                                    <p className='text-left'>
                                    Our Supported Living services enable people to live independently and manage their own tenancies, with support 
                                    designed around their needs and goals. We concentrate on offering help and accommodations to those with a range of
                                    disabilities and/or complicated needs. The services we offer include support with:<br/><br/>
                                    <ul class="list-disc ">
                                        <li>Cooking, cleaning and looking after the home</li>
                                        <li>Following a healthy lifestyle</li>
                                        <li>Personal care, such as getting washed and dressed</li>  
                                        <li>Taking medication</li>                                      
                                    </ul>

                                    {/* Some of the advantages include:<br/>
                                    <ul class="list-disc ">
                                        <li>It is good for the mental health and wellbeing of both the carer and the individual being cared fo</li>
                                        <li>it prevents burnout and provides the opportunity for a break to family members or carers</li>
                                    </ul> */}
                                </p> 
                                </p>
    
                            
                        </div>
                                        
                    </div>

                </div>
            </div>
        </section>
    </div>
)
}

export default Services