 import React from 'react';
 //import s from './Navbar.module.css';
 import {NavLink} from 'react-router-dom';
 import styles from './Home.module.css';

const Navbar =(props)=>{
    console.log(props.state);
 
		return(	
			<div className={!props.isMobileMenuOpen ? styles.topMenuWide : styles.topMenuNarrow} >
                    <span className={styles.menu} onClick={props.onClick}> </span>
                 {/*  //toggle ismobileMenuOpen just if Mobile Menu is open   */}
                    <ul className={styles.clEffect16} onClick={props.isMobileMenuOpen ?  props.onClick : null}> 
                        <li><NavLink to='/' exact   activeClassName={styles.activeLink} data-hover="ГОЛОВНА">ГОЛОВНА</NavLink></li>
                        <li><NavLink to='/about'    activeClassName={styles.activeLink} data-hover="ПРО НАС">ПРО НАС</NavLink></li>
                        <li><NavLink to='/science'  activeClassName={styles.activeLink} data-hover="МИ - НАУКОВЦІ">МИ - НАУКОВЦІ</NavLink></li>
                        <li><NavLink to='/news'     activeClassName={styles.activeLink} data-hover="НОВИНИ">НОВИНИ</NavLink></li>
                        <li><NavLink to='/unesco'   activeClassName={styles.activeLink} data-hover="UNESCO">UNESCO</NavLink></li>
                        <li><NavLink to='/contacts' activeClassName={styles.activeLink} data-hover="КОНТАКТИ">КОНТАКТИ</NavLink></li>
                        <div className={styles.clearfix}></div>
                    </ul>
        	</div>         
		)
}

 
 export default Navbar;

