import styles from "./Auth.module.css"

function SignUp() {

  const loading = true

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Signup</h1>
        <label htmlFor="">
          <span>Display Name:</span>
          <input type="text" />
        </label>
        <label htmlFor="">
          <span>Email:</span>
          <input type="email" />
        </label>
        <label htmlFor="">
          <span>Password:</span>
          <input type="password" />
        </label>

        {!loading && <button>LogIn</button>}
        {loading && <button className={styles.disabled} disabled>Loading...</button>}
      </form>
    </div>
  )
}

export default SignUp