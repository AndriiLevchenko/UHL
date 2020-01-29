import React, {Component} from 'react';

//import Button from './../Button/Button';
//import fire from '../Fire';
//import SignIn from './../Auth/SignIn';
//import SignUp from './Auth/SignUp';
//import SignUpContainer from './Auth/SignUpContainer';
import styles from './Home.module.css';
import {NavLink} from 'react-router-dom';
import Management from './../Management/Management';
import Mentors from './../Mentors/Mentors';
import Admission from './../Admission/Admission';
//<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
//import SignUp from './../Auth/SignUp';
import {changePictureHome} from './../../redux/quizReducer';


class Home extends Component {

    


  render(){


    console.log(this.props.state.quizReducer.pictureHome[this.props.state.quizReducer.pictureHomeNumber]);
    console.log(this.props.state.appReducer.answers[0].sliderTop[0]);
    console.log(this.props.state);
    const changePicture =(pictureHomeNumber)=>{
      this.props.dispatch(changePictureHome(pictureHomeNumber));
    }
    const SRC = this.props.state.quizReducer.pictureHome[this.props.state.quizReducer.pictureHomeNumber];

	return(
      <div className={styles.slideBottom}>
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


                      <div className={styles.slideBottomGrid}>
                          <div className={styles.addressLeft}>
                              <h3>УКРАЇНСЬКИЙ ГУМАНІТАРНИЙ ЛІЦЕЙ </h3>
                              <h3>КИЇВСЬКОГО НАЦІОНАЛЬНОГО УНІВЕРСИТЕТУ ім. ТАРАСА ШЕВЧЕНКА</h3>
                              <h3>Ви обдаровані? Ви талановиті? Отже, ЛІЦЕЙ - для Вас! </h3>
                          </div>
                          <div className={styles.addressRight}>
                              <ul>
                                  <li>  <h4>ПЕРШІСТЬ У СТОЛИЦІ ТА УКРАЇНІ ЗА РЕЙТИНГОМ ЗНО</h4> </li>
                                  <li><h4>СИСТЕМНА МІЖНАРОДНА ДІЯЛЬНІСТЬ</h4></li>
                                  <li><h4>ВИСОКА ЯКІСТЬ ОСВІТНІХ ПОСЛУГ, ДИСТАНЦІЙНА ОСВІТА</h4></li>
                                  <li><h4>РОДИНА (ГАРМОНІЙНІ СТОСУНКИ "УЧИТЕЛЬ-УЧЕНЬ", "УЧИТЕЛЬ-БАТЬКИ", "УЧЕНЬ-УЧЕНЬ")</h4> </li>
                              </ul>
                          </div> 
                    
            </div>
      </div>
  	)
    }
  }
  export default Home;