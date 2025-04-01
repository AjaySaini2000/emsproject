import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Select from 'react-select';

const Topnav = (props) => {
    const{isMenuOpen,toggleMenu,handleProfile,profileBox}=props
    const [selectedOption, setSelectedOption] = useState(null);
    
    const options = [
        { value: 'Super_admin', label: 'Super_admin' },
        { value: 'logout', label: 'Logout' },
        
      ];

      const handleChange = (option) => {
        setSelectedOption(option);
        console.log(option);
      };

  return (
    <div className={`${isMenuOpen ? 'md:left-[256px] left-[193px]' : 'left-0'} top-nav fixed top-0 right-0 z-20 p-3 bg-white flex justify-between gap-3 items-center mb-3 shadow-md`}>
                <div className='flex gap-3'>
                    <div className='flex items-center'>
                        <button type='button'>
                            {isMenuOpen ? <MdClose onClick={toggleMenu} /> : <FiMenu onClick={toggleMenu} />}
                        </button>
                    </div>
                    <div>
                        <form action="" method="post" className=''>

                            <div
                                className="relative  rounded-lg  focus-within:shadow-md" 
                                tabIndex="0"
                            >

                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className="p-1 pr-20 w-full bg-slate-200 focus:outline-none sm:text-sm sm:leading-6 rounded-lg "
                                    placeholder="Search"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center ">
                                    <button className='p-1 bg-red-400 hover:bg-red-500 text-white rounded-e-lg'>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='flex gap-3 items-center relative'>
                    <div className='w-8 h-8 rounded-full bg-slate-400'><img src="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406_1280.png" alt="" /></div>
                    {/* <div onClick={handleProfile}>Ajay</div> */}
                    <Select 
      options={options} 
      value={selectedOption} 
      onChange={handleChange} 
    //   placeholder="Select a flavor"
    />
                    {/* <div className={`${profileBox ? 'block bg-white  absolute top-10 right-0 shadow-xl w-full' : 'hidden'} `}>
                       
                    </div> */}
                </div>

            </div>
  )
}

export default Topnav