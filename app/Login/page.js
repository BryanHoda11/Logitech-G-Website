"use client"
import React from 'react'

import { MdOutlineArrowRight } from "react-icons/md";
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

const Login = () => {
    const { data: session } = useSession()
    
    if (session) {
        const router = useRouter()
        router.push('/')
    }
    
    return (
        <>
            <div className="intro w-full min-h-[0px] h-[514px] relative overflow-hidden"> 
                <img className='h-[514px] scale-125' src="/Login_images/login-banner.png" alt="login-banner" />
                <div className="account flex flex-col w-full md:w-auto items-center absolute top-[40%] md:left-[40%] justify-center text-white">
                    <h2 className='text-3xl sm:text-4xl font-bold'>MY ACCOUNT</h2>
                    <div className="buttons pt-7 w-full md:w-auto flex flex-col md:flex-row items-center gap-5">
                        <button onClick={() => { signIn("github") }} className="bg-white w-[90%] sm:w-[80%] md:w-auto text-slate-800 py-4 px-6 font-bold rounded-lg hover:text-blue-500 transition-all duration-200 ease-in cursor-pointer">LOGIN</button>
                        <button className="bg-gray-400 w-[90%] sm:w-[80%] md:w-auto opacity-60 cursor-default text-slate-800 py-4 px-8 font-bold rounded-lg">CREATE AN ACCOUNT</button>
                    </div>
                </div>
            </div>

            <div className='bg-white min-h-[500px] text-black mt-16 mb-10'>
                <div className="flex flex-wrap items-baseline justify-center gap-5">
                    <div className="flex flex-col items-center gap-4 my-6 xl:my-0">
                        <h3 className='text-3xl font-bold pb-2'>ACCOUNT</h3>
                        <p className='w-[70%] text-center'>Edit your personal information and change your password.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">PROFILE <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">PRIVACY + DATA <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">LOGIN + SECURITY <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>

                    <div className="flex flex-col items-center gap-4 my-6 xl:my-0">
                        <h3 className='text-3xl font-bold pb-2'>MY PRODUCTS</h3>
                        <p className='w-[70%] text-center'>Register your product and find all the information you need to get started.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">REGISTER A PRODUCT <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">DOWNLOADS <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>

                    <div className="flex flex-col items-center gap-4 my-6 xl:my-0">
                        <h3 className='text-3xl font-bold pb-2'>SUPPORT</h3>
                        <p className='w-[70%] text-center'>Have questions about your product? We've got answers.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">GET SUPPORT <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">SPARE PARTS <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>

                    <div className="flex flex-col items-center gap-4 my-6 xl:my-0">
                        <h3 className='text-3xl font-bold pb-2'>EMAIL</h3>
                        <p className='w-[70%] text-center'>Stay up to date with Logitech G through our newsletter subscription.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">EMAIL PREFERENCES <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>

                    <div className="flex flex-col items-center gap-4 my-6 xl:my-0">
                        <h3 className='text-3xl font-bold pb-2'>JUST FOR YOU</h3>
                        <p className='w-[70%] text-center'>Get more information about our top selling products.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">BEST SELLING PRODUCTS <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>
                </div>

                {/* <div className="row-2 flex items-baseline my-5">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className='text-3xl font-bold pb-2'>EMAIL</h3>
                        <p className='w-[70%] text-center'>Stay up to date with Logitech G through our newsletter subscription.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">EMAIL PREFERENCES <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className='text-3xl font-bold pb-2'>JUST FOR YOU</h3>
                        <p className='w-[70%] text-center'>Get more information about our top selling products.</p>
                        <h4 className="text-md font-bold hover:underline cursor-pointer flex items-center transition-all duration-500 ease-in">BEST SELLING PRODUCTS <MdOutlineArrowRight className='text-blue-500' style={{ fontSize: '30px' }} /></h4>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Login
