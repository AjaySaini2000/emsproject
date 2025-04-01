import React, { useState } from 'react'

const Createorganization = (props) => {
  const { getTabValue } = props

  const[formdata, setFormdata]=useState(
    {
      orgname:'',
      startdate:'',
      enddate:''
    }
  )

const handleChange = (e)=>{
  const{ value,name }=e.target;
  setFormdata({...formdata, [name]:value})
  // console.log(formdata);
  

}
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formdata);
    getTabValue("orglist")

    
  }
  return (
    <div className='create_org'>
        <h2 className='mb-2 text-gray-500 font-semibold tracking-wide'>Create Organization</h2>
        <div className='org_form w-full mt-4'>
            <form action="" method="post" onSubmit={(e)=>{handleSubmit(e)}} className='md:mx-16 mx-4'>
              <div>
              <input type="text" name="orgname" id="" value={formdata.orgname} placeholder='organization name' className='w-full p-2 focus:outline-none focus:shadow-md'onChange={(e)=>{handleChange(e)}}/>
              </div>
             <div className='md:flex gap-4 mt-4 '>
              <div className='md:basis-1/2 flex flex-col w-full'>
            <label htmlFor="start date" className='text-gray-700 mb-1'>
              Start Date 
            </label>
            <input type="date" name="startdate" id="" value={formdata.startdate} className='p-2 focus:outline-none focus:shadow-md' onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className='basis-1/2 flex flex-col w-full'>
            <label htmlFor="end date" className='text-gray-700 mb-1'>
              End Date 
            </label>
            <input type="date" name="enddate" id="" value={formdata.enddate} className='p-2 focus:outline-none focus:shadow-md' onChange={(e)=>{handleChange(e)}}/>
            </div>
            </div>

            <div className='flex justify-end mt-3'>
              <span className='sm:w-auto w-full'>
              <button type="submit" className='bg-green-500 py-1 px-3 rounded-md hover:bg-green-600 text-white w-full'>Add</button>
              </span>
            </div>
            </form>

        </div>
    </div>
  )
}

export default Createorganization