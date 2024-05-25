import PropTypes from "prop-types"
import {FaArrowRightLong} from "react-icons/fa6"

const QuizBtn = (props) => {
	const {startQuizBtnText, onClick} = props

	return (
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

export default QuizBtn

QuizBtn.propTypes = {
	startQuizBtnText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
