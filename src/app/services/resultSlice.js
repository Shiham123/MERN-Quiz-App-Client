import {createSlice} from "@reduxjs/toolkit"

const resultSlice = createSlice({
	name: "result",
	initialState: {userId: null, result: []},
	reducers: {
		setUserId: (state, {payload}) => {
			state.userId = payload
		},
	},
})

export const {setUserId} = resultSlice.actions
export default resultSlice.reducer
