import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/Error/ErrorPage"
import Home from "../pages/home/Home"
import Result from "../components/quiz/Result"
import QuizPage from "../components/quiz/QuizPage"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <Home />},
			{
				path: "/quiz",
				element: (
					<PrivateRoute>
						<QuizPage />
					</PrivateRoute>
				),
			},
			{
				path: "/result",
				element: (
					<PrivateRoute>
						<Result />
					</PrivateRoute>
				),
			},
		],
	},
])

export default router
