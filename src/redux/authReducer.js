import fire from './../Fire';
//import axios from 'axios';
//import {reset} from 'redux-form';
import {closeSignInComponent} from './quizReducer';

const HIDE_AUTH = 'HIDE_AUTH';
const USER_LOG_IN = 'USER_LOG_IN';
//const USER_LOG_OUT = 'USER_LOG_OUT';
//const USER_VERIFY = 'USER_VERIFY';

const LOGIN_REQUEST  = "LOGIN_REQUEST";
const LOGIN_SUCCESS  = "LOGIN_SUCCESS";
const LOGIN_FAILURE  = "LOGIN_FAILURE";
const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_FAILURE = "LOGOUT_FAILURE";
const VERIFY_REQUEST = "VERIFY_REQUEST";
const VERIFY_SUCCESS = "VERIFY_SUCCESS";
const REGISTER   = "REGISTER";

const initialState={
    isSignInOpen:true,     
	email: '',
	error: null,
	isLoggingIn: false,
	isLoggingOut: false,
	isVerifying: false,
	loginError: false,
	isLoggedIn: false,
	user: {
		email: null
	}
}

const authReducer =(state=initialState, action) =>{
	console.log(state);  
	switch(action.type){
		case HIDE_AUTH:    		return{		
									...state,
									isUserAuthorized: true
								}
	
		case USER_LOG_IN:
								console.log(' USER_LOG_IN');
								return{		
									...state,
									...action.data,
									user: action.user,
									isUserAuthorized: true,
									isSignInOpen:false,
									isOpenBeginning: false
								}
		// case USER_VERIFY:  		return{
		// 							...state,
		// 							isUserAuthorized: true,
		// 							isSignInOpen: false,     
		// 							isSignUpOpen: false	
		// 						}
		case LOGIN_REQUEST:     return {
									...state,
									isLoggingIn: true,
									loginError: false
								}
		case LOGIN_SUCCESS:     return {
									...state,
									isLoggingIn: false,
									isLoggedIn: true,
									user: action.user
								}
		case LOGIN_FAILURE:     return {
									...state,
									isLoggingIn: false,
									isAuthenticated: false,
									loginError: true
								}
		case LOGOUT_SUCCESS:
								alert('Login EXIT');
								return {
									...state,
									isLoggingOut: false,
									isAuthenticated: false,
									user: {email:null},
									isLoggedIn: false

								}
		case LOGOUT_FAILURE:    return {
									...state,
									isLoggingOut: false,
									logoutError: true
								}
		case VERIFY_REQUEST:    return {
									...state,
									isVerifying: true,
									verifyingError: false
								}
		case VERIFY_SUCCESS:    return {
									...state,
									isVerifying: false
								}
		case REGISTER:          return {
									...state,
									...action.payload,
									displayName: action.displayName
								}
		default:                 return state;
	}
}

const receiveLogin = user => {
				console.log(user);
				return {
					type: LOGIN_SUCCESS,
					user
				}
}
const loginError = () => {
				alert ('Помилка авторизації. Введіть вірний E-mail та Password');
				return {
					type: LOGIN_FAILURE
				}
}
const requestLogout = () => {
				return {
					type: LOGOUT_REQUEST
				}
}
const receiveLogout = () => {
				return {
					type: LOGOUT_SUCCESS
				}
}
const logoutError = (error) => {
				alert(error);
				return {
					type: LOGOUT_FAILURE
				}
}
const verifyRequest = () => {
				return {
					type: VERIFY_REQUEST
				}
}
export const verifySuccess = () => {
				return {
					type: VERIFY_SUCCESS
				}
}
export const register = (displayName, email) => {
				console.log('внатуре пошел создание нового пользователя, displayName = ', displayName);
				return {
					type: REGISTER,
					payload: {displayName, email}
				}
}



export const loginUser = (email, password) => dispatch => {
	alert('логінізація');
			    fire.auth().signInWithEmailAndPassword(email, password).then(user =>{
			    	dispatch(receiveLogin(user));
alert(' верифікація');
			    	dispatch(verifyAuth(true));
			    	alert('Ви залогінізовані');
			    	dispatch(closeSignInComponent());
			    }).catch(error => { 
			    	//dispatch(reset('formReducer'));
			    	dispatch(loginError());
			    });
}

export const logoutUser =()=> dispatch =>{
				console.log('пошло вылогинивание');
				dispatch(requestLogout());
				fire.auth().signOut().then(() => {
					dispatch(receiveLogout());
					dispatch(closeSignInComponent());
				}).catch(error => {
					dispatch(logoutError(error));
				});
}

export const verifyAuth = () => async (dispatch) => {
				dispatch(verifyRequest());
				console.log('идет верификация, при этом state = , this.state');
				const response = await fire.auth({withCredentials: true}).onAuthStateChanged(user => {
					if (user !== null) {
						dispatch(receiveLogin(user));
					}
					dispatch(verifySuccess());
				});
				return response
}


//export const receiveLogin(user)=(user)=>({type: USER_LOG_IN, user});
// export const userLogOutTC=()=>({type: USER_LOG_OUT});
//export const userLogOutAC=()=>({type: USER_LOG_OUT});
//export const userVerifyAC=(user)=>({type: USER_VERIFY, user});
// export const userSignUpTC=()=>({type: USER_SIGN_UP, email, password});

export default authReducer