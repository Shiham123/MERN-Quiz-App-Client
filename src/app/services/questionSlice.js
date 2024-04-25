import {createSlice} from "@reduxjs/toolkit"

const questionSlice = createSlice({
	name: "question",
	initialState: {queue: [], answer: [], trace: 0},
	reducers: {
		startExamAction: (state, {payload}) => {
			return {...state, queue: payload}
		},
		moveNextAction: (state) => {
			return {...state, trace: state.trace + 1}
		},
	},
})

export const {startExamAction, moveNextAction} = questionSlice.actions
export default questionSlice.reducer
