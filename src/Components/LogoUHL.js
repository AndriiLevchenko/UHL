 import React from 'react';
 //import s from './Navbar.module.css';
 import {NavLink} from 'react-router-dom';
 import styles from './Home.module.css';

const LogoUHL =()=>{
		return(	
                <div className={styles.logo}>
                    <NavLink to='/'><h1>Український  Гуманітарний <span> Ліцей </span></h1></NavLink>
                </div>       
		)
}

 
 export default LogoUHL;

