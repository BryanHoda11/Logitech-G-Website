"use client"
import React from 'react'

import { MdOutlineArrowRight } from "react-icons/md";

const Furniture = () => {
    return (
        <>
            <div className="intro-banner w-full relative">
                <img className='hidden lg:block' src="/Furniture_images/intro-banner.png" alt="intro-banner" />
                <img className='hidden sm:max-lg:block' src="/Furniture_images/intro-banner-tablet.png" alt="intro-banner" />
                <img className='block sm:hidden' src="/Furniture_images/intro-banner-mobile.png" alt="intro-banner" />

                <div className="info flex flex-col gap-4 px-5 justify-center items-center text-white absolute bottom-[8%] lg:right-[10%]">
                    <h3 className='font-bold text-3xl'>GAMING FURNITURE</h3>
                    <hr className='w-[15%] h-[7px] bg-gray-200 border-none' />
                    <p className='text-center w-full sm:w-1/2 lg:w-[27%]'>Supercar sim racing. Exploring new worlds. Vibing on your favorite creator videos. Hardcore competing. Complete your setup for peak focus and comfort right here.</p>
                </div>
            </div>

            <div className="embody w-full relative overflow-hidden">
                <img className='hidden lg:block' src="/Furniture_images/embody-chair.png" alt="embody-chair" />
                <img className='hidden sm:max-lg:block scale-125' src="/Furniture_images/embody-chair-tablet.png" alt="embody-chair" />
                <img className='block sm:hidden' src="/Furniture_images/embody-chair-mobile.png" alt="embody-chair" />

                <div className="logo flex flex-col gap-3 px-5 justify-center items-center text-white absolute max-sm:top-9 lg:top-[40%] sm:left-[20%] sm:bottom-[15%] lg:left-[15%]">
                    <img className='w-[27%] sm:w-[40%] pb-6' src="/Furniture_images/hmlogo.png" alt="hmlogo" />
                    <h3 className='font-bold text-3xl text-center'>EMBODY GAMING CHAIR</h3>
                    <p className='font-thin text-md'>Premium Health Positive Gaming Chair</p>
                    <h3 className="text-blue-500 text-xl pt-6 font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">MEET EMBODY <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
                </div>
            </div>

            <div className="vantum w-full relative overflow-hidden">
                <img className='hidden lg:block' src="/Furniture_images/vantum.png" alt="vantum-chair" />
                <img className='hidden sm:max-lg:block scale-110' src="/Furniture_images/vantum-tablet.png" alt="vantum-chair" />
                <img className='block sm:hidden' src="/Furniture_images/vantum-mobile.png" alt="vantum-chair" />

                <div className="logo flex flex-col gap-3 px-5 justify-center items-center text-white absolute max-sm:top-9 top-[35%] sm:left-[20%] lg:left-[15%]">
                    <img className='w-[27%] sm:w-[40%] pb-6' src="/Furniture_images/hmlogo.png" alt="hmlogo" />
                    <h3 className='font-bold text-3xl text-center'>VANTUM GAMING CHAIR</h3>
                    <p className='font-thin text-md'>Versatile Ergonomic Gaming Chair</p>
                    <h3 className="text-blue-500 text-xl pt-6 font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">MEET VANTUM <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
                </div>
            </div>

            <div className="Playseat w-full relative overflow-hidden">
                <img className='hidden lg:block' src="/Furniture_images/playseat.png" alt="playseat" />
                <img className='hidden sm:max-lg:block scale-110' src="/Furniture_images/playseat-tablet.png" alt="playseat" />
                <img className='block sm:hidden' src="/Furniture_images/playseat-mobile.png" alt="playseat" />

                <div className="logo flex flex-col gap-3 px-5 justify-center items-center text-white absolute max-sm:top-14 top-[38%] sm:right-[8%]">
                    <img className='w-[30%] pb-6' src="/Furniture_images/playseat-logo.png" alt="playseat" />
                    <h3 className='font-bold text-3xl'>PLAYSEAT TROPHY</h3>
                    <p className='font-thin text-md'>Ultimate Flexible Sim Racing Chair</p>
                </div>
            </div>

            <div className="Motia-desk w-full relative overflow-hidden">
                <img className='hidden lg:block' src="/Furniture_images/motia-desk.png" alt="Motia-desk" />
                <img className='hidden sm:max-lg:block scale-150' src="/Furniture_images/motia-desk-tablet.png" alt="Motia-desk" />
                <img className='block sm:hidden' src="/Furniture_images/motia-desk-mobile.png" alt="Motia-desk" />

                <div className="logo flex flex-col gap-3 px-5 justify-center items-center text-white absolute max-sm:top-9 top-[25%] lg:top-[36%] right-0 lg:right-[13%]">
                    <img className='w-[27%] sm:w-[40%]  pb-6' src="/Furniture_images/hmlogo.png" alt="hmlogo" />
                    <h3 className='font-bold text-3xl'>MOTIA GAMING DESK</h3>
                    <p className='font-thin text-md'>Anti-Matte, Anti-Glare Motorized Desk</p>
                    <h3 className="text-blue-500 sm:text-xl pt-4 font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">BUY MOTIA FROM HERMAN MILLER <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
                </div>
            </div>

            <div className="Ollin-monitor w-full relative overflow-hidden">
                <img className='hidden lg:block' src="/Furniture_images/ollin.png" alt="Ollin-monitor" />
                <img className='hidden sm:max-lg:block scale-125' src="/Furniture_images/ollin-tablet.png" alt="Ollin-monitor" />
                <img className='block sm:hidden' src="/Furniture_images/ollin-mobile.png" alt="Ollin-monitor" />

                <div className="logo flex flex-col gap-3 px-5 justify-center items-center text-white absolute max-sm:top-20 top-[30%] lg:top-[36%] lg:right-[12%]">
                    <img className='w-[27%] sm:w-[40%] pb-6' src="/Furniture_images/hmlogo.png" alt="hmlogo" />
                    <h3 className='font-bold text-3xl'>OLLIN MONITOR ARM</h3>
                    <p className='font-thin text-md'>Fully Adjustable Monitor Arm</p>
                    <h3 className="text-blue-500 sm:text-xl pt-4 font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">BUY OLLIN FROM HERMAN MILLER <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
                </div>
            </div>

        </>
    )
}

export default Furniture
