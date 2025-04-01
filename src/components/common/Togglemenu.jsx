import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Togglemenu = (props) => {
    const{toggleMenu, isMenuOpen}=props

  return (
    <>
    {isMenuOpen && <div className='container-xl overflow-x-hidden bg-[white] z-50 transition duration-500 ease-in-out lg:hidden pb-16 ' >
        <div className='container-xl  flex flex-col justify-center items-center mx-auto'>
          <ul className=' flex flex-col w-full  font-semibold '>
            <li className=' font-Roboto  group'>
              <div className='border-b border-gray-200 py-2'>
                <Link to="#" className=' block' onClick={toggleMenu}>Home
                </Link>
              </div>

            </li>

            <li className=' font-Roboto  group'>
              <div className='border-b border-gray-200 py-2'>
                <button className='w-full flex justify-between' >Document<RiArrowDropDownLine className='group-hover:rotate-180' />
                </button>
              </div>
              <div className='font-normal group-hover:block hidden'>
                <ul className='px-2'>
                  <li className='py-2'><Link to="#" className='block' onClick={toggleMenu}>link1</Link></li>


                </ul>
              </div>
            </li>

            <li className=' font-Roboto  group'>
              <div className='border-b border-gray-200 py-2'>
                <button className='w-full flex justify-between'>Employee<RiArrowDropDownLine className='group-hover:rotate-180' />
                </button>
              </div>
              <div className='font-normal group-hover:block hidden'>
                <ul className='px-2'>
                  <li className='py-2'><Link to="#" className='block' onClick={toggleMenu}>link1</Link></li>

                </ul>
              </div>
            </li>
            <li className=' font-Roboto  group'>
              <div className='border-b border-gray-200 py-2'>
                <button className='w-full flex justify-between'>Settings<RiArrowDropDownLine className='group-hover:rotate-180' />
                </button>
              </div>
              <div className='font-normal group-hover:block hidden'>
                <ul className='px-2'>
                  <li className='py-2'><Link to="#" className='block' onClick={toggleMenu}>link1</Link></li>

                </ul>
              </div>
            </li>
            <li className=' font-Roboto  group'>
              <div className='border-b border-gray-200 py-2'>
                <button className='w-full flex justify-between'>Timesheet<RiArrowDropDownLine className='group-hover:rotate-180' />
                </button>
              </div>
              <div className='font-normal group-hover:block hidden'>
                <ul className='px-2'>
                  <li className='py-2'><Link to="#" className='block' onClick={toggleMenu}>link1</Link></li>


                </ul>
              </div>
            </li>
            <li className=' font-Roboto  group'>
              <div className='border-b border-gray-200 py-2'>
                <Link to="#" className='block' onClick={toggleMenu}>To-Do
                </Link>
              </div>

            </li>
          </ul>

        </div>
      </div>}
      </>
  )
}

export default Togglemenu