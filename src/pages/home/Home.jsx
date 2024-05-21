import Illustration from "../../components/HomeComponents/Illustration"
import MainPage from "../../components/HomeComponents/MainPage"
import Styles from "../../scss/Home.module.scss"

const Home = () => {
	return (
		<div className={`${Styles.homeSection} flex py-[9rem]`}>
			<Illustration />
			<MainPage />
		</div>
	)
}

export default Home
