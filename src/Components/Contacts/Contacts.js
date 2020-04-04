import React, {Component} from 'react';
import styles from './Contacts.module.css';
import {NavLink} from 'react-router-dom';

class Contacts extends Component {

    render(){        
	      return(
            <div>
                <div className={styles.contact}>
                    <div className={styles.container}>
                        <div className={styles.contactHead}>
                            <h3>Контакти</h3>
                        </div>
                        <div className={styles.contactTop}>    
                            <div className={styles.contGridNew}>
                                <div className={styles.conIcon}>
                                    <i className={styles.post}> </i>
                                </div>
                                <div className={styles.conText}>
                                    <h4>ПОШТОВА АДРЕСА</h4>
                                    <p>Україна 03001, м. Київ,  пров. Козловського, 3</p>
                                </div>    
                            </div>
                            <div className={styles.contGridNew}>
                                <div className={styles.conIcon}>
                                    <i className={styles.email}> </i>
                                </div>
                                <div className={styles.conText}>
                                    <h4>E-mail</h4>
                                    <p>uhl-edu@ukr.net</p>
                                </div>    
                            </div>
                            <div className={styles.contGridNew}>
                                <div className={styles.conIcon}>
                                    <i className={styles.phone}> </i>
                                </div>
                                <div className={styles.conText}>
                                    <h4>Телефон</h4>
                                    <p>+38(044)253-07-89</p>
                                </div>    
                            </div>
                            <div className={styles.clearfix}></div>
                                <div className={styles.clearfix}></div>
                        </div>
                    </div>

                    <div className={styles.map}>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40655.17807914975!2d30.4921834253189!3d50.4420575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce554f359fbf%3A0xddc9e77e358b59c2!2z0L_RgNC-0LLRg9C70L7QuiDQhtCy0LDQvdCwINCa0L7Qt9C70L7QstGB0YzQutC-0LPQviwgMywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1576961973532!5m2!1suk!2sua" title="Map"></iframe>   </div>
                    </div>
           
                    <div  className={styles.address}>
                        <div className={ styles.addressLeft}>
                            <div> 
                                <h3>Гуртки та секції</h3>
                                <ul className={styles.bottom}>
                                    <li> <NavLink to='/choreographystudio' className={styles.referenseHover}> Хореографічна студія     </NavLink> </li>
                                    <li> <NavLink to='/chorstudio' className={styles.referenseHover}> Хорова студія      </NavLink> </li>
                                    <li> <NavLink to='/literaturestudio' className={styles.referenseHover}> Літературна студія </NavLink> </li>
                                    <li> <NavLink to='/theaterstudio' className={styles.referenseHover}> Театральна студія  </NavLink> </li>
                                </ul>
                            </div> 
                        </div>
                        <div className={styles.addressRight}>
                            <div> 
                                <h3>Наші партнери</h3>
                                <ul className={styles.bottom}>
                                    <li><a href='http://finlyc.kiev.ua' >Фінансовий ліцей, м. Київ </a> </li>
                                    <li><a href='http://upml.knu.ua' >Український фізико-математичний ліцей Київського національного університету  імені Тараса Шевченка, м. Київ </a> </li>
                                    <li><a href='https://lic145.kiev.ua' >Науково-природничий ліцей №145, м. Київ </a> </li>
                                    <li><a href='https://klb.education' >Київський ліцей бізнесу, м. Київ</a> </li>
                                    <li><a href='http://bahmach.osv.org.ua/bahmacka-gimnaziya-15-09-53-10-08-2017/' >Бахмацька гімназія, м. Бахмач </a> </li>
                                    <li><a href='https://kr.gov.ua/ua/news/pg/190712537652716_s/' >Жовтневий ліцей, м. Кривий Ріг </a> </li>
                                    <li><a href='https://krmisto.gov.ua/ua/schools/598.html' >Центрально-міська гімназія, м. Кривий Ріг </a> </li>
                                    <li><a href='http://www.kcml.dp.ua' >Центрально-міський ліцей, м. Кривий Ріг </a> </li>
                                    <li><a href='https://www.facebook.com/pages/Житомирський-обласний-педагогічний-ліцей/144190262279577' >Житомирський обласний педагогічний ліцей, м. Житомир </a> </li>
                                    <li><a href='https://www.education.ua/ua/schools/odessa/sh-10/' >Школа №10 з поглибленим вивченням французької мови, м. Одеса</a> </li>
                                    <li><a href='https://uk.wikipedia.org/wiki/Українська_школа-гімназія_(Сімферополь)' >НВК  «Українська школа-гімназія м. Сімферополя», м. Сімферополь </a> </li>
                                    <li><a href='http://www.lugos.lviv.sch.in.ua' >Українська гуманітарна гімназія ім.Олени Степанів, м. Львів </a> </li>
                                    <li><a href='https://cg.isuo.org/schools/view/id/21104' >Марківецька школа ЗОШ І-ІІІ ступеня Чернігівської області  </a> </li>
                                    <li><a href='https://youcontrol.com.ua/catalog/company_details/25667202/' >Хотівська ЗОШ І-ІІІ ступеня Київської області  </a> </li>
                                    <li><a href='https://cg.isuo.org/ru/schools/view/id/21223' >Ріпкинська гімназія Чернігівської області  </a> </li>
                                    <br/><br/>
                                    <li><a href='https://uk.wikipedia.org/wiki/Республіканський_український_теоретичний_ліцей' >Республіканський Український теоретичний ліцей м. Тирасполя (Придністров’я)  </a> </li>
                                    <li><a href='http://school280.ru' >середня ЗОШ №280 ім. М.Ю.Лермонтова м. Санкт-Петербург (Російська Федерація)  </a> </li>
                                    <li><a href='https://uk.wikipedia.org/wiki/Список_університетів_Росії' >Академічна гімназія Санкт-Петербурзького державного університету Російської Федерації  </a> </li>
                                    <li><a href='http://gimnasium-3.narod.ru' >Муніципальний освітній заклад Бендерська гімназія №3 ім. І.Котляревського  </a> </li>
                                    <li><a href='https://kazakhstan.mfa.gov.ua/posolstvo/5011-ukrajinsyki-gromadi-kazahstanu' >Українська гімназія-комплекс м. Астани (Республіка Казахстан)  </a> </li>
                                    <li><a href='http://osvita.ukrainianworldcongress.org/ukrajinska-shkola-diaspora-Latvia/' >Українська середня школа м. Риги (Республіка Латвія)  </a> </li>
                                    <li><a href='#' >гімназія №14 м. Мінська (Республіка Білорусь)  </a> </li>
                                    <li><a href='http://buktolerance.com.ua/?p=5168' >Український ліцей ім. Коцюбинського м. Кишинева (Республіка Молдова)  </a> </li>
                                    <li><a href='#' >середня школа №21 м. Душанбе (Республіка Таджикистан)  </a> </li>
                                    <li><a href='#' >Українські школи США, Канади, Австралії  </a> </li>
                                    <li><a href='http://osvita.ukrainianworldcongress.org/ukrajinska-shkola-diaspora-USA/' >школа Українознавства ОУА «Самопоміч» м. Нью-Йорка США  </a> </li>
                                    <li><a href='#' >Українська муніципальна школа м. Мельбурна Канади  </a> </li>
                                    <li><a href='#' >загальноосвітній ліцей ім. Адама Чарторицького м.Пулави (Республіка Польща)  </a> </li>
                                    <li><a href='https://uk.wikipedia.org/wiki/Хебей' >Середня школа №2, міста Шиньдзяджуан, провінції Хебей  </a> </li>
                                    <li><a href='https://ru.wikipedia.org/wiki/Тайюань' >Середня школа №1 міста Тайюань, району Сяодень провінції Шанчі  </a> </li>
                                    <li><a href='http://eu.univ.kiev.ua/departments/ukrayins%60kyy-gumanitarnyy-lits/' >Гімназія Еразмус Грассер м. Мюнхена (Німеччина)  </a> </li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.copy}>
                            <p> Designed by "IMD Co"</p>
                        </div>
                    </div>
            </div>
  	    )
    }
}
export default Contacts;