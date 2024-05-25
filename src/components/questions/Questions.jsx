import {useSelector} from "react-redux"

// api calling component/ or custom hook
import useFetchQuestion from "../../hooks/useFetchQuestion.jsx"
import Loader from "../../shared/Loader.jsx"

const Questions = () => {
	const [{apiData, isLoading, serverError}] = useFetchQuestion()
	const {queue, trace} = useSelector((state) => ({
		queue: state.question.queue,
		trace: state.question.trace,
		// result: state.result.result,
	}))

	// const dispatch = useDispatch()

	// checked state control
	// const [selectedItem, setSelectedItem] = useState("")
	// const [selectedIdx, setSelectedIdx] = useState(0)

	// useEffect(() => {
	// 	dispatch(updateResultAction({trace, checked: {selectedIdx}}))
	// }, [dispatch, trace, selectedIdx])

	// const handleChooseAnswer = (index, item) => {
	// 	setSelectedItem(item),
	// 		setSelectedIdx(index),
	// 		dispatch(selectedValue({item, index})),
	// 		dispatch(isQuizCheck(true))
	// }

	// API tracing
	if (isLoading) return <Loader />
	if (serverError) return <Loader />
	if (!apiData || apiData.length == 0) return <Loader />

	const question = queue[trace]

	return (
		<div>
			<h2 className="font-Poppins text-4xl font-extrabold tracking-wider">
				{question?.question} ?
			</h2>
		</div>
	)
}

export default Questions
