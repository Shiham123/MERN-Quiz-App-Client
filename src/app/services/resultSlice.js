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
		resetResultAction: () => {
			return {userId: null, result: []}
		},
	},
})

export const {setUserId, pushResultAction, resetResultAction} = resultSlice.actions
export default resultSlice.reducer
