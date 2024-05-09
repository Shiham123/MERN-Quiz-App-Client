import {createSlice} from "@reduxjs/toolkit"

const questionSlice = createSlice({
	name: "question",
	initialState: {queue: [], answer: [], trace: 0, correctAnswers: []},
	reducers: {
		startExamAction: (state, {payload}) => {
			const {question, answer} = payload
			return {...state, queue: question, correctAnswers: answer}
		},
		moveNextAction: (state) => {
			if (state.trace > state.queue.length - 2) return {...state, trace: 0}
			else return {...state, trace: state.trace + 1}
		},
		moveToPrevAction: (state) => {
			if (state.trace > 0) return {...state, trace: state.trace - 1}
		},
		selectedValue: (state, {payload}) => {
			state.answer = payload
		},
		resetAllAction: () => {
			return {queue: [], answer: [], trace: 0}
		},
	},
})

export const {startExamAction, moveNextAction, moveToPrevAction, selectedValue, resetAllAction} =
	questionSlice.actions
export default questionSlice.reducer
