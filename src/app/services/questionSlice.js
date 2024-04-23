import {createSlice} from "@reduxjs/toolkit"

const questionSlice = createSlice({
	name: "result",
	initialState: {queue: [], answer: [], trace: 0},
	reducers: {
		startExamAction: (state, action) => {
			return {...state, queue: action.payload}
		},
	},
})

export const {startExamAction} = questionSlice.actions
export default questionSlice.reducer
