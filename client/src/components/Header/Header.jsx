import "./Header.css"
import { Link, useLocation } from "react-router-dom"

function Header({ user, userLogout }) {
	const { pathname } = useLocation()
	console.log(location)
	return (
		<div className="header">
			<div className="Filler"></div>
			<div className="Title">
				<Link to={pathname === "/app" ? "/" : "/app"}>
					<img
						className="TitleImg"
						src="/Images/cooltext402280913904255.png"
						alt="Save Quest"
					/>
				</Link>
			</div>
			<div className="LoginWrapper" id="HeaderLogin">
				{user ? (
					<button className="nes-btn" onClick={() => userLogout()}>
						LOGOUT
					</button>
				) : (
					""
				)}
			</div>
		</div>
	)
}

export default Header
