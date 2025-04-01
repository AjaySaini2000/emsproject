import React, { useEffect, useState } from 'react'


import Usertable from './common/Usertable'

const Organizationslist = ({ getTabValue }) => {
    const [activePage, setActivePage] = useState(3)
    const [columnFilter, setColumnFilter] = useState({})
    const [columnSorter, setColumnSorter] = useState(null)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [records, setRecords] = useState(0)

    const [loading, setLoading] = useState(false)
const [users, setUsers] = useState(
     [
        {
          id: 1,
          organization: 'Samppa Nori',
          avatar: '1.jpg',
          session_startdate: "2021/03/01",
          session_enddate: "2021/03/01",

          role: 'Member',
          status: 'Active'
        },
        {
          id: 2,
          organization: 'Estavan Lykos',
          avatar: '2.jpg',
          session_startdate: "2018/02/07",
          session_enddate: "2018/02/07",

          role: 'Staff',
          status: 'Banned'
        },
        {
          id: 3,
          organization: 'Chetan Mohamed',
          avatar: '3.jpg',
          session_startdate: "2020/01/15",
          session_enddate: "2020/01/15",

          role: 'Admin',
          status: 'Inactive',
          _selected: true
        },
        {
          id: 4,
          organization: 'Derick Maximinus',
          avatar: '4.jpg',
          session_startdate: "2019/04/05",
          session_enddate: "2019/04/05",

          role: 'Member',
          status: 'Pending'
        },
        {
          id: 5,
          organization: 'Friderik Dávid',
          avatar: '5.jpg',
          session_startdate: "2022/03/25",
          session_enddate: "2022/03/25",

          role: 'Staff',
          status: 'Active'
        },
        {
          id: 6,
          organization: 'Yiorgos Avraamu',
          avatar: '6.jpg',
          session_startdate: "2017/01/01",
          session_enddate: "2017/01/01",

          role: 'Member',
          status: 'Active'
        },
        {
          id: 7,
          organization: 'Avram Tarasios',
          avatar: '7.jpg',
          session_startdate: "2016/02/12",
          session_enddate: "2016/02/12",

          role: 'Staff',
          status: 'Banned',
          _selected: true
        },
        {
          id: 8,
          organization: 'Quintin Ed',
          avatar: '8.jpg',
          session_startdate: "2023/01/21",
          session_enddate: "2023/01/21",

          role: 'Admin',
          status: 'Inactive'
        },
        {
          id: 9,
          organization: 'Enéas Kwadwo',
          avatar: '9.jpg',
          session_startdate: "2024/03/10",
          session_enddate: "2024/03/10",

          role: 'Member',
          status: 'Pending'
        },
        {
          id: 10,
          organization: 'Agapetus Tadeáš',
          avatar: '10.jpg',
          session_startdate: "2015/01/10",
          session_enddate: "2015/01/10",
          role: 'Staff',
          status: 'Active'
        },
        {
          id: 11,
          organization: 'Carwyn Fachtna',
          avatar: '11.jpg',
          session_startdate: "2014/04/01",
          session_enddate: "2011/03/19",
          role: 'Member',
          status: 'Active'
        },
        {
          id: 12,
          organization: 'Nehemiah Tatius',
          avatar: '12.jpg',
          session_startdate: "2013/01/05",
          session_enddate: "2011/03/19",
          role: 'Staff',
          status: 'Banned',
          _selected: true
        },
        {
          id: 13,
          organization: 'Ebbe Gemariah',
          avatar: '13.jpg',
          session_startdate: "2012/02/25",
          session_enddate: "2012/02/25",
          role: 'Admin',
          status: 'Inactive'
        },
        {
          id: 14,
          organization: 'Eustorgios Amulius',
          avatar: '14.jpg',
          session_startdate: "2011/03/19",
          session_enddate: "2011/03/19",
          role: 'Member',
          status: 'Pending'
        },
        {
          id: 15,
          organization: 'Leopold Gáspár',
          avatar: '15.jpg',
          session_startdate: "2010/02/01",
          session_enddate: "2010/02/01",
          status: 'Active'
        }
      ]
)

const columns = [
    // {
    //   key: 'avatar',
    //   label: '',
    //   filter: false,
    //   sorter: false,
    // },
    {
      key: 'organization',
    //   _style: { width: '20%' },
    },
    {
      key: 'session_startdate',
      sorter: (date1, date2) => {
        const a = new Date(date1.session_startdate)
        const b = new Date(date2.session_startdate)
        return a > b ? 1 : b > a ? -1 : 0
      }
    },
    { 
      key: 'session_enddate',
      sorter: (date1, date2) => {
        const a = new Date(date1.session_enddate)
        const b = new Date(date2.session_enddate)
        return a > b ? 1 : b > a ? -1 : 0
      }
    },
    // 'status',
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]


    
  
    
    return (
        <div className="">
            <div className='flex justify-end'><button type="button" onClick={()=>{getTabValue("createOrg")}} className='bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-md'>+ create</button></div>
     <Usertable columns={columns} data={users ? users : []}/>
     </div>
    );
 
}

