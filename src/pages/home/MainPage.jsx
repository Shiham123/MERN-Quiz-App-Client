import {useRef} from "react"
import QuizHeading from "../../shared/QuizHeading"
import {useDispatch, useSelector} from "react-redux"
import {changeTheme} from "../../app/Theme/themeSlice"

const MainPage = () => {
	const formRef = useRef()
	const dispatch = useDispatch()
	const {enabled} = useSelector((state) => state.theme)

	const handleSubmit = (event) => {
		event.preventDefault()
		const getFormData = new FormData(event.target)
		const userName = getFormData.get("userName")
		formRef.current.reset()
	}

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

			<form className="flex flex-col" ref={formRef} onSubmit={handleSubmit}>
				<input
					name="userName"
					type="text"
					placeholder="Type your name"
					className="border-2 border-black px-8 py-4 outline-0 m-4 font-Poppins font-semibold rounded-lg"
				/>

				<button
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
		</div>
	)
}

export default MainPage
