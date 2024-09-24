"use client"

import React from 'react'
import { SiLogitechg } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-100 min-h-[300px]'>
                <div className="links w-full hidden lg:flex items-baseline justify-around mx-auto px-5 py-5">
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer hover:underline'>ABOUT</li>
                        <li className='cursor-pointer hover:underline'>PRIVACY POLICY</li>
                        <li className='cursor-pointer hover:underline'>TERMS OF USE</li>
                        <li className='cursor-pointer hover:underline'>EMAIL PREFERENCES</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer hover:underline'>CONTACT</li>
                        <li className='cursor-pointer hover:underline'>COOKIES SETTINGS</li>
                        <li className='cursor-pointer hover:underline'>SUSTAINIBILITY</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer hover:underline'>CAREERS</li>
                        <li className='cursor-pointer hover:underline'>SITEMAP</li>
                        <li className='cursor-pointer hover:underline'>RECYCLING</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer hover:underline'>PARTNER DEVELOPER LAB</li>
                        <li className='cursor-pointer hover:underline'>INVESTORS</li>
                        <li className='cursor-pointer hover:underline'>PRESS</li>
                    </ul>
                </div>

                <div className="links w-full flex flex-wrap lg:hidden items-baseline justify-around mx-auto px-5 py-5">
                    <ul className='flex flex-wrap gap-8 items-center text-sm'>
                        <li className='cursor-pointer hover:underline'>ABOUT</li>
                        <li className='cursor-pointer hover:underline'>PRIVACY POLICY</li>
                        <li className='cursor-pointer hover:underline'>TERMS OF USE</li>
                        <li className='cursor-pointer hover:underline'>EMAIL PREFERENCES</li>
                        <li className='cursor-pointer hover:underline'>CONTACT</li>
                        <li className='cursor-pointer hover:underline'>COOKIES SETTINGS</li>
                        <li className='cursor-pointer hover:underline'>SUSTAINIBILITY</li>
                        <li className='cursor-pointer hover:underline'>CAREERS</li>
                        <li className='cursor-pointer hover:underline'>SITEMAP</li>
                        <li className='cursor-pointer hover:underline'>RECYCLING</li>
                        <li className='cursor-pointer hover:underline'>PARTNER DEVELOPER LAB</li>
                        <li className='cursor-pointer hover:underline'>INVESTORS</li>
                        <li className='cursor-pointer hover:underline'>PRESS</li>
                    </ul>
                </div>

                <hr className='border-2 opacity-40 border-black my-4 block lg:hidden h-[1px] w-[85%] mx-auto border-dashed'/>

                <div className="w-full flex flex-col-reverse gap-9 lg:gap-0 lg:flex-row justify-center items-center lg:items-baseline lg:justify-around mx-auto px-5 py-5">
                    <span className='text-xs'> &copy; 2024 Logitech. All rights reserved. </span>

                    <div className="flex flex-col gap-3 items-center w-full lg:w-1/2">
                        <div className="flex items-center">
                            <input className='px-6 py-4 border-none rounded-lg' type="text" name="email" id="email" placeholder='EMAIL ADDRESS' />
                            <button className='bg-neutral-800 text-sm font-bold text-white rounded-lg px-4 py-4'>SUBSCRIBE</button>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <input className='cursor-pointer' type="checkbox" name="check" id="checkbox" />
                            <p className='cursor-pointer text-gray-500 font-bold text-sm'>I want personalized marketing from Logitech G. You can unsubscribe anytime. <br /> See our <span className='underline text-blue-400 hover:no-underline hover:text-blue-600'>Privacy Policy</span>.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <FaFacebook className='hover:text-blue-500 cursor-pointer' style={{ fontSize: '25px' }} />
                        <FaTwitter className='hover:text-blue-500 cursor-pointer' style={{ fontSize: '25px' }} />
                        <FaInstagram className='cursor-pointer hover:text-pink-500' style={{ fontSize: '25px' }} />
                        <FaYoutube className='cursor-pointer hover:text-red-600' style={{ fontSize: '25px' }} />
                        <FaDiscord className='cursor-pointer hover:text-blue-500' style={{ fontSize: '25px' }} />
                    </div>
                </div>

                <div className="logo flex items-center px-6 py-3"> <SiLogitechg style={{ fontSize: '30px' }} /> </div>
            </footer>
        </>
    )
}

export default Footer
