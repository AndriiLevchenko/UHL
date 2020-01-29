import React, {Component} from 'react';
import './App.css';
//import Settings from './components/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
//import LoginPage from './components/Login/Login';
import {initializeApp, getNews} from './redux/appReducer'; 
import styles from './Components/Home/Home.module.css';
//import fire from 'firebase';
import axios from 'axios';
//import Preloader from './components/common/Preloader';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import News from './Components/News/News';
import Science from './Components/Science/Science';
import Unesco from './Components/Unesco/Unesco';
import Contacts from './Components/Contacts/Contacts';
import LogoUHL from './Components/LogoUHL';
import Navbar from './Components/Home/Navbar';
import Loadingg from './Components/Loadingg';
import NewsOneOpened from './Components/News/NewsOneOpened';
import Management from './Components/Management/Management';
import Mentors from './Components/Mentors/Mentors';
import Admission from './Components/Admission/Admission';
import ChoreographyStudio from './Components/ChoreographyStudio/ChoreographyStudio';
import ChorStudio from './Components/ChorStudio/ChorStudio';
import LiteratureStudio from './Components/LiteratureStudio/LiteratureStudio';
import TheaterStudio from './Components/TheaterStudio/TheaterStudio';
import {openCloseMobileMenu} from './redux/quizReducer';

class  App extends Component {
	
	componentDidMount(){
		console.log('насчался ComponentdidMount     response.data');
		axios.get('https://abzagency.firebaseio.com/news.json').then(response => {

			console.log(response.data);

			this.props.dispatch(getNews(Object.values(response.data).sort(function (a, b){
				var dateA=new Date(a.date), dateB=new Date(b.date);
				return (dateA-dateB);
			})));
		});
	}
	openCloseMobileMenu =()=>{ this.props.dispatch(openCloseMobileMenu());}
	render(){

		const styleHome = (this.props.location.pathname ==='/');
		console.log(styleHome);
		console.log(this.props);
		console.log(this.props.state.quizReducer.isMobileMenuOpen);
		//if (!this.props.initialized){
 			//return <Preloader/>
 		//} else {
		return (	
			<div>	  
			    <div id="home" className={styles.header + ' ' + (styleHome ? ' ' : styles.two)}>
			        <div className={styles.topHeader + ' ' + (styleHome ? ' ' : styles.two)}>
			            <div className={styles.container}>
			                <LogoUHL />             
			                <Navbar dispatch = {this.props.dispatch} onClick={this.openCloseMobileMenu} isMobileMenuOpen={this.props.state.quizReducer.isMobileMenuOpen} />
						{ styleHome && <div >
				            <Loadingg state={this.props.state} dispatch={this.props.dispatch} />  
					        <div  id="top" className={styles.callbacks_container}>
						            <ul className={styles.rslides} id='slider4'>
								              <li>
								                <div className={styles.sliderTop}>
								                    <blockquote><h2>{this.props.state.appReducer.answers[0].sliderTop[this.props.state.quizReducer.sliderPosition].h2}</h2></blockquote>
								                    <blockquote><p>{this.props.state.appReducer.answers[0].sliderTop[this.props.state.quizReducer.sliderPosition].p}</p></blockquote>
								                    <cite><h6>{this.props.state.appReducer.answers[0].sliderTop[this.props.state.quizReducer.sliderPosition].h6}</h6></cite>
								                </div>
								              </li>
						            </ul>
					        </div>
							<div className="clearfix"> </div>               
				        </div>	
				    	}    		
						</div>   
					</div> 
					<div className="clearfix"> </div>           
				</div> 
							<Route path='/' exact render= {()=> <Home  state={this.props.state} dispatch = {this.props.dispatch}/>}/>
				    		
							<Route path='/about' 			render= {()=> <About   		    />}/>
				    		<Route path='/news'				render= {()=> <News     state={this.props.state}  dispatch = {this.props.dispatch}      />}/>
				    		<Route path='/science' 			render= {()=> <Science   	    />}/>
				    		<Route path='/unesco' 			render= {()=> <Unesco			/>}/>
							<Route path='/contacts' 		render= {()=> <Contacts 		/>}/>  
							<Route path='/management' 		render= {()=> <Management       />}/>
				    		<Route path='/mentors' 			render= {()=> <Mentors			/>}/>
							<Route path='/admission' 		render= {()=> <Admission 		/>}/>  
							<Route path='/choreographystudio' 		render= {()=> <ChoreographyStudio 	/>}/>  
							<Route path='/chorstudio' 	    render= {()=> <ChorStudio       />}/>
				    		<Route path='/literaturestudio' render= {()=> <LiteratureStudio	/>}/>
							<Route path='/theaterstudio' 	render= {()=> <TheaterStudio 	/>}/>  
							<Route path='/NewsOneOpened/:newsId?' 	render= {()=> <NewsOneOpened  state={this.props.state} />}/>
			</div> 	   
		);
	}
}

		const mapStateToProps =(state)=> ({
				initialized: state.appReducer.initialized
		});
				//Обернули withRouter-ом потому что может сбиваться роутинг при добавлении connect, и при этом испольщовали compose
export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
