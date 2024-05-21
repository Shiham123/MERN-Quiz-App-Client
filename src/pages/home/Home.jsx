import Illustration from "../../components/HomeComponents/Illustration"
import MainPage from "../../components/HomeComponents/MainPage"
import Styles from "../../scss/Home.module.scss"

const Home = () => {
	return (
		<div
			className={`${Styles.homeSection} 2xl:flex xl:flex lg:flex md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col flex py-[9rem] px-8 scrollbar-hide`}
		>
			<Illustration />
			<MainPage />
		</div>
	)
}

export default Home
