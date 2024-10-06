import React, { useState } from 'react';
import Header from '../components/Header';
import { MdOutlineMoveToInbox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LiaEdit } from "react-icons/lia";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="md:w-[85%] bg-white mx-auto py-4 my-3 flex items-center justify-center text-center">
        {/* You can replace this with your actual content */}
        <p className='capitalize md:text-xl lg:text-2xl text-lg px-2 font-Roboto my-3' >Congratulation <span className='text-[#d7255a] font-semibold underline'>Mrs. Radheshyam Sharma </span>On your Work Anniversary.</p> 
      </div>
      <div class="md:flex md:items-center md:mx-auto md:my-3 md:w-[85%] text-nowrap">
  <div class="basis-1/2 bg-white">
    <ul class="flex flex-wrap justify-center gap-3 sm:gap-12 lg:gap-0 text-[#D7255A] font-Roboto">
      <li class="px-3 py-3 lg:px-5">Today's Call</li>
      <li class="px-3 py-3 lg:px-5">Tomorrow's Call</li>
      <li class="px-3 py-3 lg:px-5">This Week Call</li>
      <li class="px-3 py-3 lg:px-5">Pending Call</li>
    </ul>
  </div>
  <div class="basis-1/2 flex justify-end gap-2">
    <button type="button" class="rounded-[100px] border border-[#D7255A] px-4 py-2 leading-6 text-[#D7255A] lg:px-5">
      Project Start
    </button>
    <button type="button" class="flex items-center justify-center rounded-[100px] bg-[#D7255A] px-4 py-2 leading-6 text-white lg:px-5">
      <span class="flex gap-1 items-center">
        <svg class="h-[22px] w-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
        Check Your KRA
      </span>
    </button>
  </div>
</div> 
<div className='md:w-[85%] md:flex mx-auto my-3 gap-2'>
  <div className='basis-1/4 text-white p-4 bg-gradient-to-b from-[#ECAB2D] to-[#CF600F] rounded-md'>
  <div className='flex gap-3'>
    
  <MdOutlineMoveToInbox className='text-[38px] bg-[rgba(0,0,0,0.3)] p-[4px] rounded-md' />
    <div className=''>
      
      <article class="">
  <h1>Client's to be Chased</h1>
  <p className='font-bold text-3xl'>
    01
  </p>
  
  
</article>
    </div>
  </div>
  <div className=''></div>
  </div>
  <div className='basis-1/4 text-white p-4 bg-gradient-to-b from-[#2D79EC] to-[#0FA1CF] rounded-md'>
  <div className='flex gap-3'>
    
  <MdOutlineMoveToInbox className='text-[38px] bg-[rgba(0,0,0,0.3)] p-[4px] rounded-md' />
    <div className=''>
      {/* <span>Client's to be Chased</span> */}
      <article class="">
  <h1>Client's to be Chased</h1>
  <p className='font-bold text-3xl'>
    100
  </p>
  
  
</article>
    </div>
  </div>
  <div className=''></div>
  </div>

  </div>
  <div className='md:w-[85%] mx-auto my-3 gap-2 bg-white p-2 '>
    <div className='md:flex justify-between'>
    <div className='text-[21px] font-semibold'>
    <h3>Client's to be Chased</h3>
    </div>
  <div class="relative rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm"><IoIosSearch /></span>
    </div>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search"/>
    
  </div>
  </div>
  <table class="mt-2 bg-gray-400">
  <thead className='text-nowrap'>
    <tr className='justify-start'>
      <th className=''>S.No</th>
      <th className=''>Crm ID</th>
      <th className=''>Client Name</th>
      <th className=''>Project Name</th>
      <th className=''>Engagement Date</th>
      <th className=''>Ba Name</th>
      <th className=''>Team Leader Name</th>
      <th className=''>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>0001</td>
      <td>Gideon Ashby (USA)</td>
      <td><div>
        <span>Custom Upgrade</span>
        <p>Generated Date: Sep 16,2024 12:30Pm
        Last Activity: Sep 17, 2024 11:22Pm</p>
        </div></td>

      <td>Sep 20, 2024</td>
      <td>Abhay Srivastava</td>
      <td>Manish Kumar Marotiya</td>
      <td><button className='text-[12px] border border-[#D7255A] px-2 rounded-xl flex items-center gap-1'><span><LiaEdit />
      </span>Edit</button></td>

    </tr>
    <tr>
      <td>01</td>
      <td>0001</td>
      <td>Gideon Ashby (USA)</td>
      <td>
      <div>
        <span>Custom Upgrade</span>
        <p>Generated Date: Sep 16,2024 12:30Pm
        Last Activity: Sep 17, 2024 11:22Pm</p>
        </div>
      </td>

      <td>Sep 20, 2024</td>
      <td>Abhay Srivastava</td>
      <td>Manish Kumar Marotiya</td>
      <td><button className='text-[12px] border border-[#D7255A] px-2 rounded-xl flex items-center gap-1'><span><LiaEdit />
      </span>Edit</button></td>

    </tr>
    <tr>
      <td>01</td>
      <td>0001</td>
      <td>Gideon Ashby (USA)</td>
      <td>
      <div>
        <span>Custom Upgrade</span>
        <p>Generated Date: Sep 16,2024 12:30Pm
        Last Activity: Sep 17, 2024 11:22Pm</p>
        </div>
      </td>

      <td>Sep 20, 2024</td>
      <td>Abhay Srivastava</td>
      <td>Manish Kumar Marotiya</td>
      <td><button className='text-[12px] border border-[#D7255A] px-2 rounded-xl flex items-center gap-1'><span><LiaEdit />
      </span>Edit</button></td>

    </tr>
  </tbody>
</table>
    </div>
    
  </div>
    
    
  );
};

export default Dashboard;