import { useState } from "react"
import styles from "./Auth.module.css"
import { useLogin } from "../components/hooks/useLogin"
import { Link } from "react-router-dom"

function Login() {

  const {login} = useLogin()

  const loading = false
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    login(
      email,
      password,
    )
    setEmail("")
    setPassword("")
  }

  return (
    <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            
            <label htmlFor="">
              <span>Email:</span>
              <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
            </label>

            <label htmlFor="">
              <span>Password:</span>
              <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
            </label>

            <div className="button-wrappers">
              <p>
                <Link to="/signup">If you don't have account</Link>
              </p>
              {!loading && <button>LogIn</button>}
              {loading && <button className={styles.disabled} disabled>Loading...</button>}
            </div>
    
          </form>
        </div>
  )
}

export default Login