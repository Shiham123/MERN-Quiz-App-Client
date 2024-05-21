import PropTypes from "prop-types"

const QuizHeading = (props) => {
	const {headerText} = props

	return <div className="flex justify-center items-center text-5xl">{headerText}</div>
}

export default QuizHeading

QuizHeading.propTypes = {headerText: PropTypes.string.isRequired}