export default Organizationslist








// import { CiEdit } from "react-icons/ci";
// import { MdOutlineDeleteForever } from "react-icons/md";
// import Pagination from '../pagination/Pagination';
// const Organizationslist = (props) => {
//     const[data, setData]=useState([
//         {
//             "sr.no":"1",
//           "orgname": "Organization A",
//           "startdate": "2023-01-01",
//           "enddate": "2023-12-31"
//         },
//         {
//             "sr.no":"2",
//           "orgname": "Organization B",
//           "startdate": "2022-06-15",
//           "enddate": "2023-06-14"
//         },
//         {
//             "sr.no":"3",
//           "orgname": "Organization C",
//           "startdate": "2024-03-01",
//           "enddate": "2024-12-31"
//         },
//         {
//             "sr.no":"4",
//           "orgname": "Organization D",
//           "startdate": "2021-09-10",
//           "enddate": "2022-09-09"
//         },
//         {
//             "sr.no":"5",
//           "orgname": "Organization E",
//           "startdate": "2020-11-05",
//           "enddate": "2021-11-04"
//         },
//         {
//             "sr.no":"6",
//           "orgname": "Organization F",
//           "startdate": "2022-01-25",
//           "enddate": "2022-12-25"
//         },
//         {
//             "sr.no":"7",
//           "orgname": "Organization G",
//           "startdate": "2023-07-01",
//           "enddate": "2024-06-30"
//         },
//         {
//             "sr.no":"8",
//           "orgname": "Organization H",
//           "startdate": "2021-12-01",
//           "enddate": "2022-11-30"
//         },
//         {
//             "sr.no":"9",
//           "orgname": "Organization I",
//           "startdate": "2023-04-15",
//           "enddate": "2024-04-14"
//         },
//         {
//             "sr.no":"10",
//           "orgname": "Organization J",
//           "startdate": "2020-09-30",
//           "enddate": "2021-09-29"
//         },
//         {
//             "sr.no":"11",
//           "orgname": "Organization K",
//           "startdate": "2021-03-10",
//           "enddate": "2022-03-09"
//         },
//         {
//             "sr.no":"12",
//           "orgname": "Organization L",
//           "startdate": "2023-02-20",
//           "enddate": "2024-02-19"
//         },
//         {
//             "sr.no":"13",
//           "orgname": "Organization M",
//           "startdate": "2020-05-01",
//           "enddate": "2021-04-30"
//         },
//         {
//             "sr.no":"14",
//           "orgname": "Organization N",
//           "startdate": "2022-08-01",
//           "enddate": "2023-07-31"
//         },
//         {
//             "sr.no":"15",
//           "orgname": "Organization O",
//           "startdate": "2021-06-25",
//           "enddate": "2022-06-24"
//         }
//       ]
//       )
//     const { getTabValue } = props
//     const [mappedItems, setMappedItems] = useState([]);



