import {useDispatch} from "react-redux"
import {motion} from "framer-motion"

// manually import img
import ModalImg from "../assets/svg/undraw_join_re_w1lh.svg"

// redux slice
import {modalOpen} from "../app/Theme/themeSlice"

const Modal = () => {
	const dispatch = useDispatch()

	return (
		<motion.div
			initial={{opacity: 0, y: -100}}
			animate={{opacity: 1, y: 0}}
			transition={{type: "spring", stiffness: 100, damping: 10}}
			className="px-10 py-10 bg-white rounded-lg flex justify-center items-center lg:flex-row md:flex-col flex-col"
		>
			<img src={ModalImg} className="px-4 py-8 w-1/2 h-1/2 rounded-lg m-auto text-center" alt="" />
			<div className="flex justify-center items-center flex-col">
				<h1 className="text-2xl font-Poppins capitalize py-8 text-[#bc343e] font-semibold">
					your name is already participate a quiz.
				</h1>
				<p className="text-xl font-Poppins capitalize opacity-70">Pleas try with different name</p>
				<button
					onClick={() => dispatch(modalOpen(false))}
					className="flex justify-center items-center gap-4 bg-gradient-to-tr from-[#c13640] via-[#d83e49] to-[#eb444f] text-white font-Poppins px-8 py-4 rounded-lg font-semibold text-xl my-4 transition-all duration-300 ease-in-out hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent hover:text-[#bc343e] hover:border-[2px] hover:border-[#bc343e]"
				>
					Back to home page
				</button>
			</div>
		</motion.div>
	)
}

export default Modal
