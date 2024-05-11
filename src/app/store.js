import {configureStore, combineReducers} from "@reduxjs/toolkit"
import themeSlice from "./Theme/themeSlice"
import questionSlice from "./services/questionSlice"
import resultSlice from "./services/resultSlice"
import {userApiSlice} from "./api/userApiSlice"

const rootReducer = combineReducers({
	[userApiSlice.reducerPath]: userApiSlice.reducer,
	theme: themeSlice,
	question: questionSlice,
	result: resultSlice,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApiSlice.middleware]),
})

export default store
