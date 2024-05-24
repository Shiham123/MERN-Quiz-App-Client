import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
	name: "theme",
	initialState: {
		enabled: true,
		isCheck: false,
		finalResult: "",
		isModalOpen: false,
		isLoaderOpen: false,
	},
	reducers: {
		changeTheme: (state, {payload}) => {
			state.enabled = payload
		},
		modalOpen: (state, {payload}) => {
			state.isModalOpen = payload
			state.isLoaderOpen = payload
		},
		loaderOpen: (state, {payload}) => {
			state.isLoaderOpen = payload
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

export const {changeTheme, isQuizCheck, getFinalResult, modalOpen, loaderOpen} = themeSlice.actions
export default themeSlice.reducer
