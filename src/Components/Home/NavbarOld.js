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
                        <li><NavLink to='/' exact       activeClassName={styles.activeLink} data-hover="ГОЛОВНА">ГОЛОВНА</NavLink></li>
                                  {/* 
                                    <li><NavLink to='/uchinnia'     activeClassName={styles.activeLink} data-hover="УЧІННЯ">УЧІННЯ</NavLink></li>
                                    <li><NavLink to='/partnership'  activeClassName={styles.activeLink} data-hover="ПАРТНЕРСТВО">ПАРТНЕРСТВО</NavLink></li>
                                                                                                                                                             */}
                        <div className={styles.dropdownMenu}>
                            <li><NavLink to='/about'        activeClassName={styles.activeLink} data-hover="ПРО НАС">ПРО НАС</NavLink></li>
                           
                            <div className={styles.dropdownMenuContent}>
                                <NavLink to='/uchinnia' ><h4>УЧІННЯ</h4></NavLink>
                                <NavLink to='/vykhovannia' ><h4>ВИХОВАННЯ</h4></NavLink>
                                <NavLink to='/partnership' ><h4>ПАРТНЕРСТВО</h4></NavLink>
                                <NavLink  to='/science' ><h4>МИ-НАУКОВЦІ</h4></NavLink>
                                <NavLink to='/prozoristividkrytist' ><h4>ПРОЗОРІСТЬ І ВІДКРИТІСТЬ</h4></NavLink>
                            </div>
                        </div>
                        <li><NavLink to='/admission'         activeClassName={styles.activeLink} data-hover="ПРАВИЛА ПРИЙОМУ">ПРАВИЛА ПРИЙОМУ</NavLink></li>
                        <li><NavLink to='/news'         activeClassName={styles.activeLink} data-hover="НОВИНИ">НОВИНИ</NavLink></li>
                        <li><NavLink to='/unesco'       activeClassName={styles.activeLink} data-hover="UNESCO">UNESCO</NavLink></li>
                        <li><NavLink to='/contacts'     activeClassName={styles.activeLink} data-hover="КОНТАКТИ">КОНТАКТИ</NavLink></li>
                        <div className={styles.clearfix}></div>
                    </ul>
        	</div>         
		)
}

 
 export default Navbar;