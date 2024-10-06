import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-[white]'>
      <nav className="w-[90%] items-center mx-auto content-center grid grid-cols-8 shadow-sm relative">
        <div className="md:col-span-1 col-span-3">
          <img src="images/black_logo.png" alt="logo" className='lg:w-[142px] lg:h-[66px] md:w-[130px] w-[90px] md:mt-[10px]' />
        </div>
        <div className="md:col-span-4 md:block hidden">
          <ul className='flex gap-3 lg:gap-6 md:gap-3 xl:gap-8 md:ps-3 lg:ps-6 xl:ps-12 text-[gray] font-Roboto text-nowrap lg:text-[16px] xl:text-[18px] text-[14px]'>
            <li>Home</li>
            <li>Document</li>
            <li>Employee</li>
            <li>Setting</li>
            <li>Timesheet</li>
            <li>To-Do</li>
          </ul>
        </div>
        <div className="md:col-span-3 col-span-5 flex justify-end items-center gap-2">
          <div className='flex gap-1'>
            <div className='md:block hidden'>
              <div className='flex flex-col items-end font-Roboto leading-snug '>
                <p className='md:text-[12px] lg:text-[14px] font-semibold '>Mrs.Naveen Goyat</p>
                <span className='italic md:text-[8px] lg:text-[10px] text-[rgb(128,128,128)]'> (Programmer Analyst)</span>
                <p className='md:text-[10px] lg:text-[12px]'><span className='text-[green]'>(Running)</span> Gradka App</p>
              </div>
            </div>
            <img src="images/profileimage.png" alt="profile" className='lg:w-[40px] xl:w-[48px] w-[35px]  flex img-fluid rounded-md' />
          </div>
          <button type='button' className='text-white bg-[#D7255A] rounded-3xl text-nowrap px-3 py-1 md:text-[14px] lg:text-[16px] xl:text-[18px] text-[12px]'>Log out</button>
          <button type='button' className='md:hidden' onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-[20px]" />
            ) : (
              <FiMenu className="text-[20px]" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className='w-full bg-[white] transition-all duration-300 ease-in-out' style={{ display: isMenuOpen ? 'block' : 'none' }}>
        <div className='w-[90%] min-h-[30vh] flex items-center mx-auto'> 
          <ul className='font-Roboto flex flex-col gap-2 text-[12px]'>
            <li>Home</li>
            <li>Document</li>
            <li>Employee</li>
            <li>Setting</li>
            <li>Timesheet</li>
            <li>To-Do</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
