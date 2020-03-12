import React from 'react';
import styles from './Home.module.css';

const Userscard = (props) =>{
    console.log(props);
	return(
		<div className={props.newsWide100 ? styles.usersCardNews : styles.usersCard} >
            <div className={props.newsWide100 ? styles.usersPictureNews : styles.usersPicture} >
            <div>
                <div className={styles.usersDate}>  {props.date}</div>
                <div className={styles.imageContainer}>
                    <img src={props.picture} alt='photogpaphy' /> 
                </div>

            </div>                                  
                
            </div>
            <div className={props.newsWide100 ? styles.usersTextNews : styles.usersText} >
                <h4>{props.name}</h4>   
              
                <div className={styles.pText}>{props.text}</div> 
                <div className='p-telephone'>{props.telephone}</div>          
            </div>  
        </div>
	)
}

export default Userscard
