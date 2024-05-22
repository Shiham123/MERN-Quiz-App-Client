import SideImg from "../../assets/Img/side.png"

const Illustration = () => {
	return (
		<div>
			<img className="w-fit" src={SideImg} alt="" />
			<div className="flex gap-5 mt-[5rem]">
				<hr className="w-1/5 h-2 rounded-2xl bg-red-500" />
				<hr className="w-1/5 h-2 rounded-2xl bg-red-500" />
				<hr className="w-1/5 h-2 rounded-2xl bg-red-500" />
				<hr className="w-1/5 h-2 rounded-2xl bg-red-500" />
				<hr className="w-1/5 h-2 rounded-2xl bg-[#e8e8e8]" />
			</div>
		</div>
	)
}

export default Illustration
