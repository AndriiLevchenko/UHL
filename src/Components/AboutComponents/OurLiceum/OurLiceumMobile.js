import React from 'react';
 //import s from './Navbar.module.css';
 import {NavLink} from 'react-router-dom';
 import styles from './../../Home/Home.module.css';

const AboutMobile =(props)=>{
    console.log(props.state);
 
		return(	
			<div className={styles.topMenuWide + ' ' +  styles.topMenuNarrow} >
                    <span className={styles.menu} onClick={props.onClick}> </span>
                 {/*  //toggle ismobileMenuOpen just if Mobile Menu is open   */}
                    <ul className={styles.clEffect16} onClick={ props.onClick}> 
                       
                        <div className={styles.dropdownMenu}>
                            <li><NavLink to='/aboutMobile'        activeClassName={styles.activeLink} data-hover="ПРО НАС">ПРО НАС</NavLink></li>
                           
                            <div className={styles.dropdownMenuContent}>
                                <NavLink to='/about' ><h4>ПРО НАС</h4></NavLink>
                                <NavLink to='/uchinnia' ><h4>УЧІННЯ</h4></NavLink>
                                <NavLink to='/vykhovannia' ><h4>ВИХОВАННЯ</h4></NavLink>
                                <NavLink to='/partnership' ><h4>ПАРТНЕРСТВО</h4></NavLink>
                                <NavLink  to='/science' ><h4>МИ-НАУКОВЦІ</h4></NavLink>
                                <NavLink to='/prozoristividkrytist' ><h4>ПРОЗОРІСТЬ І ВІДКРИТІСТЬ</h4></NavLink>
                            </div>
                        </div>
                       
                        <div className={styles.clearfix}></div>
                    </ul>
        	</div>         
		)
}

 
 export default AboutMobile;

