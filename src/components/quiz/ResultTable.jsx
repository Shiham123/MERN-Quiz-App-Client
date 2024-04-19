const ResultTable = () => {
	return (
		<div className="overflow-x-auto my-10">
			<table className="table-auto border-collapse border border-gray-400">
				{/* table headers */}
				<thead className="bg-gray-200">
					<tr>
						<th className="border border-gray-400 px-4 py-2">Name</th>
						<th className="border border-gray-400 px-4 py-2">Attempts</th>
						<th className="border border-gray-400 px-4 py-2">Earn Points</th>
						<th className="border border-gray-400 px-4 py-2">Result</th>
					</tr>
				</thead>
				{/* table body */}
				<tbody>
					<tr>
						<td className="border border-gray-400 px-4 py-2">Daily tuition</td>
						<td className="border border-gray-400 px-4 py-2">03</td>
						<td className="border border-gray-400 px-4 py-2">20</td>
						<td className="border border-gray-400 px-4 py-2">Passed</td>
					</tr>
					{/* Add more <tr> for additional rows */}
				</tbody>
			</table>
		</div>
	)
}

export default ResultTable
