import fixtures from './../fixtures';
import {verifyAuth} from './authReducer';
import fire from './../Fire';
import axios from 'axios';


const INITIALIZED_SUCCESS ='app/INITIALIZED_SUCCESS';
const GET_NEWS = 'GET_NEWS';
const GET_NEWS_LENGTH ='GET_NEWS_LENGTH';
const TAKE_LAST_NEWS='TAKE_LAST_NEWS';
const TAKE_PREVIOUS_NEWS='TAKE_PREVIOUS_NEWS';


const initialState={
	news: [],
	newsLength: 3,
	newsLastt: 4,
	initialized: false
	
}

const appReducer =(state=initialState, action) =>{
	state.answers =fixtures;

	switch(action.type){
		case INITIALIZED_SUCCESS: 
				console.log('action.type = ', action.type);
				return {...state,
					initialized: true
				}	
		case GET_NEWS:
				return { ...state,
						news: action.news
				}
		case GET_NEWS_LENGTH:
		console.log(state.news.length);
				return{ ...state,
						newsLength: state.news.length,
						newsLastt: state.news.length
				}
		case TAKE_LAST_NEWS:
			console.log('пошел takeLastNews', state.newsLastt);
				return { ...state,
						newsLastt: (state.newsLastt === state.news.length) ? state.newsLastt : state.newsLastt+1
				}
		case TAKE_PREVIOUS_NEWS:
			console.log('пошел takePreviousNews', state.newsLastt);
				return { ...state,
						newsLastt: (state.newsLastt === 3) ? state.newsLastt : state.newsLastt-1
				}		
		default:
		return state;
	}
}

export default appReducer;	


export const getNews =(news)=>({type: GET_NEWS, news });
export const getNewsLength=()=>({type: GET_NEWS_LENGTH});
export const initializedSuccess =()=>({ type: INITIALIZED_SUCCESS });
export const takeLastNews =()=>({type: TAKE_LAST_NEWS});
export const takePreviousNews =()=>({type: TAKE_PREVIOUS_NEWS});
export const initializeApp =()=>(dispatch)=>{
	console.log('запустился внатуре initializeApp');


			let dispatchGetNews=	axios.get('https://abzagency.firebaseio.com/news.json').then(response => {

				console.log(response.data);

			dispatch(getNews(Object.values(response.data).sort(function (a, b){
				var dateA=new Date(a.date), dateB=new Date(b.date);
				return (dateA-dateB);
			})));
			
			let dispatchVerifyAuth=dispatch(verifyAuth());
			dispatch(getNewsLength());

			console.log(dispatchGetNews);
			Promise.all([dispatchGetNews, dispatchVerifyAuth]).then(()=>{dispatch(initializedSuccess())});

			
		});
			

	//let promise = dispatch(verifyAuth());
	//console.log('initializing is ON and promise', promise);
	//promise.then(() => {dispatch(initializedSuccess());});

	// fire.get('https://abzagency.firebaseio.com/userslist.json').then(response=>{

	// });
               
 //                this.setState({usersArray: response});
 //                const userslist=Object.values(response.data);
	 //let news = fire.storage().ref().child('avatars');
	// console.log ('fixtures = ', fixtures);
}





// export const getFixtures = ()=> async (dispatch) =>{
// 	const response = await fire.auth({withCredentials: true}).onAuthStateChanged(user => {
// 					if (user !== null) {
// 						dispatch(receiveLogin(user));
// 					}
// 					dispatch(verifySuccess());
// 				});
// 				return response
// }
