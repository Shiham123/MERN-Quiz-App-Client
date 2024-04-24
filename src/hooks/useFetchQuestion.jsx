import {useEffect, useState} from "react"
import data from "../database/data.js"
import {useDispatch} from "react-redux"
import {startExamAction} from "../app/services/questionSlice"

const useFetchQuestion = () => {
	const dispatch = useDispatch()
	const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

	useEffect(() => {
		setGetData((prev) => ({...prev, isLoading: true}))(async () => {
			try {
				let question = await data

				if (question.length > 0) {
					setGetData((prev) => ({...prev, apiData: question}))
					setGetData((prev) => ({...prev, isLoading: false}))
					dispatch(startExamAction(question))
				} else {
					throw new Error("no question available")
				}
			} catch (error) {
				setGetData((prev) => ({...prev, isLoading: false}))
				setGetData((prev) => ({...prev, serverError: error}))
			}
		})()
	}, [dispatch])

	return [getData, setGetData]
}

export default useFetchQuestion
