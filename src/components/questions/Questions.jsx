import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {FaCheck} from "react-icons/fa"

// api calling component/ or custom hook
import useFetchQuestion from "../../hooks/useFetchQuestion.jsx"
import Loader from "../../shared/Loader.jsx"

// style component import
import style from "../../scss/Options.module.scss"

// all slice import
import {selectedValue} from "../../app/services/questionSlice.js"
import {updateResultAction} from "../../app/services/resultSlice.js"
import {isQuizCheck} from "../../app/Theme/themeSlice.js"

const Questions = () => {
	const [{apiData, isLoading, serverError}] = useFetchQuestion()
	const {queue, trace} = useSelector((state) => state.question)
	const {result} = useSelector((state) => state.result)

	const dispatch = useDispatch()

	// checked state control
	const [selectedItem, setSelectedItem] = useState("")
	const [selectedIdx, setSelectedIdx] = useState(0)

	useEffect(() => {
		dispatch(updateResultAction({trace, checked: {selectedIdx}}))
	}, [dispatch, trace, selectedIdx])

	const handleChooseAnswer = (index, item) => {
		setSelectedItem(item),
			setSelectedIdx(index),
			dispatch(selectedValue({item, index})),
			dispatch(isQuizCheck(true))
	}

	// API tracing
	if (isLoading) return <Loader />
	if (serverError) return <Loader />
	if (!apiData || apiData.length == 0) return <Loader />

	const question = queue[trace]

	return (
		<div>
			{/* question array */}
			<h2 className="font-Poppins text-4xl font-extrabold tracking-wider">
				{question?.question} ?
			</h2>

			{/* map the array */}
			<div className={`${style.questionMarkBg} mt-24 flex justify-center items-center flex-col`}>
				{question?.options.map((item, index) => (
					<ul key={index}>
						<li
							onClick={() => handleChooseAnswer(index, item)}
							className={`my-4 py-8 bg-white text-black text-2xl text-center font-Poppins font-extrabold tracking-widest shadow-2xl rounded-lg cursor-pointer w-[450px] flex justify-between items-center px-12 ${
								selectedItem === item || result[trace] === index
									? "border-4 border-[#2bd30a]"
									: "border-[1px] border-[#e1e1e1]"
							}`}
						>
							<p>{item}</p>
							{selectedItem === item && <FaCheck color="#2bd30a" />}
						</li>
					</ul>
				))}
			</div>
		</div>
	)
}

export default Questions
