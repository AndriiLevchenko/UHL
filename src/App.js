import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import styles from './Components/Home/Home.module.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import AboutMobile from './Components/About/AboutMobile';
import Vykhovannia from './Components/Vykhovannia/Vykhovannia';
import Uchinnia from './Components/Uchinnia/Uchinnia';
import Partnership from './Components/Partnership/Partnership';
import ProzoristiVidkrytist from './Components/ProzoristiVidkrytist/ProzoristiVidkrytist';
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
import {initializeApp} from './redux/appReducer'; 
import {openCloseMobileMenu} from './redux/quizReducer';


class  App extends Component {
	
			componentDidMount(){
				console.log('насчался ComponentdidMount     response.data, при этом isLoggedIn = ', this.props.state.authReducer.isLoggedIn);
				this.props.dispatch(initializeApp());
			}
	openCloseMobileMenu =()=>{ this.props.dispatch(openCloseMobileMenu());}
	render(){

		const styleHome = (this.props.location.pathname ==='/');
		console.log(styleHome);
		console.log(this.props);
		console.log('authReducer = ', this.props.state.authReducer);
		//if (!this.props.initialized){
 			//return <Preloader/>
 		//} else {
		return (	
			<div>	  
				    <div id="home" className={styles.header + ' ' + (styleHome ? ' ' : styles.two)}>
				        <div className={styles.topHeader + ' ' + (styleHome ? ' ' : styles.two)}>
				            <div className={styles.container}>
				                <LogoUHL />             
				                <Navbar dispatch = {this.props.dispatch} 
				                		onClick={this.openCloseMobileMenu} 
				                		isMobileMenuOpen={this.props.state.quizReducer.isMobileMenuOpen}
				                		isDropdownAboutMenuOpen={this.props.state.quizReducer.isDropdownAboutMenuOpen}
				                />
							{ styleHome && <div >
					            <Loadingg state={this.props.state} dispatch={this.props.dispatch} />  
						    
					            <ul className={styles.rslides} >
							              <li>
							                <div className={styles.sliderTop}>
							                    <blockquote><h2>{this.props.state.appReducer.answers[0].sliderTop[this.props.state.quizReducer.sliderPosition].h2}</h2></blockquote>
						
							                    <cite><h6>{this.props.state.appReducer.answers[0].sliderTop[this.props.state.quizReducer.sliderPosition].h6}</h6></cite>
							                </div>
							              </li>
					            </ul>
						 
								<div className="clearfix"> </div>               
					        </div>	
					    	}    		
							</div>   
						</div> 
						<div className="clearfix"> </div>           
					</div> 
					<Route path='/' exact render= {()=> <Home  state={this.props.state} dispatch = {this.props.dispatch}/>}/>
		    		<Route path='/uchinnia' 		render= {()=> <Uchinnia   		/>}/>
		    		<Route path='/partnership'	    render= {()=> <Partnership		/>}/>
		    		<Route path='/prozoristividkrytist'	    render= {()=> <ProzoristiVidkrytist		/>}/>
					<Route path='/about' 			render= {()=> <About   		    />}/>
					<Route path='/aboutMobile' 		render= {()=> <AboutMobile   		    />}/>
					<Route path='/vykhovannia' 		render= {()=> <Vykhovannia   	/>}/>
		    		<Route path='/news'				render= {()=> <News     state={this.props.state}  
		    																dispatch = {this.props.dispatch}    
		    																isLoggedIn={this.props.state.authReducer.isLoggedIn}	
																		    isAddNewsFormOpen={this.props.state.quizReducer.isAddNewsFormOpen}	
																  />}
					/>
		    		<Route path='/science' 			render= {()=> <Science   	    />}/>
		    		<Route path='/unesco' 			render= {()=> <Unesco			/>}/>
					<Route path='/contacts' 		render= {()=> <Contacts         />}/>  
					<Route path='/management' 		render= {()=> <Management       />}/>
		    		<Route path='/mentors' 			render= {()=> <Mentors			/>}/>
					<Route path='/admission' 		render= {()=> <Admission 		/>}/>  
					<Route path='/choreographystudio' 		render= {()=> <ChoreographyStudio 	/>}/>  
					<Route path='/chorstudio' 	    render= {()=> <ChorStudio       />}/>
		    		<Route path='/literaturestudio' render= {()=> <LiteratureStudio	/>}/>
					<Route path='/theaterstudio' 	render= {()=> <TheaterStudio 	/>}/>  
					<Route path='/NewsOneOpened/:i?' 	render= {(i)=> <NewsOneOpened  state={this.props.state} i={i.match.params.i} />}/>
			</div> 	   
		);
	}
}

		const mapStateToProps =(state)=> ({
				initialized: state.appReducer.initialized
		});
// 				//Обернули withRouter-ом потому что может сбиваться роутинг при добавлении connect, и при этом испольщовали compose
 export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);    
