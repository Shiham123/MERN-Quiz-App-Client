import {useDispatch} from "react-redux"
import QuizBtn from "../../shared/QuizBtn"
import QuizHeading from "../../shared/QuizHeading"
import Questions from "../questions/Questions"
import {moveNextAction} from "../../app/services/questionSlice"

const Quiz = () => {
	const dispatch = useDispatch()

	const handleNextQuiz = () => dispatch(moveNextAction())

	const handlePrevQuiz = () => {}

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
