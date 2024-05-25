import {useDispatch, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

// components
import QuizBtn from "../../shared/QuizBtn"
import Questions from "../questions/Questions"

// redux components
import {moveNextAction, moveToPrevAction} from "../../app/services/questionSlice"
import {pushResultAction} from "../../app/services/resultSlice"
import {isQuizCheck} from "../../app/Theme/themeSlice"

const Quiz = () => {
	const {trace, queue, answer} = useSelector((state) => state.question)
	const {result} = useSelector((state) => state.result)

	const dispatch = useDispatch()

	const handleNextQuiz = () => {
		dispatch(moveNextAction())

		if (result.length <= trace)
			dispatch(pushResultAction(answer.index)), dispatch(isQuizCheck(false))
	}

	const handlePrevQuiz = () => dispatch(moveToPrevAction())

	if (result.length && result.length >= queue.length) {
		return <Navigate to={`/result`} replace={true} />
	}

	return (
		<div className="my-10 flex justify-center items-center flex-col w-1/2">
			<Questions />

			<div className="flex justify-between items-center gap-8 my-12">
				{trace > 0 && <QuizBtn onClick={handlePrevQuiz} startQuizBtnText="Prev Question" />}
				<QuizBtn onClick={handleNextQuiz} startQuizBtnText="Next Question" />
			</div>
		</div>
	)
}

export default Quiz
