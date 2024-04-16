import PropTypes from "prop-types"

const StartQuizBtn = (props) => {
	const {startQuizBtnText} = props
	return (
		<button className="bg-black text-white px-8 py-4 font-Poppins font-semibold rounded-lg hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300">
			{startQuizBtnText}
		</button>
	)
}

export default StartQuizBtn

StartQuizBtn.propTypes = {startQuizBtnText: PropTypes.string.isRequired}
