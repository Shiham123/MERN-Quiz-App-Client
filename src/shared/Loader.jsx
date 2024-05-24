import {ClockLoader} from "react-spinners"

const Loader = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
			<div className="px-10 py-10 bg-white rounded-lg flex justify-center items-center lg:flex-row md:flex-col flex-col">
				<ClockLoader color="#bc343e" size={100} loading={true} />
			</div>
		</div>
	)
}

export default Loader
