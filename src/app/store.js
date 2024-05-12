import {combineReducers, configureStore} from "@reduxjs/toolkit"

import themeSlice from "./Theme/themeSlice"
import questionSlice from "./services/questionSlice"
import resultSlice from "./services/resultSlice"
import {userApi} from "./api/userApi"
import logger from "redux-logger"

const rootReducer = combineReducers({
	theme: themeSlice,
	question: questionSlice,
	result: resultSlice,
	[userApi.reducerPath]: userApi.reducer,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, userApi.middleware]),
})

export default store
