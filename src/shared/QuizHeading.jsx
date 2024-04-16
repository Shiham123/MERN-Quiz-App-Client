import PropTypes from "prop-types"

const QuizHeading = (props) => {
	const {headerText} = props

	return (
		<div className="flex justify-center items-center text-5xl font-semibold border-4 border-yellow-400 p-4 w-[1000px]">
			{headerText}
		</div>
	)
}

export default QuizHeading

QuizHeading.propTypes = {headerText: PropTypes.string.isRequired}
