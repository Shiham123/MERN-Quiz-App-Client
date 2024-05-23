import PropTypes from "prop-types"
import ModalImg from "../assets/svg/undraw_join_re_w1lh.svg"
import {ClockLoader} from "react-spinners"
import {useDispatch} from "react-redux"
import {modalOpen} from "../app/Theme/themeSlice"

const Modal = () => {
	const dispatch = useDispatch()

	return (
		<div className="px-10 bg-white rounded-lg flex justify-center items-center lg:flex-row md:flex-col flex-col">
			<img src={ModalImg} className="px-4 py-8 w-1/2 h-1/2 rounded-lg" alt="" />

			<div className="flex justify-center items-center flex-col">
				<h1 className="text-2xl font-Poppins capitalize py-8">
					your name is already participate a quiz.
				</h1>
				<p className="text-xl font-Poppins capitalize opacity-70">Pleas try with different name</p>
				<button
					onClick={() => dispatch(modalOpen(false))}
					className="bg-[#6c63ff] px-4 py-2 m-8 rounded-lg text-white font-Poppins text-[17px] capitalize hover:bg-transparent hover:border-[2px] hover:border-[#6c63ff] hover:text-[#6c63ff] hover:font-semibold transition-all duration-200"
				>
					Close the modal
				</button>
			</div>

			<ClockLoader color="#bc343e" />
		</div>
	)
}

export default Modal

Modal.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
}
