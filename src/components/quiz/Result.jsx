import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"

// shared component
import QuizHeading from "../../shared/QuizHeading"
import QuizBtn from "../../shared/QuizBtn"
import PerDiv from "../../shared/PerDiv"

// component
import ResultTable from "./ResultTable"

// redux action
import {resetResultAction} from "../../app/services/resultSlice"
import {resetAllAction} from "../../app/services/questionSlice"
import {useEffect} from "react"
import {getFinalResult} from "../../app/Theme/themeSlice"

const Result = () => {
	const {result, correctAnswers, finalResult} = useSelector((state) => ({
		queue: state.question.queue,
		result: state.result.result,
		correctAnswers: state.question.correctAnswers,
		userId: state.result.userId,
		finalResult: state.theme.finalResult,
	}))

	const dispatch = useDispatch()

	// reset the all action
	const handleRestart = () => {
		dispatch(resetResultAction(), resetAllAction())
	}

	useEffect(() => {
		let isTrue = 0,
			isFalse = 0

		for (let i = 0; i < result.length; i++) {
			if (result[i] === correctAnswers[i]) {
				isTrue++
			} else {
				isFalse++
			}
		}

		dispatch(getFinalResult({trueValue: isTrue, falseValue: isFalse}))
	}, [dispatch, correctAnswers, result])

	return (
		<div className="max-w-xl mx-auto my-10 flex justify-center items-center flex-col">
			<QuizHeading headerText="Quiz Result" />

			{/* Per div for user history */}
			<div className="border-[2px] border-black/50 w-full p-4 m-4 rounded-lg">
				<PerDiv actions="User Name" userName="Shiham Ibne Yousuf" />
				<PerDiv actions="Total Quiz Points : " userName="20" />
				<PerDiv actions="Total Questions : " userName="05" />
				<PerDiv actions="Total Attempts : " userName="03" />
				<PerDiv actions="Total Earn Points : " userName="30" />
				<PerDiv actions="Quiz Result" userName="Passed" />
			</div>

			{/* Restart quiz actions */}
			<Link to={"/"}>
				<QuizBtn startQuizBtnText="Restart" onClick={handleRestart} />
			</Link>

			{/* Result table  */}
			<ResultTable userResult={finalResult} />
		</div>
	)
}

export default Result
