import {useDispatch, useSelector} from "react-redux"

// components
import QuizBtn from "../../shared/QuizBtn"
import QuizHeading from "../../shared/QuizHeading"
import Questions from "../questions/Questions"

// redux
import {moveNextAction, moveToPrevAction} from "../../app/services/questionSlice"
import {pushResultAction} from "../../app/services/resultSlice"
import {Navigate} from "react-router-dom"

const Quiz = () => {
	const {answer, queue, result} = useSelector((state) => ({
		answer: state.question.answer,
		queue: state.question.queue,
		result: state.result.result,
	}))
	const dispatch = useDispatch()

	const handleNextQuiz = () => {
		dispatch(moveNextAction()), dispatch(pushResultAction(answer.index))
	}
	const handlePrevQuiz = () => dispatch(moveToPrevAction())

	if (result.length && result.length >= queue.length) {
		return <Navigate to={`/result`} replace={true} />
	}

	return (
		<div className="max-w-xl mx-auto my-10 flex justify-center items-center flex-col">
			<QuizHeading headerText="Quiz section" />

			<Questions />

			<div className="flex justify-between items-center gap-8 my-12">
				<QuizBtn onClick={handlePrevQuiz} startQuizBtnText="Prev" />
				<QuizBtn onClick={handleNextQuiz} startQuizBtnText="Next" />
			</div>
		</div>
	)
}

export default Quiz
