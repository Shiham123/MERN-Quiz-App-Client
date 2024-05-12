import {useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import QuizHeading from "../../shared/QuizHeading"
import {changeTheme} from "../../app/Theme/themeSlice"
// import {setUserId} from "../../app/services/resultSlice"
// import {useCreateUserMutation} from "../../app/api/userApi"

const MainPage = () => {
	// const [createUser, {isLoading}] = useCreateUserMutation()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const inputRef = useRef(null)

	const dispatch = useDispatch()
	const {enabled} = useSelector((state) => state.theme)

	const handleStartQuiz = () => {
		if (inputRef.current?.value) {
			// dispatch(setUserId(inputRef.current?.value)), createUser(inputRef.current?.value)
			setIsModalOpen(true)
			setTimeout(() => {
				setIsModalOpen(false)
			}, 5000)
		}
	}

	// if (isLoading) return <p>...loading</p>

	return (
		<div className="max-w-xl mx-auto my-10 flex justify-center items-center flex-col">
			<QuizHeading headerText="Quiz Application" />

			<ul className="list-decimal font-Poppins p-6 flex flex-col gap-4 text-xl">
				<li>You will be asked 10 questions one after another.</li>
				<li>10 Points is awarded for the correct answer.</li>
				<li>Each question has three options. You can choose only one options</li>
				<li>You can review and change answer before the quiz finish</li>
				<li>The result will be declared at the end of the quiz</li>
			</ul>

			<form className="flex flex-col">
				<input
					name="userName"
					type="text"
					placeholder="Type your name"
					className="border-2 border-black px-8 py-4 outline-0 m-4 font-Poppins font-semibold rounded-lg"
					ref={inputRef}
				/>

				<button
					onClick={handleStartQuiz}
					type="submit"
					className="bg-black text-white px-8 py-4 font-Poppins font-semibold rounded-lg hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300"
				>
					Start Quiz
				</button>
			</form>

			<button
				onClick={() => {
					dispatch(changeTheme(!enabled))
				}}
				className="bg-black my-4 text-white px-8 py-4 font-Poppins font-semibold rounded-lg hover:bg-transparent border-2 border-black hover:text-black transition-all duration-300"
			>
				{enabled ? "Dark" : "light"}
			</button>

			{isModalOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
					<p className="bg-white text-black px-12 py-20">...loading</p>
				</div>
			)}
		</div>
	)
}

export default MainPage
