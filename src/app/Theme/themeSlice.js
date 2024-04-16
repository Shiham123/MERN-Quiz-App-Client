import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {enabled: true},
	reducers: {
		changeTheme: (state, {payload}) => {
			state.enabled = payload
		},
	},
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
