import {useEffect, useState} from "react"
import data, {answer} from "../database/data.js"
import {useDispatch} from "react-redux"
import {startExamAction} from "../app/services/questionSlice"

const useFetchQuestion = () => {
	const dispatch = useDispatch()
	const [getData, setGetData] = useState({isLoading: false, apiData: [], serverError: null})

	useEffect(() => {
		const fetchData = async () => {
			setGetData((prev) => ({...prev, isLoading: true}))
			try {
				let question = await data
				if (question.length > 0) {
					setGetData((prev) => ({...prev, apiData: {question, answer}, isLoading: false}))
					dispatch(startExamAction({question, answer}))
				} else {
					throw new Error("no question available")
				}
			} catch (error) {
				setGetData((prev) => ({...prev, isLoading: false, serverError: error}))
			}
		}

		fetchData()
	}, [dispatch])

	return [getData, setGetData]
}

export default useFetchQuestion
