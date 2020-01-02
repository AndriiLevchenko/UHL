import fire from './../Fire';
//import axios from 'axios';
//import {reset} from 'redux-form';

const HIDE_AUTH = 'HIDE_AUTH';
const USER_SIGN_UP = 'USER_SIGN_UP';
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
	photoURL: null,
    isSignInOpen:true,      //Beginning
	isSignUpOpen:true,		//Beginning
	username: '',
	email: '',
	error: null,
	displayName: null,
	user: null,
	isLoggingIn: false,
	isLoggingOut: false,
	isVerifying: false,
	loginError: false,
	logoutError: false,
	isLoggedIn: false 
}

const authReducer =(state=initialState, action) =>{
	console.log(state);  
	switch(action.type){
		case HIDE_AUTH:    		return{		
									...state,
									isUserAuthorized: true
								}
		case USER_SIGN_UP:      return{		
									...state,
									isSignUpOpen: false
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
									user: null,
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

const userSignUp =()=>{
				return{
					type: USER_SIGN_UP
				}
}
// intext.io
// const requestLogin = () => {
// 				return {
// 					type: LOGIN_REQUEST
// 				}
// }
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

export const signUpUser =(email, password, displayName)=> dispatch => {
				fire.auth().createUserWithEmailAndPassword(email, password).then((userCredentials) =>{
					console.log(userCredentials.user);
					userCredentials.user.updateProfile({displayName});
					alert('Ви зареєстровані');
					console.log(userCredentials.user);
					dispatch(userSignUp());
					//dispatch(loginUser(email, password));
					//dispatch(loginUser(userCredentials.user.displayName, userCredentials.user.email));
					//this.props.history.push(`/Beginning`);
				}).catch ((error) =>{
					alert('Реєстрація невдала.');
					console.log(error);

				});	
}

export const loginUser = (email, password) => dispatch => {
			    fire.auth().signInWithEmailAndPassword(email, password).then(user =>{
			    	dispatch(receiveLogin(user));
			    	dispatch(verifyAuth(true));
			    	alert('Ви залогінізовані');
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
				}).catch(error => {
					dispatch(logoutError(error));
				});
}

export const verifyAuth = () => async (dispatch) => {
				alert('идет верификация');
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


// export const saveRatingResult =(rightAnswersQuantity)=>dispatch=>{

// 			const newUser={
// 				displayName: this.state.displayName,
// 				rightAnswersQuantity: rightAnswersQuantity
// 			};
// 			console.log('запустился hideSaveResultButtonAC', rightAnswersQuantity);


// axios.post('https://abzagency.firebaseio.com/rate.json', newUser).then(response => {
// 	// axios.get('https://abzagency.firebaseio.com/rate.json').then(response => {
//  console.log(response.data);
//  //  			
//  //  		});
// 	//dispatch(hideSaveResultButtonAC());

// 	});

// }


//export const receiveLogin(user)=(user)=>({type: USER_LOG_IN, user});
// export const userLogOutTC=()=>({type: USER_LOG_OUT});
//export const userLogOutAC=()=>({type: USER_LOG_OUT});
//export const userVerifyAC=(user)=>({type: USER_VERIFY, user});
// export const userSignUpTC=()=>({type: USER_SIGN_UP, email, password});

export default authReducer