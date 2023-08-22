import React from 'react'
import domiciliary from '../images/smiley-man-woman-medium-shot.jpg'
import domic from "../images/older-man-wheelchair-smiles-nurse-assistant-she-hands-him-glass-water.jpg"
import paliat from '../images/smiley-man-woman-medium-shot.jpg'
import respite from '../images/nurse-consoling-old-man-crying.jpg'
import { Card } from 'flowbite-react';
function Services() {
  return (
    <div>
        <section>
            <div class=" px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                       Our services:
                    </h4>
                </div> 

                <div class="flex pt-4 pb-4">

                    <div class="md:w-1/2  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-4 ">
                        <h5 class="mx-auto mb-4 text-1xl font-bold tracking-tight leading-none text-center text-black md:text-2xl lg:text-2xl">
                            Domiciliary Care <br/><br/>
                        </h5>

                        <p>
                        Also known as 'Home care' refers to the range of services put in place to support an individual in their home. A trained 
                        carer visits the individual cared for, usually for a few hours each day or as the individual requires Our services enable
                         people to remain independent at home and help them maintain their quality of life.
                        This range of services includes:<br/><br/>
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

                    <div class="md:w-1/2 col-span-1 px-4">
                    <img src={domiciliary}class=" rounded-lg h-84 mr-3" alt=""/> 
                    </div>
                </div>

                <p class='sm:items-center sm:justify-center'>
                    Some of the advantages of domiciliary care include: <br/><br/>
                    <ul class="list-disc ">
                        <li>It is a very affordable</li>
                        <li>Provides a familiar and comfortable environment for the cared for individual</li>
                        <li>A sense of retaining their independencethe and individual benefits from improved mental health  </li>
                    </ul>
                </p>

                <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                    <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                        <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                            Here are some of the services we offer:
                        </h4>
                    </div> 

                    <div class="lg:flex item-stretch">

                        <div className="px-2   sm:items-center sm:justify-center">
                            <Card
                                imgAlt="end-of-life supported person"
                                imgSrc={paliat}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                    Palliative Care
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p className='rounded-lg text-left '>
                                    
                                    Palliative care also known as 'end-of-life care' refers to the services given to those with a terminal illness.
                                    We provide physical, emotional, social, and spiritual support for patients and their families
                                    day and night comfort during defining moments of life.<br/><br/>
                                    Some of the advantages of domiciliary care include: <br/><br/>
                                    <ul class="list-disc ">
                                        <li>Provide individuals with reassurance, comfort and company</li>
                                        <li>Comforts loved ones by knowing that theindividual is being cared for</li>
                                        <li>May aid relief of some symptoms via medication that can be administered as an out-patient</li>
                                    </ul>
                                    </p>

                                    
                                </p>
                            </Card>
                        </div>

                        <div className="px-2">
                            <Card
                                imgAlt="end-of-life supported person"
                                imgSrc={respite}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                    Respite Care
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p className='text-left'>
                                        It refers to temporary care service, designed to give carers such as family members,
                                    or the person receiving care, a much-needed break. We can provide these services at home or residential facilities.

                                    The services include:<br/>
                                    <ul class="list-disc ">
                                        <li>Individul's care is taken over by a trained carer for a few hours</li>
                                        <li>Taking out the cared for indivdual</li>
                                        
                                    </ul>

                                    Some of the advantages include:<br/>
                                    <ul class="list-disc ">
                                        <li>It is good for the mental health and wellbeing of both the carer and the individual being cared fo</li>
                                        <li>it prevents burnout and provides the opportunity for a break to family members or carers</li>
                                    </ul>
                                </p> 
                                </p>
                            </Card>
                        </div>

                        <div className="px-2">
                            <Card
                                imgAlt="end-of-life supported person"
                                imgSrc={domic}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                    Supported Living Care
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
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

                                    Some of the advantages include:<br/>
                                    <ul class="list-disc ">
                                        <li>It is good for the mental health and wellbeing of both the carer and the individual being cared fo</li>
                                        <li>it prevents burnout and provides the opportunity for a break to family members or carers</li>
                                    </ul>
                                </p> 
                                </p>
                            </Card>
                        </div>
                                        
                    </div>

                </div>
            </div>
        </section>
    </div>
)
}

export default Services