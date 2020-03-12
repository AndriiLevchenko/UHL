import React, {Component} from 'react';
import styles from './News.module.css';
import Userscard from './../Home/Userscard';
 import {NavLink} from 'react-router-dom';
 import {takeLastNews, takePreviousNews} from './../../redux/appReducer';
 import Button from './../Button/Button';
 import Registration from './../News/Registration';
 import {closeAddNewsForm, openSignInComponent} from './../../redux/quizReducer';
  import {logoutUser} from './../../redux/authReducer';
 import dateWord from './../functions/functionDate';
 import SignIn from './../SignIn/SignIn';
 import renderHTML from 'react-render-html';


class News extends Component {

    
    
    closeAddNewsForm=()=>{
       this.props.dispatch(closeAddNewsForm());
    }
    render(){
      console.log(this.props);
         
           const newsLast=this.props.state.appReducer.news.length;
            console.log(newsLast);
    const newsFirst=0;
           const UsersArrayOpen2=Object.values(this.props.state.appReducer.news).reverse().slice(newsFirst, newsLast);
            const UsersArrayOpen =  [...UsersArrayOpen2];
    console.log(this.props.state.quizReducer.isSignInOpen);
      console.log('newsLast', newsLast);
        console.log('newsFirst', newsFirst);
          console.log('UsersArrayOpen', UsersArrayOpen);
    
     const moveNewsLeft=()=>{this.props.dispatch(takeLastNews());}
    const moveNewsRight=()=>{this.props.dispatch(takePreviousNews());}
    const openCloseSignIn=()=>{this.props.state.authReducer.user.email ? this.props.dispatch(logoutUser()) : this.props.dispatch(openSignInComponent());}
    const isRegistrationOpen = this.props.state.authReducer.user.email;
    console.log(this.props.state.appReducer.news);
    const currentNews=this.props.state.appReducer.news.length;
    console.log(this.props.state.appReducer.news.length);
    return (  
         <div className={styles.users}>

                    <h2>НОВИНИ І АНОНСИ</h2>
                    <div className={styles.signInButton}><Button value={ this.props.state.authReducer.user.email || 'LogIn' } onClick={()=>openCloseSignIn()} /></div>
                    <div className={styles.arrowLeft} onClick={()=>moveNewsLeft()}></div>
                      {this.props.state.quizReducer.isSignInOpen && <SignIn /> }
                     {isRegistrationOpen &&  <Registration permissionWriteEmail={this.props.state.authReducer.user.email} /> }
                    
                        {/* Формирование карточек Userscard */}                
                        {
                            UsersArrayOpen.map(function(item, i){
                              console.log(i, UsersArrayOpen[i]);
                              console.log(currentNews - i);
                                return( 
                               
                                    <React.Fragment key={i} >
                                      <NavLink to={'/NewsOneOpened/'+(currentNews-1 - i)}> 
                                        <Userscard 
                                        newsWide100={true}
                                        name={UsersArrayOpen[i].name} 
                                        picture={UsersArrayOpen[i].picture} 
                                        text={renderHTML(UsersArrayOpen[i].text)}
                                        //date={UsersArrayOpen[i].date}
                                        date={dateWord(UsersArrayOpen[i].date)}
                                        newsId={UsersArrayOpen[i].id}
                               
                                        />    
                                      </NavLink>                           
                                    </React.Fragment> 
                                
                                );        
                            })
                        }   
                         <div className={styles.arrowRight} onClick={()=>moveNewsRight()}></div>         
                        <div className='clearfix'></div>
                        <div className={styles.stro}>
                          <Button disabled ={false} value={' Додати новину'} onClick={this.closeAddNewsForm} />
                        </div>
                        
              
                </div>
            
      )
    }
}

export default News;