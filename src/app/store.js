import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import themeSlice from "./Theme/themeSlice"

const store = configureStore({
	reducer: {theme: themeSlice},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
