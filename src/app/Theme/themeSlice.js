import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {enabled: true, isCheck: false, finalResult: ""},
	reducers: {
		changeTheme: (state, {payload}) => {
			state.enabled = payload
		},
		isQuizCheck: (state, {payload}) => {
			state.isCheck = payload
		},
		getFinalResult: (state, {payload}) => {
			const {trueValue} = payload

			if (trueValue > 3) {
				state.finalResult = "passed"
			} else {
				state.finalResult = "failed"
			}
		},
	},
})

export const {changeTheme, isQuizCheck, getFinalResult} = themeSlice.actions
export default themeSlice.reducer
