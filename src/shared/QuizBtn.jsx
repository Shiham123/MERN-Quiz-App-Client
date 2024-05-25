import PropTypes from "prop-types"
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6"

const QuizBtn = (props) => {
	const {startQuizBtnText, onClick} = props

	return startQuizBtnText === "Prev Question" ? (
		<button
			onClick={onClick}
			className="bg-gradient-to-tr font-Poppins text-black border-[1px] border-black px-12 py-4 text-2xl tracking-widest rounded-lg flex justify-center items-center gap-4 group font-bold"
		>
			<FaArrowLeftLong
				size={30}
				color="black"
				className="transition-all duration-200 group-hover:-translate-x-2"
			/>
			<span>{startQuizBtnText}</span>
		</button>
	) : (
		<button
			onClick={onClick}
			className="bg-gradient-to-tr from-[#c33741] via-[#d73e48] to-[#ed4550] font-Poppins text-white px-12 py-4 text-2xl tracking-widest rounded-lg flex justify-center items-center gap-4 group font-bold"
		>
			<span>{startQuizBtnText}</span>
			<FaArrowRightLong
				size={30}
				color="white"
				className="transition-all duration-200 group-hover:translate-x-2"
			/>
		</button>
	)
}

QuizBtn.propTypes = {
	startQuizBtnText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default QuizBtn
