import { useState } from "react"
import styles from "./Auth.module.css"

function Login() {

  const loading = false
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    e.preventDefault()
    console.log(
      password,
      email
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
              <input onChange={() => setPassword(e.target.value)} type="password" value={password} />
            </label>
    
            {!loading && <button>LogIn</button>}
            {loading && <button className={styles.disabled} disabled>Loading...</button>}
          </form>
        </div>
  )
}

export default Login