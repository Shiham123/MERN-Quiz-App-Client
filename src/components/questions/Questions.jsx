import {useState} from "react"

const Questions = () => {
	const [checked, setChecked] = useState(false)

	const handleChooseAnswer = () => {
		setChecked(true)
	}

	return (
		<div>
			<h2 className="font-Poppins text-2xl font-semibold">Simple Question</h2>
			<ul>
				<li className="flex justify-end items-center gap-4 flex-row-reverse">
					<div>
						<input
							type="radio"
							id="q1-option"
							value={false}
							name="options"
							onChange={handleChooseAnswer}
							className="appearance-none "
						/>
						<label htmlFor="q1-option">Option</label>
					</div>
					<div className="w-6 h-6 rounded-full border-4 border-gray-300 relative">
						{checked && (
							<div className="absolute top-[2px] left-[2px] bg-gray-400 w-3 h-3 rounded-full"></div>
						)}
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Questions
