import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import {IoClose} from "react-icons/io5"
import {FaCheck} from "react-icons/fa6"

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

	const [isTrue, setIsTrue] = useState(0)

	// reset the all action
	const handleRestart = () => {
		dispatch(resetResultAction())
		dispatch(resetAllAction())
	}

	useEffect(() => {
		let trueCount = 0
		let falseCount = 0

		for (let i = 0; i < result.length; i++) {
			if (result[i] === correctAnswers[i]) {
				trueCount++
			} else {
				falseCount++
			}
		}

		setIsTrue(trueCount)

		dispatch(getFinalResult({trueValue: trueCount, falseValue: falseCount}))
	}, [dispatch, correctAnswers, result])

	return (
		<div className={`flex justify-center items-center flex-col ${style.resultBg} py-[5rem]`}>
			<div className={`${style.resultSecondBg} w-2/3 bg-white py-10`}>
				<QuizHeading headerText="Quiz Result" />

				<section className="flex flex-col justify-center items-center my-10">
					{/* div one */}
					<div className="flex justify-between items-center bg-[#f5f5f5] rounded-full w-2/3 my-2">
						<div className="bg-[#ededed] flex justify-between rounded-full w-2/3">
							<h1 className="font-Poppins text-4xl font-bold py-6 px-20 bg-[#e2e2e2] rounded-full tracking-wide text-center">
								Your score:
							</h1>
							<h1 className="font-Poppins text-4xl font-bold py-6 px-8 rounded-full">
								{isTrue * 10} %
							</h1>
						</div>
						<h1 className="font-Poppins text-4xl font-bold py-6 px-8 rounded-full">
							{isTrue * 10} Points
						</h1>
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

					<div className="flex flex-col justify-center items-center">
						<h2 className="text-3xl font-Poppins font-semibold py-8">Result</h2>
						{isTrue > 8 ? (
							<div className="flex flex-col justify-center items-center">
								<p className="bg-[#ededed] flex justify-center items-center py-4 px-8 rounded-full gap-4">
									<FaCheck color="#bc343e" size={30} />
									<span className="font-Poppins font-semibold">You passed the test!</span>
								</p>
								<p className="text-3xl font-Poppins text-[#28a745] py-8">Congratulations!</p>
							</div>
						) : (
							<div className="flex flex-col justify-center items-center">
								<p className="bg-[#ededed] flex justify-center items-center py-4 px-8 rounded-full gap-4">
									<IoClose color="#bc343e" size={30} />
									<span className="font-Poppins font-semibold">You did not pass the test</span>
								</p>
								<p className="text-3xl font-Poppins text-[#bc343e] py-8">Better luck next time!</p>
							</div>
						)}
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
