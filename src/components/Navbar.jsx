import styles from "./Navbar.module.css";

// rrd
import { Link, NavLink } from "react-router-dom";

// context 
import { useGlobalContext } from "./hooks/useGlobalContext";

//hooks
import { useSignout } from "./hooks/useSignout";


function Navbar() {

  const {user} = useGlobalContext()
  const {signoutUser} = useSignout()

  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.logo}>
          myMoney
        </Link>

        {user && (
          <div className={styles.avatar}>
            <span>Hello {user.displayName}</span>
            <img src="https://picsum.photos/400" alt="" />
            <button onClick={signoutUser}>LogOut</button>
          </div>
        )}

        {!user && (
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;