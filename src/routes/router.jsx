import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/Error/ErrorPage"
import Home from "../pages/home/Home"
import Quiz from "../components/quiz/Quiz"
import Result from "../components/quiz/Result"

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <Home />},
			{path: "/quiz", element: <Quiz />},
			{path: "/result", element: <Result />},
		],
	},
])

export default router
