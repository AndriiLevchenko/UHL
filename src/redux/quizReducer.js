import fixtures from './../fixtures';
import axios from 'axios';
//import fire from './../Fire';
//import {displayName} from './authReducer'; 
//import store from './redux-store';

const CHANGE_SLIDER_POSITION = 'CHANGE_SLIDER_POSITION';
const HIDE_AUTH = 'HIDE_AUTH';
const CHANGE_PICTUREHOME = 'CHANGE_PICTUREHOME';

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
		    sliderPosition: 0
		  
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
			case CHANGE_PICTUREHOME:
									return{
										...state,
										pictureHomeNumber: action.pictureHomeNumber
			}
			default:                 return state;
			}
	}
	


export const changeSliderPositionAC =()=>({type: CHANGE_SLIDER_POSITION});
export const hideAuthAC =()=>           ({type: HIDE_AUTH});
export const changePictureHome =(pictureHomeNumber)=>({type: CHANGE_PICTUREHOME, pictureHomeNumber: pictureHomeNumber})




export default quizReducer;