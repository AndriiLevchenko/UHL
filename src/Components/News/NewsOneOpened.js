import React, {useState} from 'react';
import styles from './News.module.css';
import {withRouter} from 'react-router-dom';
import dateWord from './../functions/functionDate';
import renderHTML from 'react-render-html';


const NewsOneOpened =(props)=> {

        // state={
        //     usersArray: null,
        //     userslist:[],
        //     commentsArray: [],
        //     loading:false
        // }    
   
  
              console.log(props);
              const id = props.i;
              console.log(id);
              const openedNewsArray=(props.state.appReducer.news);
              const openedNews=openedNewsArray[id];
               console.log(openedNewsArray);
              console.log(openedNews);
                 //let [openedNewsHookPicture, setOpenedNewsHookPicture]=useState(openedNews ? openedNews.picture : "/imgOborona.jpg");
                  //let [openedNewsHookName, setOpenedNewsHookName]=useState(openedNews ? openedNews.name : "Пам’ятаємо та цінуємо");
                   //let [openedNewsHookText, setOpenedNewsHookText]=useState(openedNews ? openedNews.text : "Місто Київ - один із найбільших центрів слов’янської культури, столиця України, має свою багатовікову історію пронизану найрізноманітнішими, нерідко ключовими подіями. Після двох років окупації силами військ 1-го Українського фронту почалася визвольна операція. 6 листопада - День визволення Києва від німецько-фашистських загарбників.    Це й багато іншої унікальної інформації поєднав у своїй доповіді про визволення Києва ліцеїст другого курсу-Коваль Любомир. Інформація була подана надзвичайно цікаво, глибоко та просто для сприйняття. Ці події є основними не лише в історії нашої рідної держави, а й у формуванні поглядів та розширенні світогляду не одного покоління. Дякуючи ілюстрованому супроводу, сприйняття таких серйозних подій змогло стати доступним кожному.     Надзвичайно вдячна за можливість поглибитися в нашу історію та дізнатися багато нових  фактів. Скобельська Олександра,  ліцеїстка  12 групи");
                    //let [openedNewsHookDate, setOpenedNewsHookDate]=useState(openedNews ? openedNews.date : "Листопад.06.2019");
     
              const imgNew = openedNews ? openedNews.picture : null;
              //console.log(imgNew);
              //console.log(openedNewsHookPicture);

              //const imgNew2 = '/'+imgNew;     
    	return(
    		    <div className={styles.bigArticleCard} >
                    <div className={styles.usersPicture}>
                        <img src={imgNew}  alt='photogpaphy' />                                   
                    </div>
                    <h2  className={styles.pPosition}>{openedNews ? openedNews.name : ' '}</h2>
                    <div  className={styles.pPosition}>{renderHTML(openedNews ? openedNews.text : ' ')}</div>
                    <h2  className={styles.pPosition}>{dateWord(openedNews ? openedNews.date : ' ')}</h2>             
                    <div className="clearfix"></div>
            </div>
    	)
    }      


export default withRouter(NewsOneOpened);