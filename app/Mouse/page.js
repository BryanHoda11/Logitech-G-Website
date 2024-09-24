"use client"

import React, { useState } from 'react'

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

const Mouse = () => {
    const [subpower, setsubpower] = useState(true);
    const [sublighting, setsublighting] = useState(true);
    const [subconnectivity, setsubconnectivity] = useState(true);
    const [subsensor, setsubsensor] = useState(true);
    const [subcolor, setsubcolor] = useState(true);
    const [subsort, setsubsort] = useState(true);
    const [left, setleft] = useState(false);

    // Q&A States 
    const [question1, setquestion1] = useState(false);
    const [question2, setquestion2] = useState(false);
    const [question3, setquestion3] = useState(false);
    const [question4, setquestion4] = useState(false);
    const [question5, setquestion5] = useState(false);
    const [question6, setquestion6] = useState(false);
    const [question7, setquestion7] = useState(false);
    const [question8, setquestion8] = useState(false);

    const handlesubPower = () => {
        setsubpower(!subpower)
    };

    const handlesubLighting = () => {
        setsublighting(!sublighting)
    };

    const handlesubConnectivity = () => {
        setsubconnectivity(!subconnectivity)
    };

    const handlesubSensor = () => {
        setsubsensor(!subsensor)
    };

    const handlesubColor = () => {
        setsubcolor(!subcolor)
    };

    const handlesubSort = () => {
        setsubsort(!subsort)
    };

    return (
        <>
            <div className="mouse-banner w-full relative overflow-hidden">
                <img className='hidden lg:block' src="/Mouse_images/mousebanner.png" alt="mouse-banner" />
                <img className='hidden sm:max-lg:block' src="/Mouse_images/mousebanner-tablet.png" alt="mouse-banner" />
                <img className='block sm:hidden' src="/Mouse_images/mousebanner-mobile.png" alt="mouse-banner" />

                <div className="banner-info flex flex-col gap-6 absolute max-sm:bottom-12 sm:top-[30%] left-[10%] w-full sm:w-1/2">
                    <h2 className='font-bold text-4xl lg:text-5xl text-white animate-pulse'>GAMING MICE</h2>
                    <hr className='w-[25%] h-[7px] my-3 bg-gray-400 border-none' />
                    <p className='text-gray-200 max-sm:text-sm w-[85%] sm:w-[70%] lg:w-1/2'>Logitech G develops award-winning wireless and wired gaming mice. Constantly innovating from sensors to shape, find the right one for you.</p>
                </div>
            </div>

            <div className="toggle-filter flex lg:hidden items-center gap-4 bg-gray-100 px-4 py-4 text-blue-400">
                <h3 onClick={() => setleft(!left)} className='font-bold flex gap-3 items-center cursor-pointer'>FILTERS <FaFilter /></h3>
            </div>

            <div className="main-container my-10 flex sm:px-5 w-full">
                <div className="left hidden lg:block px-8 py-8 min-h-[300px] w-[20%] bg-white">
                    <ul className='flex flex-col border-t border-b border-black border-dashed py-4 gap-8 text-lg text-gray-600 font-bold'>
                        <li className='flex items-center justify-between cursor-pointer'>POWER DELIVERY {subpower ? (<FaMinus onClick={handlesubPower} className='text-blue-500' />) : (<FaPlus onClick={handlesubPower} className='text-blue-500' />)}</li>
                        {subpower && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Corded</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="rechargeable" /> Rechargeable</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="powerplay" /> POWERPLAY</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="alkaline" /> Alkaline Battery</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>LIGHTING {sublighting ? (<FaMinus onClick={handlesubLighting} className='text-blue-500' />) : (<FaPlus onClick={handlesubLighting} className='text-blue-500' />)}</li>
                        {sublighting && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSYNC RGB</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>CONNECTIVITY {subconnectivity ? (<FaMinus onClick={handlesubConnectivity} className='text-blue-500' />) : (<FaPlus onClick={handlesubConnectivity} className='text-blue-500' />)}</li>
                        {subconnectivity && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Wired</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSPEED Wireless</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>SENSOR TYPE {subsensor ? (<FaMinus onClick={handlesubSensor} className='text-blue-500' />) : (<FaPlus onClick={handlesubSensor} className='text-blue-500' />)}</li>
                        {subsensor && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Optical Sensor</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> HERO 25K Sensor</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> HERO 2 Sensor</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>COLORS {subcolor ? (<FaMinus onClick={handlesubColor} className='text-blue-500' />) : (<FaPlus onClick={handlesubColor} className='text-blue-500' />)}</li>
                        {subcolor && <div className='flex gap-4 items-center mx-2'>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-red-600'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-pink-200'></div>
                        </div>}
                        <li className='flex items-center justify-between cursor-pointer'>SORT BY {subsort ? (<FaMinus onClick={handlesubSort} className='text-blue-500' />) : (<FaPlus onClick={handlesubSort} className='text-blue-500' />)}</li>
                        {subsort && <ul className='flex flex-col text-md gap-5 text-gray-700 font-thin'>
                            <li> Best Match</li>
                            <li> New</li>
                            <li> Name</li>
                            <li> Best Sellers</li>
                            <li> Featured</li>
                        </ul>}
                    </ul>
                </div>

                {left && <div className="conditional-left px-8 py-8 absolute h-[700px] overflow-y-scroll w-full sm:w-1/2 z-10 bg-gray-100">
                    <ul className='flex flex-col border-t border-b border-black border-dashed py-4 gap-8 text-lg text-gray-600 font-bold'>
                        <li className='flex items-center justify-between cursor-pointer'>POWER DELIVERY {subpower ? (<FaMinus onClick={handlesubPower} className='text-blue-500' />) : (<FaPlus onClick={handlesubPower} className='text-blue-500' />)}</li>
                        {subpower && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Corded</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="rechargeable" /> Rechargeable</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="powerplay" /> POWERPLAY</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="alkaline" /> Alkaline Battery</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>LIGHTING {sublighting ? (<FaMinus onClick={handlesubLighting} className='text-blue-500' />) : (<FaPlus onClick={handlesubLighting} className='text-blue-500' />)}</li>
                        {sublighting && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSYNC RGB</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>CONNECTIVITY {subconnectivity ? (<FaMinus onClick={handlesubConnectivity} className='text-blue-500' />) : (<FaPlus onClick={handlesubConnectivity} className='text-blue-500' />)}</li>
                        {subconnectivity && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Wired</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSPEED Wireless</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>SENSOR TYPE {subsensor ? (<FaMinus onClick={handlesubSensor} className='text-blue-500' />) : (<FaPlus onClick={handlesubSensor} className='text-blue-500' />)}</li>
                        {subsensor && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Optical Sensor</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> HERO 25K Sensor</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> HERO 2 Sensor</li>
                        </ul>}

                        <li className='flex items-center justify-between cursor-pointer'>COLORS {subcolor ? (<FaMinus onClick={handlesubColor} className='text-blue-500' />) : (<FaPlus onClick={handlesubColor} className='text-blue-500' />)}</li>
                        {subcolor && <div className='flex gap-4 items-center mx-2'>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-red-600'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-pink-200'></div>
                        </div>}
                        <li className='flex items-center justify-between cursor-pointer'>SORT BY {subsort ? (<FaMinus onClick={handlesubSort} className='text-blue-500' />) : (<FaPlus onClick={handlesubSort} className='text-blue-500' />)}</li>
                        {subsort && <ul className='flex flex-col text-md gap-5 text-gray-700 font-thin'>
                            <li> Best Match</li>
                            <li> New</li>
                            <li> Name</li>
                            <li> Best Sellers</li>
                            <li> Featured</li>
                        </ul>}
                    </ul>
                </div>}

                <div className="right px-3 py-8 min-h-[90vh] w-full lg:w-[80%]">
                    <div className="container space-y-32">

                        <div className="flex gap-4 overflow-x-scroll lg:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7 cursor-pointer' src="/Mouse_images/mouse1.png" alt="mouse-1" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg cursor-pointer'>G309 LIGHTSPEED</h3>
                                    <h3 className='font-thin cursor-pointer'>Wireless Gaming Mouse</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7 cursor-pointer' src="/Mouse_images/mouse2.png" alt="mouse-2" />
                                <span className='bg-gray-700 text-white absolute top-[8px] font-bold text-xs px-4 py-2 cursor-pointer'>Best Seller</span>

                                <span className='bg-gray-200 absolute top-[40%] -left-8 text-sm px-4 py-2 -rotate-90 cursor-pointer'>PRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg cursor-pointer'>PRO X SUPERLIGHT 2</h3>
                                    <h3 className='font-thin cursor-pointer'>LIGHTSPEED Wireless Gaming Mouse</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-pink-600'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse3.png" alt="mouse-3" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G502 X PLUS GAMING MOUSE</h3>
                                    <h3 className='font-thin'>Wireless Gaming Mouse</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll lg:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse4.png" alt="mouse-4" />
                                <span className='bg-gray-200 absolute top-[40%] -left-8 text-sm px-4 py-2 -rotate-90 cursor-pointer'>PRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>PRO X</h3>
                                    <h3 className='font-thin'>SUPERLIGHT</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-pink-600'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-orange-600'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse5.png" alt="mouse-5" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G502 X LIGHTSPEED WIRELESS GAMING MOUSE</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse6.png" alt="mouse-6" />
                                <span className='bg-gray-200 absolute top-[40%] -left-8 text-sm px-4 py-2 -rotate-90 cursor-pointer'>PRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>PRO</h3>
                                    <h3 className='font-thin'>Wireless Gaming Mouse</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll lg:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse7.png" alt="mouse-7" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G502 X GAMING MOUSE</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse8.png" alt="mouse-8" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G502</h3>
                                    <h3 className='font-thin'>LIGHTSPEED Wireless Gaming Mouse</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse9.png" alt="mouse-9" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G304</h3>
                                    <h3 className='font-thin'>LIGHTSPEED Wireless Gaming Mouse</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll lg:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse10.png" alt="mouse-10" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G502 HERO</h3>
                                    <h3 className='font-thin'>High Performance Gaming Mouse</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse11.png" alt="mouse-11" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G102</h3>
                                    <h3 className='font-thin'>LIGHTSYNC</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse12.png" alt="mouse-12" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G403</h3>
                                    <h3 className='font-thin'>HERO Gaming Mouse</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll lg:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Mouse_images/mouse13.png" alt="mouse-13r" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G102 PRODIGY</h3>
                                    <h3 className='font-thin'>Gaming Mouse</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[300px] relative">
                                <img className='hover:scale-105 cursor-pointer transition-all duration-500 object-cover' src="/Mouse_images/explore1.png" alt="explore-1" />

                                <h2 className='text-white cursor-pointer text-3xl font-bold absolute bottom-[50%] left-[20%]'>EXPLORE MOUSEPADS</h2>
                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[300px] relative">
                                <img className='hover:scale-105 cursor-pointer transition-all duration-500 object-cover' src="/Mouse_images/explore2.png" alt="explore-2" />

                                <h2 className='text-white cursor-pointer text-2xl font-bold absolute bottom-[30%] left-[20%]'>EXPLORE GAMING KEYBOARDS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq w-full flex flex-col items-center min-h-[80vh] py-10 bg-gray-800 text-white">
                <h2 className='text-center font-bold text-3xl'>FREQUENTLY ASKED QUESTIONS</h2>

                <div className="q-a flex flex-col pt-16 pb-5 w-full sm:w-[88%] justify-center items-center gap-1">

                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT IS A GAMING MOUSE? {question1 ? (<FaMinus onClick={() => setquestion1(!question1)} />) : (<FaPlus onClick={() => setquestion1(!question1)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question1 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>A gaming mouse is a mouse that's specifically designed for computer (PC) gaming. These high performance mice are built to give you added speed and precision, as well as additional mappable buttons that you can use to your advantage in game.</p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>There are different types of gaming mice that are more effective for different types of games, including FPS games, MMORPGs, MOBAs, and more. Gaming mice are usually paired with a <span className='text-blue-400 font-bold cursor-pointer hover:text-blue-600 hover:underline'>gaming mouse pad</span> for maximum performance, and these mouse pads often provide a larger surface area for more drastic mouse movements.</p>
                        </div>
                    </div>

                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT MAKES GAMING MICE DIFFERENT? {question2 ? (<FaMinus onClick={() => setquestion2(!question2)} />) : (<FaPlus onClick={() => setquestion2(!question2)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question2 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>Gaming mice are different from regular mice because they're specially designed to help you improve your performance through increased responsiveness and accuracy. Most gaming mice feature high-quality sensors that give you added speed and precision, which makes it easier to click the right spot in MOBAs and aim in FPS games. Logitech G has developed the HERO sensor which is a breakthrough in both precision and power-efficiency for superior aiming and wireless mouse battery life.</p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>Depending on the gaming mouse you choose, you can also find mice with additional buttons that make it easier to map all your actions in your favorite games. Plus, many gaming mice have RGB lighting that you can sync up to your <span className='text-blue-400 font-bold cursor-pointer hover:text-blue-600 hover:underline'>gaming keyboard</span>, headset and setup to create a cohesive look. LIGHTSYNC RGB is highly customizable and features many animations to choose from across ~16.8 million colors.</p>
                        </div>
                    </div>

                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT ARE THE BENEFITS OF GAMING MICE? {question3 ? (<FaMinus onClick={() => setquestion3(!question3)} />) : (<FaPlus onClick={() => setquestion3(!question3)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question3 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>Having the right gaming mouse won't immediately make you a pro, but it can help you step your game up and get an edge over your competition. Here are some of the benefits of Logitech G gaming mice:</p>
                            <ul className='w-[95%] text-xs sm:text-sm pb-3 flex flex-col gap-3 pl-6'>
                                <li><span className='font-bold'>- Speed</span>: Gaming mice allow you to adjust your DPI to find the right speed for you, so you can make snappier movements.</li>
                                <li><span className='font-bold'>- Precision</span>: Improved sensors allow gaming mice to more accurately track your mouse movements, so you don't have to worry about skipping and other aiming issues.</li>
                                <li><span className='font-bold'>- Durability</span>: A Logitech G gaming mouse is a great choice if you're looking for a well-built mouse that will stand the test of time.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT ARE THE DIFFERENT TYPES OF GAMING MICE? {question4 ? (<FaMinus onClick={() => setquestion4(!question4)} />) : (<FaPlus onClick={() => setquestion4(!question4)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question4 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>There are a handful of different types of gaming mice, starting with connectivity options. Wired or wireless are both popular choices among gamers. A wired mouse gives you the freedom of unlimited battery life, but you're restricted by the cord.</p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>Wireless mice offer the same great performance without a cord, but while Logitech G mice are known for long battery life you have to keep them charged or change your batteries sometimes. There are also Logitech G gaming mice with different numbers of buttons and other unique features that are designed to enhance your performance in your favorite games. Some Logitech G gaming mice also feature Bluetooth® wireless for multiple device connectivity.</p>
                        </div>
                    </div>
                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT SHOULD YOU LOOK FOR WHEN BUYING A GAMING MOUSE? {question5 ? (<FaMinus onClick={() => setquestion5(!question5)} />) : (<FaPlus onClick={() => setquestion5(!question5)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question5 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>If you're looking for the best gaming mouse, the sensor is one of the most important features. You want a sensor that offers various DPI settings and accurate tracking, and the HERO sensor from Logitech G achieves precision and long battery life when you’re looking to buy a wireless mouse.</p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>You should also consider the number of buttons, the grip style, and the weight and size of the mouse.</p>
                        </div>
                    </div>
                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT MOUSE SIZE IS BEST FOR GAMING? {question6 ? (<FaMinus onClick={() => setquestion6(!question6)} />) : (<FaPlus onClick={() => setquestion6(!question6)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question6 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>Everyone is different when it comes to choosing the right mouse size. The size of your hand and your preferred mouse grip play a big role in finding the best gaming mouse for you, so look for a mouse that fits your grip to start.</p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>If your hands are less than 17,5 cm (6,9 in) long, it’s generally recommended to go with a small mouse. Medium gaming mice are normally suitable for hands that are 17,5-19,0 cm (6,9 – 7,5 in) long. If your hands are over  19,0 cm ({'>'} 7,5 in) long, you should go with a large gaming mouse.</p>
                        </div>
                    </div>
                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">WHAT LOGITECH G GAMING MOUSE SHOULD I CHOOSE? {question7 ? (<FaMinus onClick={() => setquestion7(!question7)} />) : (<FaPlus onClick={() => setquestion7(!question7)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question7 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>Choosing the right mouse is a crucial step when you're trying to find the perfect <span className='text-blue-400 font-bold cursor-pointer hover:text-blue-600 hover:underline'>streaming gear</span>. The good news is that there are numerous Logitech G gaming mice, whether you're looking for a smaller ambidextrous mouse like the G PRO Wireless or an ergonomic mouse like the G502 X. </p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>All of our gaming mice are equipped with high-quality sensors that provide accurate tracking and multiple DPI settings, and most Logitech G gaming mice have additional features like extra mappable buttons.</p>
                        </div>
                    </div>
                    <div className="q-wrapper bg-gray-600 text-white flex flex-col w-full">
                        <div className="question flex items-center font-bold cursor-pointer justify-between h-12 text-xs sm:text-sm px-5 py-8">HOW SHOULD I COMPLETE MY GAMING SETUP? {question8 ? (<FaMinus onClick={() => setquestion8(!question8)} />) : (<FaPlus onClick={() => setquestion8(!question8)} />)}</div>

                        <div className={`flex flex-col gap-3 items-center transition-all duration-700 ease-in-out ${question8 ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='w-[95%] text-xs sm:text-sm'>There's nothing better than having the perfect gaming setup, and that goes beyond buying a Logitech G gaming mouse. If you want to complete your gaming setup, you also need a mouse pad and gaming keyboard. Also consider a gaming headset and webcam.</p>
                            <p className='w-[95%] pb-3 text-xs sm:text-sm'>If you're gaming with friends, a Logitech G <span className='text-blue-400 font-bold cursor-pointer hover:text-blue-600 hover:underline'>streaming headset</span> is a great way to communicate. The more gaming gear you have, the easier it is to enjoy your favorite games without worrying about your gear.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mouse
