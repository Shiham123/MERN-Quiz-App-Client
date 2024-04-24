import {useSelector} from "react-redux"
import QuizBtn from "../../shared/QuizBtn"
import QuizHeading from "../../shared/QuizHeading"
import Questions from "../questions/Questions"

const Quiz = () => {
	const {trace, answer, queue} = useSelector((state) => state.question)
	const {result, userId} = useSelector((state) => state.result)

	const handleNextQuiz = () => {}
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
