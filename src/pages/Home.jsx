import styles from "./Home.module.css"

//hooks
import useCollection from "../components/hooks/useCollection"

//componenet
import Tranzit from "../components/Tranzits";

function Home() {
  
  const {data: tranzit} = useCollection("tranzit")

  return (
    <div>
      <div className={`${styles.home} container`}>
        <Tranzit tranzit={tranzit} />
      </div>
    </div>
  )
}

export default Home