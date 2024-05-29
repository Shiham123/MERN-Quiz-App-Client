import {useDispatch, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

// components
import QuizBtn from "../../shared/QuizBtn"
import Questions from "../questions/Questions"

// redux components
import {moveNextAction} from "../../app/services/questionSlice"
import {pushResultAction} from "../../app/services/resultSlice"
import {isQuizCheck} from "../../app/Theme/themeSlice"
import useFetchQuestion from "../../hooks/useFetchQuestion"
import Loader from "../../shared/Loader"

const Quiz = () => {
	const [{apiData, isLoading, serverError}] = useFetchQuestion()
	const {trace, queue, answer} = useSelector((state) => state.question)
	const {result, userId} = useSelector((state) => state.result)

	const dispatch = useDispatch()

	const handleNextQuiz = () => {
		dispatch(moveNextAction())

		if (result.length <= trace)
			dispatch(pushResultAction(answer.index)), dispatch(isQuizCheck(false))
	}

	// const handlePrevQuiz = () => dispatch(moveToPrevAction())

	if (result.length && result.length >= queue.length) {
		return <Navigate to={`/result`} replace={true} />
	}

	if (isLoading || serverError) return <Loader />

	return (
		<div className="my-10 flex justify-center items-center flex-col w-1/2 relative">
			{userId && (
				<div className="absolute -top-[10rem] -right-[3rem] bg-gradient-to-tr from-[#c33741] via-[#d73e48] to-[#ed4550] text-2xl px-8 py-4 rounded-lg text-white font-Poppins font-semibold">
					Question {trace + 1}/ {apiData?.question?.length}
				</div>
			)}

			<Questions />

			<div className="flex justify-between items-center gap-8 my-12">
				{/* {trace > 0 && <QuizBtn onClick={() => handlePrevQuiz()} startQuizBtnText="Prev Question" />} */}
				<QuizBtn onClick={() => handleNextQuiz()} startQuizBtnText="Next Question" />
			</div>
		</div>
	)
}

export default Quiz
