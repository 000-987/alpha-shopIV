import { InputGroup } from './Step1'
import styles from "./Step3.module.css"

export default function StepThree() {
  return (
    <form className={styles.form__container} data-phase="credit-card">
      <h3 className={styles.form__title}>付款資訊</h3>
      <section className={styles.form__body}>
        <div className={styles.input__container}>
          <InputGroup
            id="card__name"
            type="text"
            label="持卡人姓名"
            placeholder="John Doe"
            name="持卡人姓名"
          />
        </div>
        <div className={styles.input__container}>
          <InputGroup
            id="card__number"
            type="text"
            label="卡號"
            placeholder="1111 2222 3333 4444"
            name="卡號"
          />
        </div>
        <div className={styles.input__container}>
          <InputGroup
            id="card__date"
            type="text"
            label="有效期限"
            placeholder="MM/YY"
            name="有效期限"
          />
          <InputGroup
            id="card__cvc"
            type="text"
            label="CVC / CCV"
            placeholder="123"
            maxLength="3"
            name="CVC / CCV"
          />
        </div>
      </section>
    </form>
  )
}