import styles from "./Home.module.css"

//hooks
import useCollection from "../components/hooks/useCollection"

//componenet
import Tranzit from "../components/Tranzits";
import AddTranzitForm from "../components/AddTranzitForm";

function Home() {
  
  const {data: tranzit} = useCollection("tranzit")

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