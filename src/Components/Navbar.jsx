import {AuthContext} from  "../Contexts/AuthContext"
import { useContext } from "react"

export const Navbar = () => {
    const { isAuth } = useContext(AuthContext)
    const {toggleAuth}= useContext(AuthContext)
    return (
      <>
        <nav>
          <button onClick={toggleAuth}>
            {" "}
            {isAuth ? "User Logout" : "User Login"}{" "}
          </button>
        </nav>
      </>
    );
}