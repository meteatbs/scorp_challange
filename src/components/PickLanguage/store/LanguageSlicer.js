import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	
	lang: 'en',
};

export const LanguageSlicer = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setlang: (state, action) => {
			// console.log("language change")
			state.lang = action.payload;
		},
	},
});

export const selectAppState = (state) => state.app;
export const { settitle, setlang } = LanguageSlicer.actions;
export default LanguageSlicer.reducer;
