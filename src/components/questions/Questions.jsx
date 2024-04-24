import {useState} from "react"
import useFetchQuestion from "../../hooks/useFetchQuestion.jsx"

const Questions = () => {
	const [getData, setGetData] = useFetchQuestion()
	const [checked, setChecked] = useState(false)

	const handleChooseAnswer = () => {
		setChecked(true)
	}

	if (!getData.apiData || getData.apiData.length === 0) {
		return <div>Loading...</div>
	}

	const question = getData.apiData[0]

	if (!question.options || question.options.length === 0) {
		return <div>No options available for this question.</div>
	}

	return (
		<div>
			<h2 className="font-Poppins text-2xl font-semibold">Simple Question</h2>
			<ul key={question.id}>
				{question.options.map((item, index) => (
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
