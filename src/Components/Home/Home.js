import React, {Component} from 'react';
import styles from './Home.module.css';
import {NavLink} from 'react-router-dom';
import {changePictureHome} from './../../redux/quizReducer';
import {takeLastNews, takePreviousNews} from './../../redux/appReducer';
import Userscard from './Userscard';
import renderHTML from 'react-render-html';


class Home extends Component {

	render(){
		console.log(this.props.state);
		const changePicture =(pictureHomeNumber)=>{
			this.props.dispatch(changePictureHome(pictureHomeNumber));
		}
		const SRC = this.props.state.quizReducer.pictureHome[this.props.state.quizReducer.pictureHomeNumber];
		const newsLast=this.props.state.appReducer.newsLastt;
		const newsFirst=this.props.state.appReducer.newsLastt -3;
		console.log('this.props.state.appReducer.newsLast = ', this.props.state.appReducer.newsLastt,  newsFirst);
		const UsersArrayOpen=Object.values(this.props.state.appReducer.news).slice(newsFirst,  newsLast);
		console.log(UsersArrayOpen);
		const moveNewsLeft=()=>{this.props.dispatch(takeLastNews());}
		const moveNewsRight=()=>{this.props.dispatch(takePreviousNews());}
		
		return(
			<div className={styles.slideBottom}>
			<div className={styles.usersCenter}>
			<div className={styles.users}>
			<div className={styles.addressLeft}>
			<h3>УКРАЇНСЬКИЙ ГУМАНІТАРНИЙ ЛІЦЕЙ </h3>
			<h3>КИЇВСЬКОГО НАЦІОНАЛЬНОГО УНІВЕРСИТЕТУ ім. ТАРАСА ШЕВЧЕНКА</h3>
			<h3>Ви обдаровані? Ви талановиті? Отже, ЛІЦЕЙ - для Вас! </h3>
			</div>
			</div>
				<div className={styles.users}>
						<h2>НОВИНИ І АНОНСИ</h2>
						<div className={styles.arrowLeft} onClick={()=>moveNewsLeft()}></div>
							{/* Формирование карточек Userscard */}                
								{
									UsersArrayOpen.reverse().map(function(item, i){
										return( 

										<React.Fragment key={i} >
										<NavLink to={'/NewsOneOpened/'+ (newsLast-1-i)}> 
											<Userscard 
											newsWide100={false}
											name={UsersArrayOpen[i].name} 
											picture={UsersArrayOpen[i].picture} 
											text={renderHTML(UsersArrayOpen[i].text)}
											date={UsersArrayOpen[i].date}
											newsId={i}
											/>    
										</NavLink>                           
										</React.Fragment> 

										);        
									})
								}   
						<div className={styles.arrowRight} onClick={()=>moveNewsRight()}></div>         
						<div className='clearfix'></div>

				</div>
		</div>





		<div className={styles.classTime}>

			<div className={styles.picture} >
				<div className={styles.picturePicture}>
					<img src={SRC} className={styles.imgResponsive} alt=" " />
				</div>
				<div className={styles.clearfix}></div>
			</div>


				<div className={styles.questions}> 
					<div className={styles.serviceSectionGrid}>
						<NavLink to='/management' className={styles.referenseHover} >
							<div className={styles.icon}>
							<i className={styles.book}> </i>
							</div>
							<div className={styles.iconText} onMouseOver={()=>changePicture(0)}>
							<h4>УПРАВЛІННЯ</h4>
							<p>Головний принцип управління – партисипативність та делегування повноважень громадським структурам у поєднанніз державними інституціями.</p>
							</div>
						</NavLink>      
					</div>
					<div className={styles.serviceSectionGrid}>
						<NavLink to='/mentors' className={styles.referenseHover}>
							<div className={styles.icon}>
							<i className={styles.pencil}> </i>
							</div>
							<div className={styles.iconText} onMouseOver={()=>changePicture(1)}  >
							<h4>НАСТАВНИКИ</h4>
							<p>Тільки особистість може творити особистість, тільки характером можна утворити характер…  К.Д. Ушинський</p>
							</div>
						</NavLink>
					</div>
					<div className={styles.serviceSectionGrid}>
						<NavLink to='/admission' className={styles.referenseHover}>
							<div className={styles.icon}>
							<i className={styles.award}> </i>
							</div>
							<div className={styles.iconText} onMouseOver={()=>changePicture(2)} >
							<h4>ПРАВИЛА ПРИЙОМУ</h4>
							<p>Ми раді надати Вам можливість випробувати себе і вступити до Українського гуманітарного ліцею Київського національного університету  імені Тараса Шевченка – саме того навчального закладу, у якому Ви мрієте навчатися.</p>
							</div>
						</NavLink>
					</div>
				</div>
				</div>


			<div className={styles.users}>
				<div className={styles.addressRight}>
					<ul>
					<li>  <h3>ПЕРШІСТЬ У СТОЛИЦІ ТА УКРАЇНІ ЗА РЕЙТИНГОМ ЗНО</h3> </li>
					<li><h3>СИСТЕМНА МІЖНАРОДНА ДІЯЛЬНІСТЬ</h3></li>
					<li><h3>ВИСОКА ЯКІСТЬ ОСВІТНІХ ПОСЛУГ, ДИСТАНЦІЙНА ОСВІТА</h3></li>
					<li><h3>РОДИНА (ГАРМОНІЙНІ СТОСУНКИ "УЧИТЕЛЬ-УЧЕНЬ", "УЧИТЕЛЬ-БАТЬКИ", "УЧЕНЬ-УЧЕНЬ")</h3> </li>
					</ul>
				</div> 

			</div>
		</div>
		)
	}
}
export default Home;