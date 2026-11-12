import { BiSolidTrashAlt } from "react-icons/bi";
import styles from "./Tranzit.module.css"
import { useFireStore } from "./hooks/useFireStore";


function Tranzit({tranzit}) {
    const {deleteDocument} = useFireStore()
  return (
    <div>
        {tranzit && tranzit.map((item) => {
            const {price, id, title} = item
            return (
                <div key={id} className={styles.card}>
                    <h4>{title}</h4>
                    <p>{price}</p>
                    <span onClick={() => deleteDocument(id)} className={styles.trash}>
                        <BiSolidTrashAlt />
                    </span>
                </div>
            )
        })}
    </div>
  )
}

export default Tranzit