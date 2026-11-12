import { useState } from "react"
import styles from "./AddTranzitForm.module.css"
import { toast } from "sonner"
import { useFireStore } from "./hooks/useFireStore"


function AddTranzitForm() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  
  const {addDocument} = useFireStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title.trim() || !price.trim()) {
      toast.error("Please, fill all fileds")
      return
    }
   try {
     await addDocument({
      title, 
      price: Number(price)
    })
    setPrice("")
    setTitle("")
   } catch(err) {
    console.log("FIREBASE XATOSI: ", err.message)
    toast.error("saqlashda Hatolik yuz berdi")
   }
  }

  return (
      <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              
              <label htmlFor="">
                <span>Title:</span>
                <input onChange={(e) => setTitle(e.target.value)} type="text" value={title}/>
              </label>
  
              <label htmlFor="">
                <span>Price:</span>
                <input onChange={(e) => setPrice(e.target.value)} type="number" value={price}/>
              </label>
      
              <button>Add</button>
            </form>
          </div>
    )
}

export default AddTranzitForm