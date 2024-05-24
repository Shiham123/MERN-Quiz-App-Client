import {motion} from "framer-motion"

import Illustration from "../HomeComponents/Illustration"
import Quiz from "./Quiz"

const QuizPage = () => {
	return (
		<motion.div
			initial={{opacity: 0, x: 500}}
			animate={{opacity: 1, x: 0}}
			transition={{type: "spring", stiffness: 80, damping: 20, duration: 6}}
			className="2xl:flex xl:flex lg:flex md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col flex py-[9rem] px-8 scrollbar-hide justify-center items-center gap-32"
		>
			<Illustration />
			<Quiz />
		</motion.div>
	)
}

export default QuizPage
