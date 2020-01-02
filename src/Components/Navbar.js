 import React from 'react';
 //import s from './Navbar.module.css';
 import {NavLink} from 'react-router-dom';
 import styles from './Home.module.css';

const Navbar =(props)=>{
    console.log(props);
		return(	
			<div className={styles.topMenu}>
                    <span className={styles.menu}> </span>
                    <ul className={styles.clEffect16}>
                        <li><NavLink to='/' exact   activeClassName={styles.activeLink} data-hover="Головна">Головна</NavLink></li>
                        <li><NavLink to='/about'    activeClassName={styles.activeLink} data-hover="Про нас">Про нас</NavLink></li>
                        <li><NavLink to='/science'  activeClassName={styles.activeLink} data-hover="Ми - науковці">Ми - науковці</NavLink></li>
                        <li><NavLink to='/news'     activeClassName={styles.activeLink} data-hover="Новини">Новини</NavLink></li>
                        <li><NavLink to='/unesco'   activeClassName={styles.activeLink} data-hover="Unesco">Unesco</NavLink></li>
                        <li><NavLink to='/contacts' activeClassName={styles.activeLink} data-hover="Контакти">Контакти</NavLink></li>
                        <div className={styles.clearfix}></div>
                    </ul>
        	</div>         
		)
}

 
 export default Navbar;

