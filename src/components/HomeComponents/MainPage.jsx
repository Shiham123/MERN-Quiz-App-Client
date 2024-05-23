import QuizHeading from "../../shared/QuizHeading"
import Modal from "../../shared/Modal"
import Rules from "./Rules"
import ParticipateForm from "./ParticipateForm"
import {useSelector} from "react-redux"
// import {setUserId} from "../../app/services/resultSlice"
// import {useCreateUserMutation} from "../../app/api/userApi"

const MainPage = () => {
	const {isModalOpen} = useSelector((state) => state.theme)
	// const [createUser, {isLoading}] = useCreateUserMutation()

	// const handleStartQuiz = () => {
	// 	if (inputRef.current?.value) {
	// 		dispatch(setUserId(inputRef.current?.value)), createUser(inputRef.current?.value)
	// 	}
	// }

	return (
		<div className="my-10 flex justify-center items-center flex-col">
			<QuizHeading headerText="Quiz Application" />
			<Rules />
			<ParticipateForm />

			{isModalOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
					<Modal />
				</div>
			)}
		</div>
	)
}

export default MainPage
