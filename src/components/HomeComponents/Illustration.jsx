import {useSelector} from "react-redux"
import SideImg from "../../assets/Img/side.png"
import useFetchQuestion from "../../hooks/useFetchQuestion"
import Loader from "../../shared/Loader"

const Illustration = () => {
	const [{serverError, apiData, isLoading}] = useFetchQuestion()
	const {trace} = useSelector((state) => state.question)
	const {userId} = useSelector((state) => state.result)

	if (isLoading) return <Loader />
	if (serverError) return <Loader />

	return (
		<div>
			<img className="w-fit" src={SideImg} alt="" />
			{userId && (
				<div className="flex gap-5 mt-[5rem]">
					{apiData?.question?.map((__, index) => {
						return (
							<hr
								key={index}
								className={`w-1/5 h-2 rounded-2xl ${
									index < trace + 1 ? "bg-[#bc343e]" : "bg-[#e8e8e8]"
								}`}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Illustration
