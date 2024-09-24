"use client"

import React, { useState } from 'react'
import { SiLogitechg } from "react-icons/si";
import { FaRegUser } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()

    const [subShop, setsubShop] = useState(false);
    const [subSoftware, setsubSoftware] = useState(false);
    const [subSupport, setsubSupport] = useState(false);
    const [logout, setlogout] = useState(false);
    const [resNav, setresNav] = useState(false);

    const handlesubShop = (status) => {
        setsubShop(status)
    };

    const handlesubSoftware = (status) => {
        setsubSoftware(status)
    };

    const handlesubSupport = (status) => {
        setsubSupport(status)
    };

    const handleresNav = () => {
        setresNav(!resNav)
    };

    return (
        <>
            <nav className="flex items-center bg-white relative h-[80px] w-full justify-between lg:justify-around">
                <Link href="/" className="logo flex items-center cursor-pointer"> <img className='w-full h-[100px]' src="/images/logo.png" alt="logo" /> <SiLogitechg style={{ fontSize: '40px' }} /> </Link>

                <ul className='hidden lg:flex items-center gap-4 text-sm'>
                    <li onMouseEnter={() => handlesubShop(true)}
                        onMouseLeave={() => handlesubShop(false)}
                        className='cursor-pointer font-bo hover:bg-neutral-700 hover:text-white rounded-full px-5 py-2'>SHOP
                        {subShop && (
                            <div className="absolute cursor-default flex justify-around px-10 py-12 left-0 mt-3 bg-white text-black w-full min-h-[70vh] shadow-lg z-10">
                                <FaTimes className='cursor-pointer right-[10px] top-[12px] absolute' onClick={() => { handlesubShop(false) }} style={{ fontSize: '20px' }} />

                                <div className='w-[70%] flex flex-col gap-14 pt-12'>

                                    <div className="container-1 flex gap-3">
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/mice.png" alt="mice" />
                                            <Link href="/Mouse" target='_blank' className='cursor-pointer font-bold'>GAMING MICE & MOUSEPADS</Link>
                                        </div>
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/headsets.png" alt="headsets" />
                                            <Link href="/Headsets" target='_blank' className='cursor-pointer font-bold'>GAMING HEADSETS</Link>
                                        </div>
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/furniture.png" alt="furniture" />
                                            <Link href="/Furniture" target='_blank' className='cursor-pointer font-bold'>GAMING FURNITURE</Link>
                                        </div>
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/driving.png" alt="driving" />
                                            <h3>RACING WHEELS & SIMULATION</h3>
                                        </div>
                                    </div>

                                    <div className="container-2 flex gap-3">
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/streaming.png" alt="streaming" />
                                            <h3>STREAMING</h3>
                                        </div>
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/controller.png" alt="controller" />
                                            <h3>CONTROLLERS</h3>
                                        </div>
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/keyboard.png" alt="keyboard" />
                                            <h3>GAMING KEYBOARDS</h3>
                                        </div>
                                        <div className="flex flex-col gap-3 w-[30%]">
                                            <img src="/Navbar_images/accessories.png" alt="accessories" />
                                            <h3>ACCESSORIES</h3>
                                        </div>
                                    </div>

                                </div>

                                <div className='w-[30%] border-l border-black ml-10 pl-8 flex flex-col gap-4 pt-12'>
                                    <img className='w-[70%]' src="/Navbar_images/series.png" alt="series" />
                                    <h3 className='font-bold'>SHOP OUR SERIES</h3>

                                    <ul className='flex flex-col text-sm text-gray-500 gap-2'>
                                        <li className='hover:underline cursor-pointer'>PRO Series</li>
                                        <li className='hover:underline cursor-pointer'>ASTRO Series</li>
                                        <li className='hover:underline cursor-pointer'>Sim Racing</li>
                                        <li className='hover:underline cursor-pointer'>Game,Stream & Create</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li onMouseEnter={() => handlesubSoftware(true)}
                        onMouseLeave={() => handlesubSoftware(false)}
                        className='cursor-pointer hover:bg-neutral-700 hover:text-white rounded-full px-5 py-2'>SOFTWARE
                        {subSoftware && (
                            <div className="absolute cursor-default flex justify-around px-10 py-12 left-0 mt-3 bg-white text-black w-full min-h-[50vh] shadow-lg z-10">
                                <FaTimes className='cursor-pointer right-[10px] top-[12px] absolute' onClick={() => { handlesubSoftware(false) }} style={{ fontSize: '20px' }} />

                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/g-hub.png" alt="g-hub" />
                                        <Link href="/G-hub" target='_blank' className='font-bold hover:underline cursor-pointer'>G HUB</Link>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/streamlabs.png" alt="streamlabs" />
                                        <h3>STREAMLABS</h3>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/mixline.png" alt="mixline" />
                                        <h3>MIXLINE</h3>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/astro-series.png" alt="astro-series" />
                                        <h3>ASTRO SERIES</h3>
                                    </div>
                                </div>

                            </div>
                        )}
                    </li>

                    <li onMouseEnter={() => handlesubSupport(true)}
                        onMouseLeave={() => handlesubSupport(false)}
                        className='cursor-pointer hover:bg-neutral-700 hover:text-white rounded-full px-5 py-2'>SUPPORT
                        {subSupport && (
                            <div className="absolute cursor-default flex justify-around px-10 py-12 left-0 mt-4 bg-white text-black w-full min-h-[50vh] shadow-lg z-10">
                                <FaTimes className='cursor-pointer right-[10px] top-[12px] absolute' onClick={() => { handlesubSupport(false) }} style={{ fontSize: '20px' }} />

                                <div className="flex items-center gap-10">
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/support-center.png" alt="support-center" />
                                        <h3 className='font-bold hover:underline cursor-pointer'>SUPPORT CENTER</h3>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/register-product.png" alt="register-product" />
                                        <h3 className='font-bold hover:underline cursor-pointer'>REGISTER A PRODUCT</h3>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 ">
                                        <img src="/Navbar_images/logi-id.png" alt="logi-id" />
                                        <h3 className='font-bold hover:underline cursor-pointer'>CREATE LOGI ID</h3>
                                    </div>
                                </div>

                            </div>
                        )}
                    </li>
                </ul>

                {session && <div className="hidden lg:flex flex-col items-center relative">
                    <button onClick={() => { setlogout(!logout) }} className='flex justify-center items-center gap-3 text-sm bg-gray-100 px-3 py-3 rounded-lg font-bold'> {session.user.email} <MdKeyboardArrowDown style={{ fontSize: '20px' }} /></button>
                    {logout && <div className='absolute w-full flex justify-center items-center cursor-default mt-10 px-3 py-3 rounded-lg bg-gray-100 text-black z-10'>
                        <button onClick={() => { signOut() }} className='bg-gray-300 rounded-lg px-6 py-2 font-bold transition-all duration-200 ease-in'> Logout</button>
                    </div>}
                </div>}

                {!session && <Link href="/Login" target='_blank'> <button className='hidden lg:flex justify-center items-center rounded-full hover:bg-gray-100 hover:font-bold transition-all duration-200 ease-in h-12 w-12'> <FaRegUser /></button> </Link>}

                <div className="hamburger block lg:hidden px-8">
                    {resNav ? <FaTimes onClick={handleresNav} className='cursor-pointer' style={{ fontSize: '25px' }} /> : <GiHamburgerMenu onClick={handleresNav} className='cursor-pointer' style={{ fontSize: '25px' }} />}
                </div>
            </nav>

            <nav className="responsive-nav relative flex lg:hidden">
                {resNav && <ul className="flex flex-col gap-3 bg-white absolute z-10 right-0 w-full md:w-1/2 h-[450px] overflow-y-scroll px-5 py-5">
                    <li className='cursor-pointer flex items-center gap-2 hover:bg-neutral-700 hover:text-white rounded-full px-2 py-2'>SHOP <MdOutlineArrowDropDown style={{ fontSize: '20px' }} /></li>
                    <ul className='flex flex-col px-7 text-sm gap-3'>
                        <Link href="/Mouse" target='_blank' className='cursor-pointer font-bold'>GAMING MICE & MOUSEPADS</Link>
                        <Link href="/Headsets" target='_blank' className='cursor-pointer font-bold'>GAMING HEADSETS</Link>
                        <Link href="/Furniture" target='_blank' className='cursor-pointer font-bold'>GAMING FURNITURE</Link>
                        <li>RACING WHEELS & SIMULATION</li>
                        <li>STREAMING</li>
                        <li>CONTROLLERS</li>
                        <li>GAMING KEYBOARDS</li>
                        <li>ACCESSORIES</li>
                    </ul>
                    <li className='cursor-pointer flex items-center gap-2 hover:bg-neutral-700 hover:text-white rounded-full px-2 py-2'>SOFTWARE <MdOutlineArrowDropDown style={{ fontSize: '20px' }} /></li>
                    <ul className='flex flex-col px-7 text-sm gap-3'>
                        <Link href="/G-hub" target='_blank' className='font-bold hover:underline cursor-pointer'>G HUB</Link>
                        <li>STREAMLABS</li>
                        <li>MIXLINE</li>
                        <li>ASTRO SERIES</li>
                    </ul>
                    <li className='cursor-pointer flex items-center gap-2 hover:bg-neutral-700 hover:text-white rounded-full px-2 py-2'>SUPPORT <MdOutlineArrowDropDown style={{ fontSize: '20px' }} /></li>
                    <ul className='flex flex-col px-7 text-sm gap-3'>
                        <li>SUPPORT CENTER</li>
                        <li>REGISTER A PRODUCT</li>
                        <li>CREATE LOGI ID</li>
                    </ul>
                    {session && <div className="flex gap-3 items-center">
                        <button className='text-sm bg-gray-100 px-3 py-3 rounded-lg font-bold'>{session.user.email}</button>
                            <button onClick={() => { signOut() }} className='text-sm bg-gray-100 px-3 py-3 rounded-lg font-bold'> Logout</button>
                    </div>}

                    {!session && <Link href="/Login" target='_blank'> <button className='flex justify-center gap-4 pt-4 items-center rounded-lg hover:bg-gray-100 hover:font-bold transition-all duration-200 ease-in'> MY ACCOUNT <FaRegUser style={{ fontSize: '18px' }} /></button> </Link>}
                </ul>}
            </nav>
        </>
    )
}

export default Navbar
