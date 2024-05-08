import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {enabled: true, isCheck: false},
	reducers: {
		changeTheme: (state, {payload}) => {
			state.enabled = payload
		},
		isQuizCheck: (state, {payload}) => {
			state.isCheck = payload
		},
	},
})

export const {changeTheme, isQuizCheck} = themeSlice.actions
export default themeSlice.reducer
