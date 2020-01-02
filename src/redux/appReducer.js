import fixtures from './../fixtures';
import {verifyAuth} from './authReducer';
import fire from 'firebase';

const INITIALIZED_SUCCESS ='app/INITIALIZED_SUCCESS';
const GET_NEWS = 'GET_NEWS';

const initialState={
	news: [],
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
		default:
		return state;
	}
}

export default appReducer;	


export const getNews =(news)=>({type: GET_NEWS, news });
export const initializedSuccess =()=>({ type: INITIALIZED_SUCCESS });
export const initializeApp =()=>(dispatch)=>{
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
