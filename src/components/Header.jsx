import { NETFLIX_LOGO } from "../utils/constant"

const Header = () => {
    return (
        <div className="absolute w-48 mx-8 py-2 bg-gradient-to-b from-black z-10">
            <img src={NETFLIX_LOGO} alt="logo" />
        </div>
    )
}

export default Header