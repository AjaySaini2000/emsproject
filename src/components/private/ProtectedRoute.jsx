// import React, { Children, Component } from 'react'
// import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

// const ProtectedRoute = () => {
//     const {loginstatus} = useSelector((state) => state.auth);
// console.log("sjmshs",loginstatus)
//   if(!loginstatus){
//     return <Navigate to='/sign_in' />;
//   }
//   return (
//     <Component/>
//   )
// }

// export default ProtectedRoute

import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {Component} = props;
  // const navigate = useNavigate();
  
    let is_user_active = localStorage.getItem("isLoggedIn")
    if(!is_user_active){
      return <Navigate to="/sign_in" />
      // navigate("/sign_in")
    }

  return (
    <div><Component/></div>
  ) 
}

export default ProtectedRoute