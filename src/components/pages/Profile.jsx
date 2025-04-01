import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import technology from '../../Data.json'
import domain from '../../DomainData.json'

const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const chunkArray2 = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};
const Profile = () => {
    const [imagePreview, setImagePreview] = useState('images/blank-profile-picture-973460_640.webp');
    const [selectedFile, setSelectedFile] = useState(null);

    const { technologies } = technology;
    const { domains } = domain
    const [Domain, setDomain] = useState(domains)
    const [Technology, setTechnology] = useState(technologies)
    const chunkedTechnologies = chunkArray(technologies, 15);
    const chunkedDomains = chunkArray2(domains, 15);
    const [selectedTechnology, setSelectedTechnology] = useState({})
    const [selectedDomains, setSelectedDomains] = useState([])

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)

            const previewUrl = URL.createObjectURL(file)
            setImagePreview(previewUrl)
        }
    }
    const handleTechnology = (e) => {
        const { name, checked } = e.target;
        
        // Create a shallow copy of the selectedTechnology state
        const updateTechnology = { ...selectedTechnology };
    
        if (checked) {
            if (!updateTechnology[name]) {
                updateTechnology[name] = { level: 'Interested' }; 
            }
        } else {
            delete updateTechnology[name];
        }
    
        setSelectedTechnology(updateTechnology);
    
        console.log(updateTechnology);
    };
    
