import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      emailField: '',
      pswField: ''
    },
    onSubmit: (values) =>{
      console.log('form:',values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      const emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$','i');
      if (!values.emailField) {errors.emailField = 'Field required'}
      else if (values.emailField && emailRegex.test(values.emailField) === false) {
        errors.emailField = 'Username should be an email'}
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });
  return (

<div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input 
        id="emailField"
        type="text"
        name="emailField"
        onChange={formik.handleChange}
        value={formik.values.emailField}
        />
        {formik.errors.emailField ? 
        <div id="emailError" style={{color: "red"}}>
          {formik.errors.emailField}
          </div>: null}

        <div>Password</div>
        <input 
          id="pswField"
          type="text"
          name="pswField"
          onChange={formik.handleChange}
          value={formik.values.pswField}
          />
        <br />
        {formik.errors.pswField ? <div id="pswError" style={{color:'red'}}>{formik.errors.pswField}</div>: null}

        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
