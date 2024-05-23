import {motion} from "framer-motion"

// components
import Illustration from "../../components/HomeComponents/Illustration"
import MainPage from "../../components/HomeComponents/MainPage"

const Home = () => {
	return (
		<motion.div
			initial={{opacity: 0, scale: 0}}
			animate={{opacity: 1, scale: 1}}
			transition={{type: "spring", stiffness: 80, damping: 20}}
			className={`2xl:flex xl:flex lg:flex md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col flex py-[9rem] px-8 scrollbar-hide justify-center items-center gap-32`}
		>
			<Illustration />
			<MainPage />
		</motion.div>
	)
}

export default Home
