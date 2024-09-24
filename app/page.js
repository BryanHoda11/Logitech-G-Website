"use client"

import React, { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const gamingGear = [
  {
    name: 'GAMING MICE',
    img: '/images/gamingmouse.png',
  },
  {
    name: 'GAMING MOUSE PADS',
    img: '/images/gamingmousepad.png',
  },
  {
    name: 'GAMING KEYBOARDS',
    img: '/images/gamingkeyboard.png',
  },
  {
    name: 'GAMING AUDIO',
    img: '/images/gamingaudio.png',
  },
  {
    name: 'STREAMING GEAR',
    img: '/images/gamingstream.png',
  },
  {
    name: 'DRIVING',
    img: '/images/gamingdrive.png',
  },
  {
    name: 'FLIGHT',
    img: '/images/gamingflight.png',
  },
  {
    name: 'GAMEPADS',
    img: '/images/gaminggamepad.png',
  }, 
]

const banner = [
  {
    img: '/images/banner1.png',
    content: <div className="flex flex-col gap-4 items-center text-white w-[35%] absolute bottom-[35%] right-[30%]">
      <h2 className="font-bold text-2xl sm:text-3xl">THERE'S LEVELS TO PLAY</h2>
      <p className="w-[60%] sm:w-full text-md text-center text-gray-200">We all play. In our way. For our own reasons. And that's what makes this community we have built together so amazing. More than levels in games, there's levels to all of us. And where we go next, is up to us.</p>
      <button className="w-[40%] bg-blue-400 text-slate-800 py-4 font-bold rounded-md hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-300 mt-3 transition-all duration-200 ease-in cursor-pointer">WATCH THE FILM</button>
    </div>
  },
  {
    img: '/images/banner2.png',
    content: <div className="flex flex-col gap-4 text-white w-[40%] absolute bottom-[40%] left-[15%]">
      <p className="text-2xl text-gray-200 w-[85%]">"It helps me as precise and confident as I need to be so we can win. I used to think wireless was too slow for gaming, but now I am on the world stage completely confident in the performance of my Logitech G LIGHTSPEED wireless mouse."</p>
      <div className="flex items-center gap-2 pt-4">
        <img className="w-14 h-14" src="/images/bjergsensymbol.png" alt="bjergsen" />
        <h3 className="font-bold text-2xl">BJERGSEN</h3>
      </div>
    </div>
  },
]

const bannerTablet = [
  {
    img: '/images/banner1-tablet.png',
    content: <div className="flex flex-col gap-4 items-center text-white w-[75%] absolute bottom-[35%] right-[10%]">
      <h2 className="font-bold text-2xl sm:text-3xl">THERE'S LEVELS TO PLAY</h2>
      <p className="w-[60%] sm:w-full text-md text-center text-gray-200">We all play. In our way. For our own reasons. And that's what makes this community we have built together so amazing. More than levels in games, there's levels to all of us. And where we go next, is up to us.</p>
      <button className="w-[40%] bg-blue-400 text-slate-800 py-4 font-bold rounded-md hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-300 mt-3 transition-all duration-200 ease-in cursor-pointer">WATCH THE FILM</button>
    </div>
  },
  {
    img: '/images/banner2-tablet.png',
    content: <div className="flex flex-col gap-4 text-white w-full absolute top-[10%] left-[10%]">
      <p className="text-xl text-gray-200 w-[85%]">"It helps me as precise and confident as I need to be so we can win. I used to think wireless was too slow for gaming, but now I am on the world stage completely confident in the performance of my Logitech G LIGHTSPEED wireless mouse."</p>
      <div className="flex items-center gap-2 pt-4">
        <img className="w-10 h-10" src="/images/bjergsensymbol.png" alt="bjergsen" />
        <h3 className="font-bold text-xl">BJERGSEN</h3>
      </div>
    </div>
  }
]

const bannerPhone = [
  {
    img: '/images/banner1-phone.png',
    content: <div className="flex flex-col gap-4 items-center text-white w-full absolute bottom-[5%] right-0" >
      <h2 className="font-bold text-2xl">THERE'S LEVELS TO PLAY</h2>
      <p className="w-[80%] text-xs text-center text-gray-200">We all play. In our way. For our own reasons. And that's what makes this community we have built together so amazing. More than levels in games, there's levels to all of us. And where we go next, is up to us.</p>
      <button className="px-3 bg-blue-400 text-slate-800 py-2 font-bold rounded-md hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-300 mt-3 text-sm transition-all duration-200 ease-in cursor-pointer">WATCH THE FILM</button>
    </div>
  },
  {
    img: '/images/banner2-phone.png',
    content: <div className="flex flex-col gap-4 text-white w-full absolute top-[5%] left-[10%]">
      <p className="text-lg text-gray-200 w-[85%]">"It helps me as precise and confident as I need to be so we can win. I used to think wireless was too slow for gaming, but now I am on the world stage completely confident in the performance of my Logitech G LIGHTSPEED wireless mouse."</p>
      <div className="flex items-center gap-2 pt-4">
        <img className="w-10 h-10" src="/images/bjergsensymbol.png" alt="bjergsen" />
        <h3 className="font-bold text-lg">BJERGSEN</h3>
      </div>
    </div>
  }
]

export default function Home() {
  const [Index, setIndex] = useState(0);
  const [Bannerindex, setBannerindex] = useState(0);
  const [BannerTabletindex, setBannerTabletindex] = useState(0);
  const [BannerPhoneindex, setBannerPhoneindex] = useState(0);

  const handleNext = () => {
    if (Index + 4 < gamingGear.length) {
      setIndex(Index + 4);
    }
    else {
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    if (Index > 0) {
      setIndex(Index - 4);
    }
    else {
      setIndex(gamingGear.length - 4);
    }
  };

  const handleBannerNext = () => {
    if (Bannerindex + 1 < banner.length) {
      setBannerindex(Bannerindex + 1);
    }
    else {
      setBannerindex(0);
    }
  };

  const handleBannerPrevious = () => {
    if (Bannerindex > 0) {
      setBannerindex(Bannerindex - 1);
    }
    else {
      setBannerindex(banner.length - 1);
    }
  };

  const handleBannerTabletNext = () => {
    if (BannerTabletindex + 1 < banner.length) {
      setBannerTabletindex(BannerTabletindex + 1);
    }
    else {
      setBannerTabletindex(0);
    }
  };

  const handleBannerTabletPrevious = () => {
    if (BannerTabletindex > 0) {
      setBannerTabletindex(BannerTabletindex - 1);
    }
    else {
      setBannerTabletindex(bannerTablet.length - 1);
    }
  };

  const handleBannerPhoneNext = () => {
    if (BannerPhoneindex + 1 < bannerPhone.length) {
      setBannerPhoneindex(BannerPhoneindex + 1);
    }
    else {
      setBannerPhoneindex(0);
    }
  };

  const handleBannerPhonePrevious = () => {
    if (BannerPhoneindex > 0) {
      setBannerPhoneindex(BannerPhoneindex - 1);
    }
    else {
      setBannerPhoneindex(bannerPhone.length - 1);
    }
  };


  return (
    <>
      <div className="banner w-full relative">
        <div className="info hidden lg:flex flex-col gap-5 items-baseline absolute right-[7%] top-[40%] w-[20%] text-white">
          <div>
            <h2 className="text-5xl font-bold">G309</h2>
            <h2 className="text-5xl font-bold">LIGHTSPEED</h2>
          </div>

          <p>An advanced gaming mouse with LIGHTSPEED and Bluetooth® dual-wireless connectivity, LIGHTFORCE hybrid switches, HERO 25K precision tracking, and reliable construction—made available for all.</p>

          <button className="w-[85%] bg-blue-400 text-slate-800 py-4 font-bold rounded-lg hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-300 transition-all duration-200 ease-in cursor-pointer">SHOP G309 LIGHTSPEED</button>
        </div>
        <img className="" src="/images/introbanner.png" alt="introbanner" />
      </div>

      <div className="min-h-screen">

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-3 px-0 lg:px-7 my-12">
          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2">
            <img className="w-[90%] h-[60%] cursor-pointer hover:scale-95 transition-all duration-300 ease-in" src="/images/logiplay.png" alt="logiplay" />
            <h2 className="cursor-pointer hover:underline text-xl font-bold">DISCOVER NEW WAYS TO PLAY</h2>
            <p className="w-[85%] text-md text-center lg:text-start">Get ready to #LOGIPLAY. Tune in on September 17 to celebrate the Gaming & Streaming community with an unforgettable and exclusive event dedicated to the wonderful world of PLAY.</p>
            <h3 className="text-blue-500 pt-2 font-bold hover:underline cursor-pointer flex items-center hover:gap-2 transition-all duration-500 ease-in">DON'T MISS THE LIVE EVENT <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2">
            <img className="w-[90%] h-[60%] cursor-pointer hover:scale-95 transition-all duration-300 ease-in" src="/images/G502mouse.png" alt="G502Mouse" />
            <h2 className="cursor-pointer hover:underline text-xl font-bold">ICON. REINVENTED</h2>
            <p className="w-full text-md text-center lg:text-start">The G502 X Line. Legendary G502 design reinvented with breakthrough gaming technology.</p>
            <h3 className="text-blue-500 pt-2 font-bold hover:underline cursor-pointer flex items-center hover:gap-2 transition-all duration-500 ease-in">MEET G502 X LINE <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2">
            <img className="w-[90%] h-[60%] cursor-pointer hover:scale-95 transition-all duration-300 ease-in" src="/images/prograde.png" alt="Pro-grade" />
            <h2 className="cursor-pointer hover:underline text-xl font-bold">STRESS FREE WITH PRO-GRADE</h2>
            <p className="w-[85%] text-md text-center lg:text-start">Incredible speed. Insane precision. Designed with and for pros.</p>
            <h3 className="text-blue-500 pt-2 font-bold hover:underline cursor-pointer flex items-center hover:gap-2 transition-all duration-500 ease-in">SHOP PRO SERIES <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
          </div>
        </div>

        <h2 className="text-center text-4xl my-4 font-bold">SHOP OUR SERIES</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-3 px-0 lg:px-7 my-12">
          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2">
            <img className="w-[90%] h-[60%] cursor-pointer hover:scale-95 transition-all duration-300 ease-in" src="/images/proseries1.png" alt="logiplay" />
            <h2 className="cursor-pointer hover:underline text-xl font-bold">PRO SERIES</h2>
            <p className="w-[85%] text-md text-center lg:text-start">Zero distractions. Nothing between you and the win.</p>
            <h3 className="text-blue-500 pt-2 font-bold hover:underline cursor-pointer flex items-center hover:gap-2 transition-all duration-500 ease-in">SHOP PRO SERIES <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2">
            <img className="w-[90%] h-[60%] cursor-pointer hover:scale-95 transition-all duration-300 ease-in" src="/images/proseries2.png" alt="G502Mouse" />
            <h2 className="cursor-pointer hover:underline text-xl font-bold">ASTRO SERIES</h2>
            <p className="w-full text-md text-center lg:text-start">On-trend, high-end console headsets. Play in style/control.</p>
            <h3 className="text-blue-500 pt-2 font-bold hover:underline cursor-pointer flex items-center hover:gap-2 transition-all duration-500 ease-in">SHOP ASTRO SERIES <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2">
            <img className="w-[90%] h-[60%] cursor-pointer hover:scale-95 transition-all duration-300 ease-in" src="/images/proseries3.png" alt="Pro-grade" />
            <h2 className="cursor-pointer hover:underline text-xl font-bold">GAME, STREAM AND CREATE</h2>
            <p className="w-[85%] text-md text-center lg:text-start">Select from these essential game streamer and creator items and be seen and heard with authority.</p>
            <h3 className="text-blue-500 pt-2 font-bold hover:underline cursor-pointer flex items-center hover:gap-2 transition-all duration-500 ease-in">COMPLETE YOUR STUDIO <MdOutlineArrowRight style={{ fontSize: '30px' }} /></h3>
          </div>
        </div>

      </div>

      <div className="gaming-gear mt-12 mb-6">
        <h2 className="text-center text-2xl md:text-4xl font-bold">ADVANCED GAMING GEAR</h2>
        <p className="text-md text-center opacity-70 py-4">Play at your peak with the highest performance gaming equipment from Logitech G.</p>

        <div className="gaming-gear-container hidden lg:flex justify-center items-center my-4 relative">
          <button onClick={handleNext} className="bg-blue-500 text-black flex z-10 items-center justify-center rounded-full h-12 w-12 cursor-pointer absolute right-10 bottom-[50%]"><MdOutlineKeyboardArrowRight style={{ fontSize: '30px' }} /></button>
          {gamingGear.slice(Index, Index + 4).map((g) => (
            <div key={g.name} className="box mx-3 relative h-[300px] w-[300px]">
              <img className="object-contain rounded-lg" src={g.img} alt="" />
              <h3 className="absolute top-[10px] left-[10%] text-white">{g.name}</h3>
            </div>
          ))}
          <button onClick={handlePrevious} className="bg-blue-500 text-black flex z-10 items-center justify-center rounded-full h-12 w-12 cursor-pointer absolute left-10 bottom-[50%]"><MdKeyboardArrowLeft style={{ fontSize: '30px' }} /></button>
        </div>

        <div className="gaming-gear-container flex lg:hidden overflow-x-scroll lg:overflow-hidden my-4 w-full">
          {gamingGear.map((g) => (
            <div key={g.name} className="box mx-3 relative h-auto min-w-[250px]">
              <img className="object-contain rounded-lg" src={g.img} alt="" />
              <h3 className="absolute top-[10px] left-[10%] text-white">{g.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="banners hidden lg:block my-10 mt-28 w-full relative">
        <button onClick={handleBannerPrevious} className="bg-transparent border-2 border-white border-dotted text-white hidden lg:flex z-10 items-center justify-center rounded-full h-16 w-16 cursor-pointer absolute left-10 bottom-[50%]"><MdKeyboardArrowLeft style={{ fontSize: '40px' }} /></button>

        <div className='banner hidden lg:flex relative w-full transition-opacity duration-500 ease-in-out'>
          {banner.slice(Bannerindex, Bannerindex + 1).map((b) => (
            <div key={b.img} className='banner relative w-full flex justify-center items-center sm:block'>
              <img className="hidden lg:block" src={b.img} alt="" />
              <div>{b.content}</div>
            </div>
          ))}
        </div>

        <button onClick={handleBannerNext} className="bg-transparent border-2 border-white border-dotted text-white hidden lg:flex z-10 items-center justify-center rounded-full h-16 w-16 cursor-pointer absolute right-10 bottom-[50%]"><MdOutlineKeyboardArrowRight style={{ fontSize: '40px' }} /></button>
      </div>

      <div className="banners-tablet sm:max-lg:block hidden my-10 mt-28 w-full relative">

        <div className='banner lg:hidden sm:max-lg:flex relative w-full transition-opacity duration-500 ease-in-out'>
          {bannerTablet.slice(BannerTabletindex, BannerTabletindex + 1).map((bt) => (
            <div key={bt.img} className='banner relative w-full flex justify-center items-center sm:block'>
              <img src={bt.img} alt="" />
              <div>{bt.content}</div>
            </div>
          ))}
        </div>
        <div className="buttons flex items-center justify-between px-5 my-3">
          <button onClick={handleBannerTabletPrevious} className="bg-transparent border-2 border-black border-dotted text-black flex items-center justify-center rounded-full h-14 w-14 cursor-pointer"><MdKeyboardArrowLeft style={{ fontSize: '30px' }} /></button>
          <button onClick={handleBannerTabletNext} className="bg-transparent border-2 border-black border-dotted text-black flex items-center justify-center rounded-full h-14 w-14 cursor-pointer"><MdOutlineKeyboardArrowRight style={{ fontSize: '30px' }} /></button>
        </div>
      </div>

      <div className="banners-phone block sm:hidden my-10 mt-28 w-full relative">
        <div className='banner flex sm:hidden relative w-full transition-opacity duration-500 ease-in-out'>
          {bannerPhone.slice(BannerPhoneindex, BannerPhoneindex + 1).map((bp) => (
            <div key={bp.img} className='banner relative w-full flex justify-center items-center sm:block'>
              <img src={bp.img} alt="" />
              <div>{bp.content}</div>
            </div>
          ))}
        </div>
        <div className="buttons flex items-center justify-center gap-12 px-5 my-3"> 
          <button onClick={handleBannerPhonePrevious} className="bg-transparent border-2 border-black border-dotted text-black flex items-center justify-center rounded-full h-14 w-14 cursor-pointer"><MdKeyboardArrowLeft style={{ fontSize: '40px' }} /></button>
          <button onClick={handleBannerPhoneNext} className="bg-transparent border-2 border-black border-dotted text-black flex items-center justify-center rounded-full h-14 w-14 cursor-pointer"><MdOutlineKeyboardArrowRight style={{ fontSize: '40px' }} /></button>
        </div>
      </div>

    </>
  );
}