//     const alldata = useCallback((currentItems) => {
//         const processedItems = currentItems.map((item) => {
//             return { ...item}; // Example transformation
//           });
      
//           setMappedItems(processedItems);
//       }, []); 
      

//     return (
//         <>
//         <div className='Organizations'>
//             <h2 className='mb-2 text-gray-500 font-semibold tracking-wide'>Organizations</h2>
//             <div className='flex justify-end'>
//                 <button type="button" className='bg-blue-700 text-white p-2 font-Roboto tracking-wide rounded-md hover:bg-blue-900' onClick={() => { getTabValue("createOrg") }}>
//                     <span className='font-semibold'>+</span> Create</button>
//             </div>
//             <div className='org_list'>
//                 <div className='overflow-x-auto'>
//                     <table className="min-w-full divide-y divide-gray-200 my-3 border border-gray-100">
//                         <thead className="bg-gray-800 opacity-95">
//                             <tr >
//                                 <th scope="col" className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-200">Sr. no</th>
//                                 <th scope="col" className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-200">organization name</th>
//                                 <th scope="col" className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-200">session start date</th>

//                                 <th scope="col" className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-200">end date</th>
//                                 <th scope="col" className="p-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-200">action</th>


//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {/* <tr  >
//                                 <td className="p-3  text-sm text-gray-600 ">01 </td>
//                                 <td className="p-3  text-sm text-gray-600">
//                                     TLN
//                                 </td>

//                                 <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="p-3  text-sm flex gap-3 ">
//                                     <button type="button" className='px-2 font-medium rounded-full bg-blue-400 text-white'>Edit</button>
//                                     <button type="button" className='px-2 font-medium rounded-full bg-red-400 text-white'>Delete</button>
//                                 </td>

//                             </tr> */}
//                             {mappedItems.map((item)=>(
//                                 <tr  >
//                                 <td className="px-3 py-2  text-sm text-gray-600 ">{item['sr.no']} </td>
//                                 <td className="px-3 py-2 text-sm text-gray-600">
//                                     TLN
//                                 </td>

//                                 <td className="px-3 py-2 text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="px-3 py-2 text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="px-3 py-2 text-lg flex gap-3 ">
//                                     <button type="button" className='p-1 font-medium rounded-md bg-blue-400 text-white hover:bg-blue-600'><CiEdit/></button>
//                                     <button type="button" className='p-1 font-medium rounded-md bg-red-400 text-white hover:bg-red-600 '><MdOutlineDeleteForever/></button>
//                                 </td>

//                             </tr>
//                             ))}
                            
//                             {/* <tr  >
//                                 <td className="p-3  text-sm text-gray-600 ">01 </td>
//                                 <td className="p-3  text-sm text-gray-600">
//                                     TLN
//                                 </td>

//                                 <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="p-3  text-sm flex gap-3 ">
//                                     <button type="button" className='px-2 font-medium rounded-full bg-blue-400 text-white'>Edit</button>
//                                     <button type="button" className='px-2 font-medium rounded-full bg-red-400 text-white'>Delete</button>
//                                 </td>

//                             </tr>
//                             <tr  >
//                                 <td className="p-3  text-sm text-gray-600 ">01 </td>
//                                 <td className="p-3  text-sm text-gray-600">
//                                     TLN
//                                 </td>

//                                 <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="p-3  text-sm text-gray-600">mon, oct 10,2024</td>
//                                 <td className="p-3  text-sm flex gap-3 ">
//                                     <button type="button" className='px-2 font-medium rounded-full bg-blue-400 text-white'>Edit</button>
//                                     <button type="button" className='px-2 font-medium rounded-full bg-red-400 text-white'>Delete</button>
//                                 </td>

//                             </tr> */}
//                         </tbody>

//                     </table>

//                 </div>

//             </div>
//         </div>
//         <Pagination data={data} alldata={alldata}/>
//         </>
//         )
// }

// export default Organizationslist