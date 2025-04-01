
import React, { useState } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
// import '@coreui/coreui/dist/css/coreui.min.css'

import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiCheckCircle } from "react-icons/fi";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";


const Usertable = ({ columns, data }) => {


  // function gg() {
  //   const wb = utils.book_new();
  //   utils.book_append_sheet(wb, utils.json_to_sheet(data));
  //   writeFileXLSX(wb, "data.xlsx");
  // }
  const [details, setDetails] = useState([])
  // const columns = [
  //   { key: 'first_name', _style: { width: '15%', fontSize: '16px' }, filter: false, sorter: false, },
  //   { key: 'last_name', _style: { width: '15%', fontSize: '16px'}, filter: false, sorter: false, },
  //   { key: 'company_name', _style: { width: '15%', fontSize: '16px'}, filter: false, sorter: false, },
  //   { key: 'email_id', _style: { width: '15%', fontSize: '16px' }, filter: false, sorter: false, },
  //   { key: 'Phone_Number', _style: { width: '20%', fontSize: '16px' }, filter: false, sorter: false, },
  //   // { key: 'Profile Request', _style: { width: '20%', fontSize: '16px'}, filter: false, sorter: false, },
  //   // { key: 'registered', _style: { width: '20%' },filter: false,  sorter: false,},
  //   // { key: 'Location', _style: { width: '25%', fontSize: '16px' }, filter: false, sorter: false, },
  //   // { key: 'status', _style: { width: '30%' }, filter: false, sorter: false, },
  //   { key: 'show_details', label: '', _style: { width: '1%', fontSize: '16px' }, filter: false, sorter: false, },
  // ]
  const getBadge = (status) => {
    switch (status) {
      case 1:
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 0:
        return 'danger'
      default:
        return 'primary'
    }
  }
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  

  return (
    <CSmartTable
      activePage={1}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      
      items={data}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      onFilteredItemsChange={(items) => {
        // console.log(items)
      }}
      onSelectedItemsChange={(items) => {
        // console.log(items)
      }}
      scopedColumns={{
        // avatar: (item) => (
        //   <td>
        //     <CAvatar src={`./../../images/avatars/${item.avatar}`} />
        //   </td>
        // ),
        session_startdate: (item) => {
          const date = new Date(item.session_startdate)
          const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
          return (
            <td>{date.toLocaleDateString('en-US', options)}</td>
          )
        },
        session_enddate: (item) => {
            const date = new Date(item.session_enddate)
            const options = {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }
            return (
              <td>{date.toLocaleDateString('en-US', options)}</td>
            )
          },
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item.id)
                }}
              >
                {details.includes(item.id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          )
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item.id)}>
              <CCardBody className="p-3">
                <h4>{item.organization}</h4>
                <p className="text-body-secondary">User since: {item.session_startdate}</p>
                <CButton size="sm" color="info">
                  Edit
                </CButton>
                <CButton size="sm" color="danger" className="ms-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          )
        },
      }}
      selectable
      sorterValue={{ column: 'status', state: 'asc' }}
      tableFilter
      tableProps={{
        className: 'add-this-class',
        responsive: true,
        striped: true,
        hover: true,
      }}
      tableBodyProps={{
        className: 'align-middle'
      }}
    />
  )
}

export default Usertable