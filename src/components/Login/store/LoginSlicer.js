import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: 0,
	username: null,
	email: null,
	loginModal: false,
};

export const loginSlicer = createSlice({
	name: 'loginstatus',
	initialState,
	reducers: {
		userlogin: (state, action) => {
			state.status = 1;
			state.username = action.payload.name;
			state.email = action.payload.email;
			// console.log(action);
		},
		userlogout: (state) => {
			state.status = 0;
			state.username = null;
			state.email = null;
		},
		loginmodal: (state) => {
			state.loginModal = !state.loginModal;
		},
	},
});

export const LoginState = (state) => state.loginstatus;
export const {
	userlogin,
	userlogout,
	setusername,
	loginmodal,
} = loginSlicer.actions;
export default loginSlicer.reducer;
