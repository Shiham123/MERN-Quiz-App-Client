import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import themeSlice from "./Theme/themeSlice"
import questionSlice from "./services/questionSlice"
import resultSlice from "./services/resultSlice"

const store = configureStore({
	reducer: {theme: themeSlice, question: questionSlice, result: resultSlice},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
