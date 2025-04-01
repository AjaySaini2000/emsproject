import React, { useEffect, useState } from 'react'

import Chart from '../../charts/Chart'
import Sidenavbar from './common/Sidenavbar';
import Topnav from './common/Topnav';
import Dashboard from './Dashboard';
import Organizationslist from './Organizationslist';
import Subscriptionplans from './Subscriptionplans';
import Createorganization from './Createorganization';
// import Createorganization from './Createorganization';
const SuperAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [profileBox, setProfilebox] = useState(false);
    const [tabValue, setTabValue] = useState("dashboard");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleProfile = () => {
        setProfilebox(!profileBox)
    }

    useEffect(() => {
        // Function to update menu state based on screen size
        const handleResize = () => {
            // Check if screen width is greater than medium (e.g., 768px)
            if (window.innerWidth > 768) {
                setIsMenuOpen(true);
            }
            if (window.innerWidth < 768) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTabValue = (val)=>{
        // console.log("tab value", val)
        setTabValue(val)
        
    }

    return (
        <div className=" mx-auto overflow-hidden">
            <div className='flex'>
                <Sidenavbar isMenuOpen={isMenuOpen} getTabValue={getTabValue} tabValue={tabValue}/>
                <div className={`${isMenuOpen && 'md:ml-64'} flex flex-col w-full `}>
                    <Topnav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} handleProfile={handleProfile} profileBox={profileBox} />
                    <div className='mt-16 p-3 main-content'>
                      {tabValue =="dashboard" && <Dashboard/>}
                      {tabValue =="orglist" && <Organizationslist getTabValue={getTabValue}/>}
                      {tabValue =="subscription" && <Subscriptionplans/>}
                      {tabValue =="createOrg" && <Createorganization getTabValue={getTabValue}/>}

                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperAdmin