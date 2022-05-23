import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

  const [formValues, setFormValues] = useState(initialState);

  const onHandlerFormChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [ target.name ]: target.value
    });
  }

  const onHandlerFormClean = () => {
    setFormValues({});
  }

  return {
    formValues,
    onHandlerFormClean,
    onHandlerFormChange
  }
}
