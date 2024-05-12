import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types"

const PrivateRoute = ({children}) => {
	// const {mutations} = useSelector((state) => state.user)
	const {userId} = useSelector((state) => state.result)

	return userId ? children : <Navigate to={"/"} replace={true} />
}

export default PrivateRoute

PrivateRoute.propTypes = {children: PropTypes.element.isRequired}
