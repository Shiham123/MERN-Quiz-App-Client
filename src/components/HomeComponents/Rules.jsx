const Rules = () => {
	return (
		<>
			<ul className="list-disc font-Poppins p-6 flex flex-col gap-4 text-2xl font-semibold bg-white">
				<li className="first-letter:capitalize">
					You will be asked 10 questions one after another.
				</li>
				<li className="first-letter:capitalize">10 Points is awarded for the correct answer.</li>
				<li className="first-letter:capitalize">
					Each question has three options. You can choose only one options
				</li>
				<li className="first-letter:capitalize">
					You can review and change answer before the quiz finish
				</li>
				<li className="first-letter:capitalize">
					The result will be declared at the end of the quiz
				</li>
				<li className="first-letter:capitalize">you cannot participate quiz at same name twice</li>
			</ul>
		</>
	)
}

export default Rules
