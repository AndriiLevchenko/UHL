import fixtures from './../fixtures';
//import axios from 'axios';
//import fire from './../Fire';
//import {displayName} from './authReducer'; 
//import store from './redux-store';

const CHANGE_SLIDER_POSITION = 'CHANGE_SLIDER_POSITION';
const HIDE_AUTH = 'HIDE_AUTH';
const CHANGE_PICTUREHOME = 'CHANGE_PICTUREHOME';
const OPENCLOSE_MOBILE_MENU = 'OPENCLOSE_MOBILE_MENU';
const CLOSE_ADD_NEWS_FORM = 'CLOSE_ADD_NEWS_FORM';
const OPEN_SIGNIN_COMPONENT = 'OPEN_SIGNIN_COMPONENT';
const CLOSE_SIGNIN_COMPONENT = 'CLOSE_SIGNIN_COMPONENT';

const initialState={
    
		    quiz:   {		
			     		count: 0,				//AnswersList
			    		rightAnswers: 0,		//AnswersList
			    		isOpenAuth: true,		//AnswersList
			    		answersArray: []		//AnswersList
				    },
		    answers: [],
		    pictureHome: ['Upravlinnia.png', 'Mentors.jpg', 'Admission.jpg'],
		    pictureHomeNumber: 1,
		    sliderPosition: 0,
		    isMobileMenuOpen: false,
		    isAddNewsFormOpen: true,
		    isSignInOpen: false
}

const quizReducer =(state=initialState, action) =>{
	state.answers =fixtures;

	console.log(state.sliderPosition);
		switch(action.type){
			case CHANGE_SLIDER_POSITION:    		
							console.log(state.sliderPosition);
            				switch(state.sliderPosition){
                				case 9: return {	...state,
                								    sliderPosition: 0}
                   				 
                				default: return {	...state,
                									sliderPosition: state.sliderPosition + 1}
            }
			case HIDE_AUTH:      return{		
										...state,
										isSignUpOpen: false
									}
			case OPENCLOSE_MOBILE_MENU: return{
										...state,
										isMobileMenuOpen: !state.isMobileMenuOpen
			}						
			case CHANGE_PICTUREHOME:
									return{
										...state,
										pictureHomeNumber: action.pictureHomeNumber
			}
			case CLOSE_ADD_NEWS_FORM:
									return{
										...state,
										isAddNewsFormOpen: false
									}
			case OPEN_SIGNIN_COMPONENT:
									return{
										...state,
										isSignInOpen: true
									}
			case CLOSE_SIGNIN_COMPONENT:
									return{
										...state,
										isSignInOpen: false
									}
			default:                 return state;
			}
	}
	


export const changeSliderPositionAC =()=>({type: CHANGE_SLIDER_POSITION});
export const hideAuthAC =()=>           ({type: HIDE_AUTH});
export const changePictureHome =(pictureHomeNumber)=>({type: CHANGE_PICTUREHOME, pictureHomeNumber: pictureHomeNumber})
export const openCloseMobileMenu =()=>({type: OPENCLOSE_MOBILE_MENU});
export const closeAddNewsForm =()=>({type: CLOSE_ADD_NEWS_FORM});
export const openSignInComponent=()=>({type: OPEN_SIGNIN_COMPONENT});
export const closeSignInComponent=()=>({type: CLOSE_SIGNIN_COMPONENT});



export default quizReducer;