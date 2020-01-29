import React from 'react';

//import Button from './../Button/Button';
//import fire from '../Fire';
//import SignIn from './../Auth/SignIn';
//import SignUp from './Auth/SignUp';
//import SignUpContainer from './Auth/SignUpContainer';
import styles from './ChoreographyStudio.module.css';
//import styles2 from './css/Bootstrap.module.css';
//<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
//import SignUp from './../Auth/SignUp';
//import {hideBeginningReducer} from './../../redux/quizReducer';


const ChoreographyStudio  =()=> {

 

   
    
    
    

  return(
  
        <div className={styles.wrapper}>
            <div className={styles.text_block}>
                <h2>МИСТЕЦТВО ТАНЦЮ</h2>
                    <p>Діяльність хореографічної студії ліцею досить багатогранна: від власне занять хореографії, участі 
                    студії у традиційних загальноліцейних святах, їх танцювальному оформленні до мистецьких конкурсів 
                    міжнародних рівнів. До репертуару хореографічної студії входять танці з європейської та 
                    латиноамериканської програм; фольклорні та сучасні композиції, розраховані як на сольне виконання, так і 
                    на колективні постановки. Танцювальні імпрези – це вишуканість, щастя-осяяння, віртуозний дивертисмент 
                    емоцій, шик стилю, вершина визнання. У 2011 році на конкурсі «Київський вальс» хореографічний колектив 
                    ліцею посів перше місце… І це зрозуміло: еліта має бути прекрасною в усьому!
                    </p>

                    <img src={'imgDance.jpg'} alt="" className={styles.auto_img}/>
                    
                    <p>Танець – це певна енергетика, яку не можна описати простими словами, її потрібно відчути. Танець 
                    заворожує, він створює відчуття довершеності та самореалізації. Танець – це не просто рухи під музику, це 
                    скравість, краса, захоплення...</p>
            </div>
           
        </div>       
    )
    
  }
  export default ChoreographyStudio;