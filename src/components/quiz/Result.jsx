import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useEffect} from "react"

// shared component
import QuizHeading from "../../shared/QuizHeading"
import QuizBtn from "../../shared/QuizBtn"

// redux action
import {resetResultAction} from "../../app/services/resultSlice"
import {resetAllAction} from "../../app/services/questionSlice"
import {getFinalResult} from "../../app/Theme/themeSlice"

// scss file
import style from "../../scss/Result.module.scss"

const Result = () => {
	const {result} = useSelector((state) => state.result)
	const {correctAnswers} = useSelector((state) => state.question)

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
		<div className={`flex justify-center items-center flex-col ${style.resultBg} py-[11rem]`}>
			<div className={`${style.resultSecondBg} w-2/3 bg-white py-10`}>
				<QuizHeading headerText="Quiz Result" />

				<section className="flex flex-col justify-center items-center my-10">
					{/* div one */}
					<div className="flex justify-between items-center bg-[#f5f5f5] rounded-full w-2/3 my-2">
						<div className="bg-[#ededed] flex justify-between rounded-full w-2/3">
							<h1 className="font-Poppins text-4xl font-bold py-6 px-20 bg-[#e2e2e2] rounded-full tracking-wide text-center">
								Your score:
							</h1>
							<h1 className="font-Poppins text-4xl font-bold py-6 px-8 rounded-full">60% </h1>
						</div>
						<h1 className="font-Poppins text-4xl font-bold py-6 px-8 rounded-full">60 Points</h1>
					</div>

					{/* div two */}
					<div className="flex justify-between items-center bg-[#f5f5f5] rounded-full w-2/3 my-2">
						<div className="bg-[#ededed] flex justify-between rounded-full w-2/3">
							<h1 className="font-Poppins text-4xl font-bold py-6 px-14 bg-[#e2e2e2] rounded-full">
								Passing score:
							</h1>
							<h1 className="font-Poppins text-4xl font-bold py-6 px-8 rounded-full">80% </h1>
						</div>
						<h1 className="font-Poppins text-4xl font-bold py-6 px-8 rounded-full">80 Points</h1>
					</div>

					<div>
						<h2>Result</h2>
						<p>You did not pass the test</p>
						<p>Better luck next time</p>
					</div>
				</section>

				{/* Restart quiz actions */}
				<Link to={"/"}>
					<QuizBtn startQuizBtnText="Restart" onClick={handleRestart} />
				</Link>
			</div>
		</div>
	)
}

export default Result
