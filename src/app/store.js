import {configureStore, combineReducers} from "@reduxjs/toolkit"
import themeSlice from "./Theme/themeSlice"
import questionSlice from "./services/questionSlice"
import resultSlice from "./services/resultSlice"

const rootReducer = combineReducers({
	theme: themeSlice,
	question: questionSlice,
	result: resultSlice,
})

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
