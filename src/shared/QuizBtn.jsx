import PropTypes from "prop-types"

const QuizBtn = (props) => {
	const {startQuizBtnText, onClick} = props

	return (
		<button
			onClick={onClick}
			className="bg-black text-white px-8 py-4 font-Poppins font-semibold rounded-lg hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300"
		>
			{startQuizBtnText}
		</button>
	)
}

export default QuizBtn

QuizBtn.propTypes = {
	startQuizBtnText: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}
