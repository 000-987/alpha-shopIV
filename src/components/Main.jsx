import Progress from './Main/Progress';
import { CartContextProvider }from './CartContext';
import { FormContextProvider } from './FormContext';
import styles from "./Main.module.css";
import Cart from 'components/Main/Cart';

export default function Main() {
  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <FormContextProvider >
          <CartContextProvider>
            <Progress />
            <Cart />
          </CartContextProvider>
        </FormContextProvider>
      </div>
    </main>
  )
}