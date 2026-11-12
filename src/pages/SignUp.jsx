import { useState } from "react"
import styles from "./Auth.module.css"

function SignUp() {

  const loading = false

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({userName,
      email,
      password}
    )
  }

  return (
    <div className={styles.formWrapper}>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Signup</h1>

        <label htmlFor="">
          <span>Display Name:</span>
          <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" />
        </label>

        <label htmlFor="">
          <span>Email:</span>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" />
        </label>

        <label htmlFor="">
          <span>Password:</span>
          <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" />
        </label>

        {!loading && <button>LogIn</button>}
        {loading && <button className={styles.disabled} disabled>Loading...</button>}
      </form>
    </div>
  )
}

export default SignUp