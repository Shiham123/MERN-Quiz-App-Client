import QuizBtn from "../../shared/QuizBtn"
import QuizHeading from "../../shared/QuizHeading"

const Quiz = () => {
	// prev button prevent handler
	const handleNextQuiz = () => {}

	// next button event handler
	const handlePrevQuiz = () => {}

	return (
		<div className="max-w-xl mx-auto my-10 flex justify-center items-center flex-col">
			<QuizHeading headerText="Quiz section" />

			<div className="flex justify-between items-center gap-8 my-12">
				<QuizBtn onClick={handlePrevQuiz} startQuizBtnText="Prev" />
				<QuizBtn onClick={handleNextQuiz} startQuizBtnText="Next" />
			</div>
		</div>
	)
}

export default Quiz