const handleDomains = (e)=>{
    const { name, checked } = e.target;
        
    // Create a shallow copy of the selectedTechnology state
    const updateDomains = [...selectedDomains];

    if (checked) {
        if(!updateDomains.includes(name)){
            updateDomains.push(name)
        }
    } else {
       const filterDomains= updateDomains.filter(item=>item !==name)
       setSelectedDomains(filterDomains);
        console.log(selectedDomains);
        
       return;
    }

    setSelectedDomains(updateDomains);

    console.log(updateDomains);
}

    const handleRadiochange = (e, level) => {
        const { name } = e.target;
    
        const updateTechnology = { ...selectedTechnology };
    
        if (updateTechnology[name]) {
            updateTechnology[name] = { ...updateTechnology[name], level: level }; 
        } else {
            updateTechnology[name] = { level: level }; 
        }
    
        setSelectedTechnology(updateTechnology);
    
        console.log(updateTechnology);
    };
    
    return (
        <>

            <div className='xl:px-12 px-3'>
                <div className='container-xl mx-auto my-3 gap-2 bg-white px-4 py-8'>

                    <div className='md:flex justify-between'>
                        <div className='text-2xl font-semibold mb-2'>
                            <h1>Manage Profile
                            </h1>
                        </div>

                    </div>
                    <div className='profile'>
                        <form className=''>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name and Profile Picture */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <div className="flex space-x-2">
                                        <select className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md">
                                            <option>Mr.</option>
                                            <option>Ms.</option>
                                        </select>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md flex-grow"
                                            placeholder="Mohd. Amir Khan"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <label className="block text-sm font-medium mb-1">Profile Picture</label>
                                    {imagePreview && <img src={imagePreview} alt="Profile" className="h-24 w-24 rounded-full mb-2 object-cover" />}

                                    <input type="file" accept="image/*" title="Dimensions 180 X 180" onChange={handleFileChange} />
                                    <p className="text-xs text-gray-500 mt-1">jpg, jpeg, png</p>
                                </div>

                                {/* Gender, Employee Code,DOB, and Date of Joining */}
                                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                    <div className='gender flex-col'>
                                        <label className="block text-sm font-medium mb-1">Gender</label>
                                        <div className="space-x-4 p-2 w-full">
                                            <label>
                                                <input type="radio" name="gender" className="mr-1" /> Male
                                            </label>
                                            <label>
                                                <input type="radio" name="gender" className="mr-1 " /> Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className='dob flex-col'>
                                        <label className="block text-sm font-medium mb-1">DOB</label>

                                        <input type="date" className='border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full' name="dob" id="dob" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                    <div className='flex-col'>
                                        <label className="block text-sm font-medium mb-1">Employee Code</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full "
                                            placeholder="DS3862"
                                            disabled
                                        />
                                    </div>
                                    <div className='anniversary flex-col '>
                                        <label className="block text-sm font-medium mb-1">Anniversary Date</label>

                                        <input type="date" className='border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full' name="anniversary" id="anniversary" />
                                    </div>
                                </div>

                                {/* Date of Joining and Department */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Date of Joining</label>
                                        <input
                                            type="date"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"

                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Department</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="Mobile Department"
                                            disabled
                                        />
                                    </div>
                                </div>

                                {/* Role of user and Role category */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Role</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="Development"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Role Category</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="Technical"
                                            disabled
                                        />
                                    </div>
                                </div>
                                {/* Assigned PM and Designation */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Assigned To (PM)</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="Arvind Bhambhani"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Designation</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="Programmer Analyst"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Team/Project Lead</label>
                                    <select className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full">
                                        <option>Manish Kumar Marotiya</option>
                                    </select>
                                </div>

                                {/* Email and Skype */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                                    <div>
                                        <label className="flex text-sm font-medium mb-1">E-mail (Official)*<sub className="text-[8px] text-gray-500 ">(Work as username)</sub></label>

                                        <input
                                            type="email"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="mohd.amir@dotsquares.com"
                                        />
                                    </div>
                                    <div>
                                        <label className=" text-sm font-medium mb-1 flex ">E-mail<sub className="text-[8px] text-gray-500">(personal)</sub> </label>

                                        <input
                                            type="email"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="mohd.amir@dotsquares.com"
                                        />
                                    </div>
                                </div>
                                {/* Email and Skype */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                                    <div>
                                        <label className="flex text-sm font-medium mb-1">Mobile No.</label>

                                        <input
                                            type="number"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="656266****"
                                        />
                                    </div>
                                    <div>
                                        <label className=" text-sm font-medium mb-1 flex ">Alternate no.<sub className="text-[8px] text-gray-500">(In Case Emergency)</sub> </label>

                                        <input
                                            type="number"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="695626****"
                                        />
                                    </div>
                                </div>
                                {/* Skype ID */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Skype ID (Official)</label>
                                    <input
                                        type="text"
                                        className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                        placeholder="mohd.amir@dotsquares.com"
                                    />
                                </div>

                                {/* AADHAR and PAN NUMBER */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                                    <div>
                                        <label className="flex text-sm font-medium mb-1">Aadhaar Number</label>

                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="548992552***"
                                        />
                                    </div>
                                    <div>
                                        <label className=" text-sm font-medium mb-1 flex ">PAN Number </label>

                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="TG656Th"
                                        />
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="">
                                    <label className="block text-sm font-medium mb-1">Address</label>
                                    <textarea
                                        className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full resize-none"
                                        placeholder="A-16, Madina Nagar, Kho-Nagoriyan Road, Sanganer, Jaipur, Rajasthan-302003"
                                        rows="2"
                                    />
                                </div>
                                {/* Passport and Blood group */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                                    <div>
                                        <label className="flex text-sm font-medium mb-1">Passport Number</label>

                                        <input
                                            type="text"
                                            className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full"
                                            placeholder="548992552***"
                                        />
                                    </div>
                                    <div>
                                        <label className=" text-sm font-medium mb-1 flex ">Blood Group </label>

                                        <select className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md w-full">
                                            <option>select</option>
                                            <option>A+</option>
                                            <option>B+</option>
                                            <option>O-</option>

                                        </select>
                                    </div>
                                </div>
                                {/* PF Account */}
                                <div className="">
                                    <label className="block text-sm font-medium mb-1">PF Account</label>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <p className="text-sm text-yellow-600">
                                            Please mark if you are interested in opting for PF deduction.
                                        </p>
                                    </div>
                                </div>
                                {/* UAN number */}

                                <div>
                                    <label className="flex text-sm font-medium mb-1">UAN Number<sub className="text-[8px] text-gray-500 ">(please add if you already have an UAN number)</sub></label>

                                    <input
                                        type="text"
                                        className="border border-gray-300 focus:outline-none focus:shadow p-2 rounded-md "
                                        placeholder="656226*********"
                                    />
                                </div>
                                {/* upload document */}
                                <div className="md:flex justify-between">
                                    <label className="text-sm font-medium mb-1">Upload Document</label>

                                    <input type="file" className="" />


                                </div>

                            </div>
                            <div className='flex flex-wrap py-3 gap-2 mt-4'>
                                <h4 className='text-md font-semibold text-yellow-400'>Technology :</h4>
                                <h4 className='text-md font-semibold text-yellow-400'>
                                    Specialization or Interested:-</h4>
                            </div>
                            <hr />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                                {chunkedTechnologies.map((chunk, index) => (


                                    <div className='py-4' key={index}>
                                        {chunk.map((tech, techIndex) => (

                                            <div className='mb-4' key={techIndex}>
                                                <div className='flex items-center mb-2'>
                                                    <input type="checkbox" name={tech.name} id=""
                                                        onChange={(e) => handleTechnology(e)} checked={selectedTechnology[tech.name]} /><label htmlFor="" className='text-xs pl-1' >{tech.name}</label>
                                                </div>
                                                <div className='gap-x-3 gap-y-1  flex flex-wrap '>
                                                    {['Expert', 'Intermediate', 'Beginner', 'Interested'].map((level) => (
                                                        <div className='flex items-center' key={level}>
                                                            <input type="radio" name={tech.name} id=""
                                                                onChange={(e) => handleRadiochange(e,level)} checked={selectedTechnology[tech.name]?.level ===level} /><label htmlFor="" className='text-xs pl-1' >{level}</label>
                                                        </div>
                                                    ))}






                                                </div>
                                            </div>

                                        ))}
                                    </div>


                                ))}

                            </div>

                            <div className='flex flex-wrap justify-between py-3 gap-2'>
                                <h4 className='text-md font-semibold text-yellow-400'>Domain Experience In :</h4>

                            </div>
                            <hr />

                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6'>
                                {chunkedDomains.map((chunk, index) => (
                                    <div className='py-4'>
                                        {chunk.map((domain, Index) => (
                                            <>
                                                <div className='mb-4' key={domain.category}>
                                                    <div className='flex items-center mb-2'>
                                                    <input type="checkbox" name={domain.category} id=""
                                                        onChange={(e) => handleDomains(e)}  /><label htmlFor="" className='text-xs pl-1'>{domain.category}</label>
                                                    </div>

                                                </div>
                                            </>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <button type='submit' className='bg-dark-pink text-white rounded-md px-5 py-3 text-lg hover:bg-[#be1044]'>Save</button>


                        </form>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Profile