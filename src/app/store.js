import {configureStore, combineReducers} from "@reduxjs/toolkit"
import themeSlice from "./Theme/themeSlice"
import questionSlice from "./services/questionSlice"
import resultSlice from "./services/resultSlice"
import {addUserApi} from "./api/userApi"

const rootReducer = combineReducers({
	[addUserApi.reducerPath]: addUserApi.reducer,
	theme: themeSlice,
	question: questionSlice,
	result: resultSlice,
})

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([addUserApi.middleware]),
})

export default store
