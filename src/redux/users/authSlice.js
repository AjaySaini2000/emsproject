import { createSlice } from '@reduxjs/toolkit'

const initialState={
    loginstatus:JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    user: null
  }
const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.loginstatus = true;
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            state.user = action.payload;
        },
        logout:(state)=>{
            state.loginstatus = false;
            localStorage.setItem('isLoggedIn', JSON.stringify(false));
            state.user = null;
        }
    }


});
export const {login,logout}=authSlice.actions

export default authSlice.reducer