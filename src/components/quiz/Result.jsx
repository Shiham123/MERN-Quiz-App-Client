import PropTypes from "prop-types"
import QuizHeading from "../../shared/QuizHeading"
import QuizBtn from "../../shared/QuizBtn"
import {Link} from "react-router-dom"
import ResultTable from "./ResultTable"
import {useDispatch} from "react-redux"
import {resetResultAction} from "../../app/services/resultSlice"
import {resetAllAction} from "../../app/services/questionSlice"

const PerDiv = ({userName, actions}) => (
	<div className="flex justify-between items-center my-8">
		<h2 className="font-Poppins text-2xl font-semibold">{actions}</h2>
		<p className="font-Poppins text-xl tracking-widest">{userName}</p>
	</div>
)

const Result = () => {
	const dispatch = useDispatch()
	const handleRestart = () => {
		dispatch(resetResultAction(), resetAllAction())
	}

	return (
		<div className="max-w-xl mx-auto my-10 flex justify-center items-center flex-col">
			<QuizHeading headerText="Quiz Result" />

			{/* Per div for user history */}
			<div className="border-[2px] border-black/50 w-full p-4 m-4 rounded-lg">
				<PerDiv actions="User Name" userName="Shiham Ibne Yousuf" />
				<PerDiv actions="Total Quiz Points : " userName="20" />
				<PerDiv actions="Total Questions : " userName="05" />
				<PerDiv actions="Total Attempts : " userName="03" />
				<PerDiv actions="Total Earn Points : " userName="30" />
				<PerDiv actions="Quiz Result" userName="Passed" />
			</div>

			{/* Restart quiz actions */}
			<Link to={"/"} onClick={handleRestart}>
				<QuizBtn startQuizBtnText="Restart" />
			</Link>

			{/* Result table  */}
			<ResultTable />
		</div>
	)
}

export default Result

PerDiv.propTypes = {userName: PropTypes.string.isRequired, actions: PropTypes.string.isRequired}
