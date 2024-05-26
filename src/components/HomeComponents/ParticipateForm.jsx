import {useRef} from "react"
import {FaArrowRightLong} from "react-icons/fa6"
import {useDispatch} from "react-redux"

// redux slice
import {modalOpen} from "../../app/Theme/themeSlice"
import {setUserId} from "../../app/services/resultSlice"

// mutations
import {useCreateUserMutation} from "../../app/api/userApi"
import Loader from "../../shared/Loader"
import {useNavigate} from "react-router-dom"

const ParticipateForm = () => {
	const [createUser, {isLoading}] = useCreateUserMutation()
	const dispatch = useDispatch()
	const inputRef = useRef(null)
	const navigate = useNavigate()

	const submitCheckUserParticipate = (event) => {
		event.preventDefault()
		const username = inputRef.current.value.toLowerCase().replace(/\s+/g, "")

		dispatch(setUserId(username))

		createUser({username})
			.then((res) => {
				const success = res?.data?.success ?? res.error?.data?.success
				switch (success) {
					case true:
						dispatch(modalOpen(false)), navigate("/quiz", {replace: true})
						break

					case false:
						dispatch(modalOpen(true)), dispatch(setUserId(null))
						break

					default:
						throw new Error("an unexpected error occurred")
				}
			})
			.catch((err) => new Error(err))
	}

	if (isLoading) return <Loader />

	return (
		<>
			<form
				className="flex md:flex-col sm:flex-col xs:flex-col justify-center items-center w-full"
				onSubmit={submitCheckUserParticipate}
			>
				<input
					name="userName"
					type="text"
					placeholder="Type your name"
					className="border-none focus:outline-[1px] focus:outline-[#bc343e] px-8 py-4 outline-0 m-4 font-Poppins font-semibold rounded-lg w-1/2 md:w-full sm:w-full xs:w-full"
					ref={inputRef}
				/>

				<button
					type="submit"
					className="group flex justify-center items-center gap-4 bg-gradient-to-tr from-[#c13640] via-[#d83e49] to-[#eb444f] text-white font-Poppins text-xl py-4 rounded-lg font-semibold w-1/2 md:w-full sm:w-full xs:w-full"
				>
					<span>Start Quiz</span>
					<FaArrowRightLong
						size={30}
						color="white"
						className="transition-all duration-200 group-hover:translate-x-2"
					/>
				</button>
			</form>
		</>
	)
}

export default ParticipateForm
