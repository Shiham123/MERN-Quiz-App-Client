import {useRef} from "react"
import {FaArrowRightLong} from "react-icons/fa6"
import {useDispatch} from "react-redux"
import {modalOpen} from "../../app/Theme/themeSlice"

const ParticipateForm = () => {
	const dispatch = useDispatch()
	const inputRef = useRef(null)

	const submitCheckUserParticipate = (event) => {
		event.preventDefault()
		dispatch(modalOpen(true))
	}

	return (
		<>
			<form className="flex flex-col" onSubmit={submitCheckUserParticipate}>
				<input
					name="userName"
					type="text"
					placeholder="Type your name"
					className="border-2 border-black px-8 py-4 outline-0 m-4 font-Poppins font-semibold rounded-lg"
					ref={inputRef}
				/>

				<button
					type="submit"
					className="group flex justify-center items-center gap-4 bg-gradient-to-tr from-[#c13640] via-[#d83e49] to-[#eb444f] text-white font-Poppins px-8 py-4 rounded-lg font-semibold text-xl"
				>
					<span>Start Quiz</span>
					<FaArrowRightLong
						color="white"
						className="transition-all duration-200 group-hover:translate-x-2"
					/>
				</button>
			</form>
		</>
	)
}

export default ParticipateForm
