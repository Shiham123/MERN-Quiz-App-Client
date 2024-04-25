import {createSlice} from "@reduxjs/toolkit"

const questionSlice = createSlice({
	name: "question",
	initialState: {queue: [], answer: [], trace: 0},
	reducers: {
		startExamAction: (state, {payload}) => {
			return {...state, queue: payload}
		},
		moveNextAction: (state) => {
			if (state.trace > state.queue.length - 2) return {...state, trace: 0}
			else return {...state, trace: state.trace + 1}
		},
		moveToPrevAction: (state) => {
			if (state.trace > 0) return {...state, trace: state.trace - 1}
		},
	},
})

export const {startExamAction, moveNextAction, moveToPrevAction} = questionSlice.actions
export default questionSlice.reducer
