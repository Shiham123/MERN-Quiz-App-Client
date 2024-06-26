import ReactDOM from "react-dom/client"
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"

import router from "./routes/router"
import store from "./app/store"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
)
