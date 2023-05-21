import { createContext } from 'react';
import { useState } from 'react';

const info = {
  持卡人姓名: '',
  卡號: '',
  有效期限: '',
  "CVC / CCV": '',
}

const FormContext = createContext()

function FormContextProvider({ children }) {
  const [formInfo, setFormInfo] = useState(info)

  function handleInputChange(e) {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
  }

  return (
    <FormContext.Provider value={{ formInfo, setFormInfo, handleInputChange }}>
      {children}
    </FormContext.Provider>
  )
}

export { FormContext, FormContextProvider }
