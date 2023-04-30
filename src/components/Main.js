import Progress from './Main/Progress'
import { CartContextProvider }from './CartContext'
import { FormContextProvider } from './FormContext'
import styles from "./Main.module.css"

export default function Main() {
  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <FormContextProvider>
          <CartContextProvider>
            <Progress />
          </CartContextProvider>
        </FormContextProvider>
      </div>
    </main>
  )
}