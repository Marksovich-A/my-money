import styles from "./Home.module.css"

//hooks
import useCollection from "../components/hooks/useCollection"

//componenet
import Tranzit from "../components/Tranzits";
import AddTranzitForm from "../components/AddTranzitForm";

//globalContext
import { useGlobalContext } from "../components/hooks/useGlobalContext";

function Home() {
  const {user} = useGlobalContext()
  const {data: tranzit} = useCollection("tranzit", ["uid", "==", user.uid])


  return (
    <div>
      <div className={`${styles.home} container`}>
        <Tranzit tranzit={tranzit} />
        <div>
          <h2>Add new Tranzit</h2>
          <AddTranzitForm/>
        </div>
      </div>
    </div>
  )
}

export default Home