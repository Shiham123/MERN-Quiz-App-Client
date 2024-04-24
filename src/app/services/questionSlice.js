import {createSlice} from "@reduxjs/toolkit"

const questionSlice = createSlice({
	name: "question",
	initialState: {queue: [], answer: [], trace: 0},
	reducers: {
		startExamAction: (state, {payload}) => {
			return {...state, queue: payload}
		},
	},
})

export const {startExamAction} = questionSlice.actions
export default questionSlice.reducer
