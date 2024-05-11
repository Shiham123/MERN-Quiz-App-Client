import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "../app/Theme/themeSlice"
import questionReducer from "../app/services/questionSlice"
import resultReducer from "../app/services/resultSlice"
import {userApiSlice} from "./api/userApiSlice"

const store = configureStore({
	reducer: {
		theme: themeReducer,
		question: questionReducer,
		result: resultReducer,
		[userApiSlice.reducerPath]: userApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApiSlice.middleware]),
})

export default store
