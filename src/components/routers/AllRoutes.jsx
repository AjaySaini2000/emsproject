import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signin from '../pages/Signin'
import Cidocument from '../pages/Cidocument'
import DepartmentDocument from '../pages/DepartmentDocument'
import Changepassword from '../pages/Changepassword'
import ProfessionalProfile from '../pages/ProfessionalProfile'
import Profile from '../pages/Profile'
import InvestmentDetails from '../pages/InvestmentDetails'
import Vaccination from '../pages/Vaccination'
import OfficialLeave from '../pages/OfficialLeave'
import ManageStudy from '../pages/ManageStudy'
import SearchStudycenter from '../pages/SearchStudycenter'
import Mykra from '../pages/Mykra'
import Attendance from '../pages/Attendance'
import ApplyForLeave from '../pages/ApplyForLeave'
import LessonLearn from '../pages/LessonLearn'
import Minutesofmeeting from '../pages/Minutesofmeeting'
import NcLog from '../pages/NcLog'
import SelfDeclaration from '../pages/SelfDeclaration'
import Workfromhome from '../pages/Workfromhome'
import Timesheet from '../pages/Timesheet'
import ToDo from '../pages/ToDo'

import SuperAdminDashboard from '../superadmin/SuperAdmin'
// import { useSelector } from 'react-redux';


import ProtectedRoute from '../private/ProtectedRoute'
const AllRoutes = () => {
  // const {user}  = useSelector((state) => state.auth);
  
  return (
    <>
    <Router>
      
        <Routes>
          {/* public routes */}
        <Route path='/sign_in' element={<Signin/>}/>
{/* protected routes */}
<Route path='/' element={<ProtectedRoute Component={Dashboard}/>}/>
            {/* <Route path='/' element={<Dashboard/>}></Route>
 */}
            <Route path='/ci_document' element={<ProtectedRoute Component={Cidocument}/>}></Route>
            <Route path='/department_document' element={<DepartmentDocument/>}></Route>
            <Route path='/change_password' element={<Changepassword/>}></Route>
            <Route path='/professional_profile' element={<ProfessionalProfile/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/investment_details' element={<InvestmentDetails/>}></Route>
            <Route path='/vaccination' element={<Vaccination/>}></Route>
            <Route path='/official_leave' element={<OfficialLeave/>}></Route>
            <Route path='/managestudy_center' element={<ManageStudy/>}></Route>
            <Route path='/searchstudy_center' element={<SearchStudycenter/>}></Route>
            <Route path='/mykra' element={<Mykra/>}></Route>
            <Route path='/attendance' element={<Attendance/>}></Route>
            <Route path='/leave' element={<ApplyForLeave/>}></Route>
            <Route path='/lessonlearn' element={<LessonLearn/>}></Route>
            <Route path='/minutesofmeeting' element={<Minutesofmeeting/>}></Route>
            <Route path='/nclogs' element={<NcLog/>}></Route>
            <Route path='/selfdeclaration' element={<SelfDeclaration/>}></Route>
            <Route path='/wfh' element={<Workfromhome/>}></Route>
            <Route path='/timesheet' element={<Timesheet/>}></Route>
            <Route path='/tasks' element={<ToDo/>}></Route>

            {/* super admin routes */}
            <Route path='/superadmin_dashboard' element={<SuperAdminDashboard/>}></Route>




        </Routes>
    </Router>
    </>
  )
}

export default AllRoutes