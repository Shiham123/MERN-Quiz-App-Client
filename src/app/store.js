import {combineReducers, configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"

// state slice
import themeSlice from "./Theme/themeSlice"
import questionSlice from "./services/questionSlice"
import resultSlice from "./services/resultSlice"

// Api slice
import {userApi} from "./api/userApi"

const rootReducer = combineReducers({
	theme: themeSlice,
	question: questionSlice,
	result: resultSlice,
	[userApi.reducerPath]: userApi.reducer,
})

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, userApi.middleware]),
})

export default store
