import { BiSolidTrashAlt } from "react-icons/bi";
import styles from "./Tranzit.module.css"


function Tranzit({tranzit}) {
  return (
    <div>
        {tranzit && tranzit.map((item) => {
            const {price, id, title} = item
            return (
                <div key={id} className={styles.card}>
                    <h4>{title}</h4>
                    <p>{price}</p>
                    <span className={styles.trash}>
                        <BiSolidTrashAlt />
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default Tranzit