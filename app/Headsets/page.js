"use client"

import React, { useState } from 'react'

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

const Headsets = () => {
    const [subplatform, setsubplatform] = useState(true);
    const [subconnectivity, setsubconnectivity] = useState(true);
    const [subseries, setsubseries] = useState(true);
    const [subtech, setsubtech] = useState(true);
    const [subcolor, setsubcolor] = useState(true);
    const [subsort, setsubsort] = useState(true);
    const [left, setleft] = useState(false);

    const handlesubPlatform = () => {
        setsubplatform(!subplatform)
    };

    const handlesubConnectivity = () => {
        setsubconnectivity(!subconnectivity)
    };

    const handlesubSeries = () => {
        setsubseries(!subseries)
    };

    const handlesubTech = () => {
        setsubtech(!subtech)
    };

    const handlesubColor = () => {
        setsubcolor(!subcolor)
    };

    const handlesubSort = () => {
        setsubsort(!subsort)
    };

    return (
        <>
            <div className="headset-banner w-full relative overflow-hidden"> 
                <img className='hidden lg:block' src="/Headsets_images/headsetbanner.png" alt="headset-banner" />
                <img className='hidden sm:max-lg:block' src="/Headsets_images/headsetbanner-tablet.png" alt="headset-banner" />
                <img className='block sm:hidden' src="/Headsets_images/headsetbanner-mobile.png" alt="headset-banner" />

                <div className="banner-info flex flex-col gap-6 absolute max-sm:bottom-12 sm:top-[30%] left-[10%] w-full sm:w-1/2">
                    <h2 className='font-bold text-3xl sm:text-4xl text-white animate-pulse'>GAMING HEADSETS & AUDIO</h2>
                    <hr className='w-[25%] h-[7px] my-3 bg-gray-400 border-none' />
                    <p className='text-gray-200 max-sm:text-sm w-[85%] sm:w-[70%] lg:w-1/2'>Immersive sound, crystal-clear mics, customizable EQ and optional 7.1 surround. Everything you need to get into the game and perform with the added benefit of precise audio.</p>
                </div>
            </div>

            <div className="toggle-filter flex lg:hidden items-center gap-4 bg-gray-100 px-4 py-4 text-blue-400">
                <h3 onClick={() => setleft(!left)} className='font-bold flex gap-3 items-center cursor-pointer'>FILTERS <FaFilter /></h3>
            </div>

            <div className="main-container my-10 flex sm:px-5 w-full">
                <div className="left hidden lg:block px-8 py-8 min-h-[300px] w-[20%] bg-white">

                    <ul className='flex flex-col border-t border-b border-black border-dashed py-4 gap-8 text-lg text-gray-600 font-bold'>
                        <li className='flex items-center justify-between cursor-pointer'>PLATFORM {subplatform ? (<FaMinus onClick={handlesubPlatform} className='text-blue-500' />) : (<FaPlus onClick={handlesubPlatform} className='text-blue-500' />)}</li>
                        {subplatform && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" checked="true" /> PC</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="rechargeable" /> Xbox</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="powerplay" checked="true" /> PlayStation</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="alkaline" /> Nintendo</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>CONNECTIVITY {subconnectivity ? (<FaMinus onClick={handlesubConnectivity} className='text-blue-500' />) : (<FaPlus onClick={handlesubConnectivity} className='text-blue-500' />)}</li>
                        {subconnectivity && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> 2.4 GHz Wireless</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> 3.5mm Audio Input</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Bluetooth</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSPEED Wireless</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Wired USB Input</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> USB-C</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>SERIES {subseries ? (<FaMinus onClick={handlesubSeries} className='text-blue-500' />) : (<FaPlus onClick={handlesubSeries} className='text-blue-500' />)}</li>
                        {subseries && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> G</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> PRO</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> ASTRO</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>TECHNOLOGY {subtech ? (<FaMinus onClick={handlesubTech} className='text-blue-500' />) : (<FaPlus onClick={handlesubTech} className='text-blue-500' />)}</li>
                        {subtech && <ul className='flex flex-col gap-5 text-sm text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> DTS Headphone X</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSYNC RGB</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> DTS Surround Sound Technology</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> BLUE V0!CE Mic Technology</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Pro-G Driver Technology</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>COLORS {subcolor ? (<FaMinus onClick={handlesubColor} className='text-blue-500' />) : (<FaPlus onClick={handlesubColor} className='text-blue-500' />)}</li>
                        {subcolor && <div className='flex flex-wrap gap-4 items-center mx-2'>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-gray-400'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-red-600'></div>

                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-yellow-300'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-green-700'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-blue-700'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-purple-800'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-pink-200'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-amber-700'></div>
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
                        <li className='flex items-center justify-between cursor-pointer'>PLATFORM {subplatform ? (<FaMinus onClick={handlesubPlatform} className='text-blue-500' />) : (<FaPlus onClick={handlesubPlatform} className='text-blue-500' />)}</li>
                        {subplatform && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" checked="true" /> PC</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="rechargeable" /> Xbox</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="powerplay" checked="true" /> PlayStation</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="alkaline" /> Nintendo</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>CONNECTIVITY {subconnectivity ? (<FaMinus onClick={handlesubConnectivity} className='text-blue-500' />) : (<FaPlus onClick={handlesubConnectivity} className='text-blue-500' />)}</li>
                        {subconnectivity && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> 2.4 GHz Wireless</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> 3.5mm Audio Input</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Bluetooth</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSPEED Wireless</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Wired USB Input</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> USB-C</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>SERIES {subseries ? (<FaMinus onClick={handlesubSeries} className='text-blue-500' />) : (<FaPlus onClick={handlesubSeries} className='text-blue-500' />)}</li>
                        {subseries && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> G</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> PRO</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> ASTRO</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>TECHNOLOGY {subtech ? (<FaMinus onClick={handlesubTech} className='text-blue-500' />) : (<FaPlus onClick={handlesubTech} className='text-blue-500' />)}</li>
                        {subtech && <ul className='flex flex-col gap-5 text-lg text-gray-700 font-thin'>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> DTS Headphone X</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> LIGHTSYNC RGB</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> DTS Surround Sound Technology</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> BLUE V0!CE Mic Technology</li>
                            <li><input className='mx-2 cursor-pointer' type="checkbox" name="power" id="corded" /> Pro-G Driver Technology</li>
                        </ul>}
                        <li className='flex items-center justify-between cursor-pointer'>COLORS {subcolor ? (<FaMinus onClick={handlesubColor} className='text-blue-500' />) : (<FaPlus onClick={handlesubColor} className='text-blue-500' />)}</li>
                        {subcolor && <div className='flex flex-wrap gap-4 items-center mx-2'>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-gray-400'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                            <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-red-600'></div>

                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-yellow-300'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-green-700'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-blue-700'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-purple-800'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-pink-200'></div>
                            <div className='h-6 w-6 mt-3 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-amber-700'></div>
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
                    <div className="items flex items center gap-3 pb-10 px-4">
                        <div className='px-5 py-2 bg-gray-200 text-black cursor-pointer hover:text-blue-500 transition-all duration-200 text-xs text-center font-bold rounded-full'>PC</div>
                        <div className='px-5 py-2 bg-gray-200 text-black cursor-pointer hover:text-blue-500 transition-all duration-200 text-xs text-center font-bold rounded-full'>PLAYSTATION</div>
                    </div>
                    <div className="container space-y-32">

                        <div className="flex gap-4 overflow-x-scroll xl:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7 cursor-pointer' src="/Headsets_images/headset1.png" alt="headset-1" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg cursor-pointer'>ASTRO A50 WIRELESS + BASE STATION</h3>
                                    <h3 className='font-thin cursor-pointer'>Wireless Gaming Headset for Xbox, PlayStation and PC/Mac*</h3>
                                </div>
                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7 cursor-pointer' src="/Headsets_images/headset2.png" alt="headset-2" />

                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg cursor-pointer'>ASTRO A40 TR HEADSET + MIXAMP PRO TR</h3>
                                    <h3 className='font-thin cursor-pointer'>Wired Gaming Headset + MixAmp for Xbox, PlayStation and PC/Mac*</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-blue-500'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-red-600'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset3.png" alt="headset-3" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G733</h3>
                                    <h3 className='font-thin'>LIGHTSPEED Wireless RGB Gaming Headset</h3>
                                </div>

                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll xl:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset4.png" alt="headset-4" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>ASTRO A30 WIRELESS GAMING HEADSET - THE MANDALORIAN EDITION</h3>
                                    <h3 className='font-thin'>LIGHTSPEED Wireless Gaming Headset for Xbox, PlayStation, PC/Mac and Mobile*</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset5.png" alt="headset-5" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>ASTRO A40 TR</h3>
                                    <h3 className='font-thin cursor-pointer'>Wired Gaming Headset PlayStation and PC/Mac*</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset6.png" alt="headset-6" />
                                <span className='bg-gray-200 absolute top-[40%] -left-8 text-sm px-4 py-2 -rotate-90 cursor-pointer'>PRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>PRO X</h3>
                                    <h3 className='font-thin'> Gaming Headset</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll xl:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset7.png" alt="headset-7" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>ASTRO A20 WIRELESS</h3>
                                    <h3 className='font-thin cursor-pointer'>Wireless Gaming Headset PlayStation and PC/Mac*</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset8.png" alt="headset-8" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G435</h3>
                                    <h3 className='font-thin'>LIGHTSPEED Wireless Gaming Headset</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset9.png" alt="headset-9" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>
                                <span className='bg-gray-700 text-white absolute top-[8px] font-bold text-xs px-4 py-2 cursor-pointer'>Best Seller</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>ASTRO A10</h3>
                                    <h3 className='font-thin'>Wired Gaming Headset for Xbox Series X|S, PS5, Switch, PC/Mac and more</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll xl:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset10.png" alt="headset-10" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G335</h3>
                                    <h3 className='font-thin'>Wired Gaming Headset</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset11.png" alt="headset-11" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>ASTRO MIXAMP PRO TR</h3>
                                    <h3 className='font-thin'>MixAmp for PlayStation and PC/Mac*</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset12.png" alt="headset-12" />
                                <span className='bg-gray-200 absolute top-[40%] -left-10 text-sm px-4 py-2 -rotate-90 cursor-pointer'>ASTRO SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>A50 GEN 4 BASE STATION</h3>
                                    <h3 className='font-thin'>Astro Series A50 Base Station for Xbox/PC</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-scroll xl:overflow-hidden">

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset13.png" alt="headset-13" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G633S</h3>
                                    <h3 className='font-thin'>7.1 Surround Sound LIGHTSYNC Gaming Headset</h3>
                                    <div className='flex gap-4 items-center'>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-black'></div>
                                        <div className='h-6 w-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-full border border-black bg-white'></div>
                                    </div>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset14.png" alt="headset-14" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G431</h3>
                                    <h3 className='font-thin'>7.1 Surround Sound Wired Gaming Headset</h3>
                                </div>

                            </div>

                            <div className="card flex flex-col gap-3 h-auto min-w-[350px] relative">
                                <img className='bg-gray-100 py-7 px-7' src="/Headsets_images/headset15.png" alt="headset-15" />
                                <span className='bg-gray-200 absolute top-[40%] -left-6 text-sm px-4 py-2 -rotate-90 cursor-pointer'>G SERIES</span>

                                <div className="flex flex-col gap-3">
                                    <h3 className='font-bold text-lg'>G331</h3>
                                    <h3 className='font-thin'>Stereo Gaming Headset</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headsets
