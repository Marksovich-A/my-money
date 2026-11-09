import styles from "./Navbar.module.css";

// rrd
import { Link, NavLink } from "react-router-dom";

const user = false;

function Navbar() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.logo}>
          myMoney
        </Link>

        {user && (
          <div className={styles.avatar}>
            <span>Hello Alibek</span>
            <img src="https://picsum.photos/400" alt="" />
            <button>LogOut</button>
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