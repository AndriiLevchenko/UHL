//import {loginUser, logoutUser} from './redux/authReducer';

import React from 'react';
import './Auth.css';
//import Button from '../../Components/Button/Button';
import FormControlsInput from './../Input/FormControlsInput';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {loginUser} from './../../redux/authReducer';
import { required, maxLengthCreator}  from './../../utils/validators/validators';

// function validateEmail(email) {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

const maxLengthCreator20=maxLengthCreator(20);

const SignInForm=(props)=> {
  return(
    <form onSubmit={props.handleSubmit}  >
    <Field                 
    placeholder={'Електронна пошта'}
    name={'email'}
    validate={[required, maxLengthCreator20]}      
    component={FormControlsInput}
    label={"E-mail"}
    />
    <Field                      
    placeholder={'Пароль'}
    name={'password'}                            
    component={FormControlsInput}
    validate={[required, maxLengthCreator20]}
    label={'пароль'}
    />
    <div className='registration'>
    <button> Реєстрація </button> 
    </div>
    </form>
    )
  }

  const SignInReduxForm =reduxForm({form: 'formReducer'})(SignInForm);

  const SignIn = ( props) => {
    const onSubmitToFormReducer =(formData)=>{
      props.loginUser(formData.email, formData.password);
      alert('пошел Сабмит');
    }
    return  <div className='Auth'>
    <div className='AuthForm'>
    <h1> Авторизація внатуре </h1>

    <SignInReduxForm onSubmit={onSubmitToFormReducer}  />
    </div>
    </div>
  }

  export default connect(null, {loginUser})(SignIn);