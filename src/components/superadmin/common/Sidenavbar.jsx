import React, { useState } from 'react'

const Sidenavbar = (props) => {
const{isMenuOpen , getTabValue,tabValue}=props

  return (
    <div className={`${isMenuOpen ? 'block' :'hidden'} bg-gray-800 md:w-64 w-48 h-screen fixed top-0 left-0 md:z-0 z-20`}>
    <div className='flex items-center justify-center'><img src="/images/black_logo.png" alt="sidenav_logo" className='max-w-32' /></div>
    <nav className=' p-3'>
        <ul className='flex flex-col gap-3'>
            <li className={`${tabValue==="dashboard" ? 'text-white' : 'text-gray-400'} flex gap-3 hover:text-white cursor-pointer`} onClick={()=>{getTabValue("dashboard")}}><span>📊</span>Dashboard</li>
            <li className={`${tabValue==="orglist" || tabValue === "createOrg" ? 'text-white' : 'text-gray-400'} flex gap-3 hover:text-white cursor-pointer`}  onClick={()=>{getTabValue("orglist")}}><span>🏢</span>List of Organization</li>
            <li className={`${tabValue==="subscription" ? 'text-white' : 'text-gray-400'} flex gap-3 hover:text-white cursor-pointer`}  onClick={()=>{getTabValue("subscription")}}><span>🎁</span>Subscription Plans</li>

            {/* <li className='text-gray-400 flex gap-3 hover:text-white' onClick={()=>{getTabValue(4)}}><span>🛒</span>Ecommerce</li>
            <li className='text-gray-400 flex gap-3 hover:text-white' onClick={()=>{getTabValue(5)}}><span>📊</span>Projects</li>
            <li className='text-gray-400 flex gap-3 hover:text-white' onClick={()=>{getTabValue(6)}}><span>📊</span>Organizations</li> */}
        </ul>
    </nav>
</div>
  )
}

export default Sidenavbar