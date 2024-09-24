import React from 'react'

const GHub = () => {
    return (
        <>
            <div className="g-hub w-full relative">
                <video src="/G-hub_images/g-hub.mp4" autoPlay muted loop></video>
                <div className="info flex flex-col gap-3 justify-center items-center text-white absolute top-[40%] right-[32%]">
                    <h3 className='font-bold text-lg'>TOTAL GEAR CONTROL</h3>
                    <h1 className='font-bold text-6xl'>LOGITECH G HUB</h1>
                    <div className="buttons pt-7 flex flex-row items-center gap-5">
                        <button className="bg-blue-400 text-slate-800 py-4 px-8 font-bold rounded-lg hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-300 transition-all duration-100 ease-in cursor-pointer">DOWNLOAD FOR WINDOWS</button>
                        <button className="bg-blue-400 text-slate-800 py-4 px-8 font-bold rounded-lg hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-300 transition-all duration-100 ease-in cursor-pointer">DOWNLOAD FOR MAC OS</button>
                    </div>
                </div>
            </div>

            <div className="ghub-tricks w-full relative">
                <video src="/G-hub_images/ghub-tips.mp4" autoPlay muted controls></video>
                <div className="text-white absolute bottom-[6%] right-[35%]">
                    <h1 className='font-bold text-4xl'>G HUB TIPS & TRICKS</h1>
                </div>
            </div>

            <div className="ecosystem w-full relative">
                <video src="/G-hub_images/ecosystem.mp4" autoPlay muted loop></video>
                <div className="info w-[27%] hidden lg:flex flex-col gap-6 px-5 justify-center text-white absolute right-[8%] top-[35%]">
                    <h3 className='font-bold text-3xl'>OPTIMUM GEAR ECOSYSTEM</h3>
                    <hr className='w-[25%] h-[7px] bg-gray-200 border-none' />
                    <p>Logitech G HUB gives you a single portal for optimizing and customizing all your supported Logitech G gear: mice, keyboards, headsets, speakers, and webcams.</p>
                </div>
            </div>

            <div className='bg-[#2f3132] min-h-screen px-10 py-14'>

                <div className="mice flex items-center justify-around gap-10 pb-16">
                    <img src="G-hub_images/ghub-panel1.png" alt="panel-1" />
                    <div className="info w-[30%] flex flex-col gap-6 px-5 justify-center text-white">
                        <h3 className='font-bold text-3xl'>MICE</h3>
                        <hr className='w-[25%] h-[7px] bg-[#697172] border-none' />
                        <p className='text-[#c3c6c8] pt-8'>Configure your mouse, including the optical sensor, DPI settings, scroll and acceleration, button programming, and onboard memory. Program LIGHTSYNC.</p>
                    </div>
                </div>

                <div className="keyboard flex items-center justify-around gap-10 py-16">
                    <div className="info w-[30%] flex flex-col gap-6 px-5 justify-center text-white">
                        <h3 className='font-bold text-3xl'>KEYBOARDS</h3>
                        <hr className='w-[25%] h-[7px] bg-[#697172] border-none' />
                        <p className='text-[#c3c6c8] pt-8'>Set up your keyboard with macro-ready G Keys, remap individual keys, configure multi-key bindings, or create intricate macros. Program LIGHTSYNC.</p>
                    </div>
                    <img src="G-hub_images/ghub-panel2.png" alt="panel-2" />
                </div>

                <div className="headsets flex items-center justify-around gap-10 pb-16">
                    <img src="G-hub_images/ghub-panel3.png" alt="panel-3" />
                    <div className="info w-[30%] flex flex-col gap-6 px-5 justify-center text-white">
                        <h3 className='font-bold text-3xl'>HEADSETS & SPEAKERS</h3>
                        <hr className='w-[25%] h-[7px] bg-[#697172] border-none' />
                        <p className='text-[#c3c6c8] pt-8'>Set custom EQ and surround preferences, per game profile. Assign headset-mounted G Keys for faster, more precise play. Program LIGHTSYNC audio gear.</p>
                    </div>
                </div>

                <div className="webcam flex items-center justify-around gap-10 pt-16">
                    <div className="info w-[30%] flex flex-col gap-6 px-5 justify-center text-white">
                        <h3 className='font-bold text-3xl'>WEBCAMS</h3>
                        <hr className='w-[25%] h-[7px] bg-[#697172] border-none' />
                        <p className='text-[#c3c6c8] pt-8'>Create camera and video profiles. Settings are stored and applied on startup. Switch profiles on the fly.</p>
                    </div>
                    <img src="G-hub_images/ghub-panel4.png" alt="panel-4" />
                </div>
            </div>

            <div className="get-to-know min-h-screen text-white px-10 py-14 bg-[#1e1e1e]">
                <h2 className='text-center font-bold text-4xl py-14'>GET TO KNOW G HUB</h2>

                <div className="flex items-baseline justify-around gap-7 pt-16">
                    <div className="card flex flex-col items-center gap-3 px-5 min-h-[300px] w-[25%] bg-[#262626]">
                        <img src="G-hub_images/ghub-icon-1.png" alt="icon-1" />
                        <h3 className='text-center font-bold text-xl'>RECOGNIZES GEAR AUTOMATICALLY</h3>
                        <p className='text-center pb-12'>G HUB recognizes your supported Logitech G gear, and gives you full access to their customization features. It automatically keeps firmware up to date.</p>
                    </div>

                    <div className="card flex flex-col items-center gap-3 px-5 min-h-[300px] w-[25%] bg-[#262626]">
                        <img src="G-hub_images/ghub-icon-2.png" alt="icon-2" />
                        <h3 className='text-center font-bold text-xl'>DRAG AND DROP INTERFACE</h3>
                        <p className='text-center pb-12'>Choose features, assign macros and key binding, create color breaks and animations, all with a simple, intuitive interface.</p>
                    </div>

                    <div className="card flex flex-col items-center gap-3 px-6 min-h-[300px] w-[25%] bg-[#262626]">
                        <img src="G-hub_images/ghub-icon-3.png" alt="icon-3" />
                        <h3 className='text-center font-bold text-xl'>MANAGE AND SWITCH PROFILES</h3>
                        <p className='text-center pb-12'>Now you can save multiple character profiles within your games and switch on the fly. So the powers and abilities you need are always available.</p>
                    </div>
                </div>
            </div>

            <div className="video-banner w-full relative">
                <video src="/G-hub_images/video-banner.mp4" muted loop autoPlay></video>
                <div className="info w-[27%] flex flex-col gap-6 px-5 justify-center text-white absolute left-[10%] top-[38%]">
                    <h3 className='font-bold text-3xl'>CONFIGURE. SHARE. WIN.</h3>
                    <hr className='w-[25%] h-[7px] bg-gray-200 border-none' />
                    <p>Download profiles from your fellow players, gaming pros and popular streamers. It’s an easy way to try new mouse, keybind, and macros to enhance your game.</p>
                </div>
            </div>

            <div className="stream-banner w-full relative">
                <img src="G-hub_images/stream-banner.png" alt="stream-banner" />
                <div className="info w-[27%] flex flex-col gap-6 px-5 justify-center text-white absolute right-[10%] top-[38%]">
                    <h3 className='font-bold text-3xl'>CONTROL YOUR STREAM</h3>
                    <hr className='w-[25%] h-[7px] bg-gray-200 border-none' />
                    <p>Program buttons with in-app actions and create your own macros to launch media and switch scenes. Use your gaming gear to take command of OBS Studio for a faster and more seamless stream.</p>
                </div>
            </div>

            <div className="colorize w-full relative mb-7">
                <img src="G-hub_images/colorize.png" alt="colorize" />
                <div className="info w-[28%] flex flex-col gap-6 px-5 justify-center text-white absolute left-[10%] top-[38%]">
                    <h3 className='font-bold text-3xl'>COLORIZE AND SYNC YOUR GEAR</h3>
                    <hr className='w-[25%] h-[7px] bg-gray-200 border-none' />
                    <p>Choose from numerous animation effects, download lighting profiles from the community, and create your own advanced effects with Logitech G LIGHTSYNC for keyboards, mice, headsets, and speakers.</p>
                </div>
            </div>

        </>
    )
}

export default GHub
