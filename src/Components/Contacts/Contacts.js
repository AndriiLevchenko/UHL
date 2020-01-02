import React, {Component} from 'react';
//import Button from './../Button/Button';
//import fire from '../Fire';
//import SignIn from './../Auth/SignIn';
//import SignUp from './Auth/SignUp';
//import SignUpContainer from './Auth/SignUpContainer';
import styles from './Contacts.module.css';

//import styles2 from './css/Bootstrap.module.css';
//<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
//import SignUp from './../Auth/SignUp';
//import {hideBeginningReducer} from './../../redux/quizReducer';


class Contacts extends Component {

  render(){
	return(
      <div >
 
      <div className={styles.contact}>
                <div className={styles.container}>
                      <div className={styles.contactHead}>
                          <h3>Контакти</h3>
                       </div>
                      <div className={styles.contactTop}>
                                <div className={styles.colMd4 + ' ' + styles.contactText}>
                                          <div className={styles.contGrid}>
                                                      <div className={styles.conIcon}>
                                                        <i className={styles.post}> </i>
                                                      </div>
                                                      <div className={styles.conText}>
                                                        <h4>ПОШТОВА АДРЕСА</h4>
                                                        <p>Україна 03001, м. Київ,  пров. Козловського, 3</p>
                                                      </div>
                                                      <div className={styles.clearfix}> </div>
                                          </div>
                                          <div className={styles.contGrid}>
                                                      <div className={styles.conIcon}>
                                                        <i className={styles.email}> </i>
                                                      </div>
                                                      <div className={styles.conText}>
                                                        <h4>E-mail</h4>
                                                        <p>uhl-edu@ukr.net</p>
                                                      </div>
                                                      <div className={styles.clearfix}> </div>
                                          </div>
                                          <div className={styles.contGrid}>
                                                      <div className={styles.conIcon}>
                                                        <i className={styles.phone}> </i>
                                                      </div>
                                                      <div class={styles.conText}>
                                                        <h4>Телефон</h4>
                                                        <p>+38(044)253-07-89</p>
                                                      </div>
                                                      <div className={styles.clearfix}> </div>
                                          </div>
                                </div>
                                <div className={styles.colMd8 + ' ' + styles.contactForm}>
                                   {/*   <form >
                                        <input type="text" className={styles.textbox} value="Name" />
                                        <input type="text" className={styles.textbox} value="Email" />
                                        <textarea value="Message:" ></textarea>
                                        <input type="submit" value="Send Now" />  
                                      </form>  */}
                                </div>
                                <div className={styles.clearfix}></div>
                      </div>
              </div>
              <div className={styles.map}>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40655.17807914975!2d30.4921834253189!3d50.4420575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce554f359fbf%3A0xddc9e77e358b59c2!2z0L_RgNC-0LLRg9C70L7QuiDQhtCy0LDQvdCwINCa0L7Qt9C70L7QstGB0YzQutC-0LPQviwgMywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1576961973532!5m2!1suk!2sua" ></iframe>   </div>
              </div>
 
      <div id="contact" className={styles.address}>
            <div className={styles.colMd7 + ' ' +  styles.addressLeft}>
                   <div className={styles.products}>
                      <h3>Гуртки та секції</h3>
                     
                     
                      <ul className={styles.bottom}>
                        <li>Художня студіяй</li>
                        <li>Хорова студія</li>
                        <li>Літературна студія</li>
                        <li>Театральна студія</li>
                        <li>..............................</li>
                        <li>..............................</li>
                        <li>..............................</li>
                        <li>..............................</li>
                        
                      </ul>
                  </div>
            </div>
            <div className={styles.colMd5 + ' ' +  styles.addressRight}>
                      <h3>Наші партнери</h3>
                     
                     
                      <ul className={styles.bottom}>
                        <li>Фінансовий ліцей</li>
                        <li>Український фізико-математичний ліцей Київського національного університету  імені Тараса Шевченка;</li>
                        <li>Науково-природничий ліцей №145;</li>
                        <li>Школа 2222 , 22222 Китай</li>
                        <li>..............................</li>
                        <li>..............................</li>
                        <li>..............................</li>
                        <li>..............................</li>
                        
                      </ul>
            </div>
            <div className={styles.clearfix}></div>
      </div>
      <div className={styles.footer}>
          <div className={styles.container}>
                  <div className={styles.copy}>
                    <p> Designed by "IMD Co"</p>
                  </div>
          </div>
      </div>
</div>

                         
                          
 
  	)
    }
  }
  export default Contacts;