import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/Error/ErrorPage"
import Home from "../pages/home/Home"

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [{index: true, element: <Home />}],
	},
])

export default router
