import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    token:localStorage.getItem("token") || null,
    isAuthReady: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            localStorage.setItem("token",action.payload.token);
            state.isAuthReady = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            state.isAuthReady = true;
        },
        initialisedAuth:(state)=>{
            const storedUser = JSON.parse(localStorage.getItem("user"));
            const storedToken = localStorage.getItem("token");

            if(storedToken){
                state.user = storedUser,
                state.token = storedToken
            }
            state.isAuthReady = true
        }
    }
});
 

export const {loginSuccess,logout,initialisedAuth}= userSlice.actions
export default userSlice.reducer;
