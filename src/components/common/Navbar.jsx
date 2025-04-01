import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/users/authSlice';
import { useDispatch } from 'react-redux';
import Togglemenu from './Togglemenu';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();



  useEffect(() => {
    // Function to update menu state based on screen size
    const handleResize = () => {
      // Check if screen width is greater than medium (e.g., 768px)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate('/sign_in')
    localStorage.clear()
  }

  return (
    <header ref={headerRef} className={`bg-[white] xl:px-12 px-3 font-sans ${isHeaderFixed ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <nav className="container-xl items-center mx-auto flex justify-between relative ">
        <div className="">
          <Link><img src="images/black_logo.png" alt="logo" className='lg:w-[142px] lg:h-[66px] md:w-[130px] w-[90px] md:mt-[10px]' /></Link>
        </div>
        <div className="md:flex hidden ">
          <ul className='flex lg:gap-7 gap-3    text-[gray] text-nowrap cursor-pointer'>
            <li className='hover:text-[#d7253d] '><Link to="/">Home</Link></li>
            <li className="relative hover:text-[#d7253d] group">
              <button className="flex items-center" >
                Document

                <svg className="ml-2" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0.5L5 5L0.5 0.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
              <div className='absolute top-full left-0 w-45 h-auto  text-sm cursor-pointer hidden group-hover:block z-20'>
                <div className='bg-white shadow-xl'>
                  <ul className='text-xs' >
                    <Link to='/ci_document'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">CI Document</li></Link>
                    <Link to='/department_document'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Department Document</li></Link>

                  </ul>
                </div>

              </div>
            </li>
            <li className="relative group hover:text-[#d7253d]">
              <button className="flex items-center">
                Employee
                <svg
                  className="ml-2"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0.5L5 5L0.5 0.5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-48 text-sm cursor-pointer hidden group-hover:block group-hover:group z-20">
                <div className="bg-white shadow-xl">
                  <ul className='text-xs'>
                    <Link to='/investment_details'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Investment Details</li></Link>
                    <Link to='/vaccination'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Vaccination Status</li></Link>
                    <Link to='/managestudy_center'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Manage Study Center</li></Link>
                    <Link to='/searchstudy_center'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Search Study Center</li></Link>
                    <Link to='/mykra'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Your KRA</li></Link>
                    <Link to='/leave'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Apply For Leave</li></Link>
                    <Link to='/attendance'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Attendance</li></Link>
                    <Link to='/official_leave'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Holiday Calendar</li></Link>
                    <Link to='/lessonlearn'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Lessons Learned</li></Link>
                    <Link to='/minutesofmeeting'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Minutes of Meeting</li></Link>
                    <Link to='/nclogs'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">NC Log</li></Link>
                    <Link to='/selfdeclaration'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Self Declaration</li></Link>
                    <Link to='/wfh'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Work From Home</li></Link>
                  </ul>
                </div>
              </div>
            </li>


            <li className="relative hover:text-[#d7253d] group">
              <button className="flex items-center" >
                Setting

                <svg className="ml-2" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0.5L5 5L0.5 0.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
              <div className='absolute top-full left-0 w-45  text-sm cursor-pointer hidden group-hover:block z-20'>
                <div className='bg-white shadow-xl'>
                  <ul className='text-xs' >
                    <Link to='/change_password'> <li className="p-2 hover:bg-gray-100 border-b border-gray-100">Change Password</li></Link>
                    <Link to='/professional_profile'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Professional Profile</li></Link>
                    <Link to='/profile'> <li className="p-2 hover:bg-gray-100 border-b border-gray-100">Profile</li></Link>

                  </ul>
                </div>

              </div>
            </li>
            <li className="relative hover:text-[#d7253d] group">
              <button className="flex items-center" >
                Timesheet

                <svg className="ml-2" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 0.5L5 5L0.5 0.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
              <div className='absolute top-full left-0 w-45  text-sm cursor-pointer hidden group-hover:block z-20'>
                <div className='bg-white shadow-xl '>
                  <ul className='text-xs' >
                    <Link to='/timesheet'><li className="p-2 hover:bg-gray-100 border-b border-gray-100">Your Timesheet</li></Link>

                  </ul>
                </div>

              </div>
            </li>
            <li className='hover:text-[#d7253d]'><Link to='/tasks'>To-Do</Link></li>
          </ul>
        </div>
        <div className=" flex justify-end items-center gap-2">
          <div className='flex gap-1'>
            <div className='lg:block hidden'>
              <div className='flex flex-col items-end font-Roboto leading-snug '>
                <p className='md:text-[12px] lg:text-[14px] font-semibold '>Mrs.Naveen Goyat</p>
                <span className='italic md:text-[8px] lg:text-[10px] text-[rgb(128,128,128)]'> (Programmer Analyst)</span>
                <p className='md:text-[10px] lg:text-[12px]'><span className='text-[green]'>(Running)</span> Gradka App</p>
              </div>
            </div>
            <img src="images/profileimage.png" alt="profile" className='lg:w-[40px] xl:w-[48px] w-[35px]  flex img-fluid rounded-md' />
          </div>
          <button type='button' className='text-white font-Roboto bg-[#D7255A] rounded-3xl text-nowrap px-3 py-1 md:text-[14px] lg:text-[16px] text-[12px] hover:bg-[#cb0802]' onClick={handleLogout}>Log out</button>
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
      <Togglemenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>

    </header>
  );
};

export default Header;
