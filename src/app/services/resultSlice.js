import {createSlice} from "@reduxjs/toolkit"

const resultSlice = createSlice({
	name: "result",
	initialState: {userId: null, result: []},
	reducers: {
		setUserId: (state, {payload}) => {
			state.userId = payload
		},
		pushResultAction: (state, {payload}) => {
			state.result.push(payload)
		},
		updateResultAction: (state, {payload}) => {
			const {trace, checked} = payload
			const {selectedIdx} = checked
			state.result.fill(selectedIdx, trace, trace + 1)
		},
		resetResultAction: () => {
			return {userId: null, result: []}
		},
	},
})

export const {setUserId, pushResultAction, resetResultAction, updateResultAction} =
	resultSlice.actions
export default resultSlice.reducer
