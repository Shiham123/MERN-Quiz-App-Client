import PropTypes from "prop-types"

const PerDiv = (props) => {
	const {actions, userName} = props
	return (
		<div className="flex justify-between items-center my-8">
			<h2 className="font-Poppins text-2xl font-semibold">{actions}</h2>
			<p className="font-Poppins text-xl tracking-widest">{userName}</p>
		</div>
	)
}

export default PerDiv

PerDiv.propTypes = {actions: PropTypes.string.isRequired, userName: PropTypes.string.isRequired}
