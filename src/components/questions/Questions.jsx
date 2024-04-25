import {useState} from "react"
import useFetchQuestion from "../../hooks/useFetchQuestion.jsx"
import {useSelector} from "react-redux"

const Questions = () => {
	const [{apiData, isLoading, serverError}] = useFetchQuestion()
	const [checked, setChecked] = useState(false)
	const {queue, trace} = useSelector((state) => state.question)

	const handleChooseAnswer = () => setChecked(true)

	if (isLoading) return <div>...Loading</div>
	if (serverError) return <div>Server error</div>
	if (!apiData || apiData.length == 0) return <div>...API loading</div>

	const question = queue[trace]

	return (
		<div>
			<h2 className="font-Poppins text-2xl font-semibold">{question?.question}</h2>
			<ul key={question?.id}>
				{question?.options?.map((item, index) => (
					<li key={index} className="flex justify-end items-center gap-4 flex-row-reverse">
						<div>
							<input
								type="radio"
								id={`q${index}-option`}
								value={false}
								name="options"
								onChange={handleChooseAnswer}
								className="appearance-none"
							/>
							<label
								htmlFor={`q${index}-option`}
								className="font-Poppins text-xl font-semibold tracking-widest"
							>
								{item}
							</label>
						</div>
						<div className="w-6 h-6 rounded-full border-4 border-gray-300 relative">
							{checked && (
								<div className="absolute top-[2px] left-[2px] bg-gray-400 w-3 h-3 rounded-full"></div>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Questions
