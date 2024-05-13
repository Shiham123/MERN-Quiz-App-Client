import PropTypes from "prop-types"

const Modal = (props) => {
	const {isModalOpen, setIsModalOpen} = props

	return (
		<div className="bg-white px-10 py-4">
			<p className="">...loading</p>
			<button onClick={() => setIsModalOpen(!isModalOpen)} className="text-black">
				Close modal
			</button>
		</div>
	)
}

export default Modal

Modal.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
}
