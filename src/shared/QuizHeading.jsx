import PropTypes from "prop-types"

const QuizHeading = (props) => {
	const {headerText} = props

	return (
		<div className="flex justify-center items-center font-extrabold font-Poppins text-6xl py-4">
			{headerText}
		</div>
	)
}

export default QuizHeading

QuizHeading.propTypes = {headerText: PropTypes.string.isRequired}
