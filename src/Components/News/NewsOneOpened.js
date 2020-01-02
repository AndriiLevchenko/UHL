import React, {Component} from 'react';
//import Comments from '../Comments/Comments';
import styles from './News.module.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class NewsOneOpened extends Component {

        state={
            usersArray: null,
            userslist:[],
            commentsArray: [],
            loading:false
        }    
   

    render(){
              console.log(this.props);
              const id = this.props.match.params.newsId;
                  console.log(id);
              const imgNew = this.props.state.appReducer.news[id].picture;
               console.log(this.props.state.appReducer.news[id].picture);
               const imgNew2 = '/'+imgNew;
                console.log(imgNew2);

        // const ArticleLength=this.state.userslist.length;
        // const choosenArticleNumber=ArticleLength-this.props.keykey-1;
        // console.log(this.state.usersArray);
 
    
    	return(
    		<div className={styles.bigArticleCard} >
                                <div className={styles.usersPicture}>
                                    <img src={imgNew2}  alt='photogpaphy' />                                   
                                </div>
                <div className={styles.usersText}>
                    <h2  className={styles.pPosition}>{this.props.state.appReducer.news[id].name}</h2>
                    <p  className={styles.pPosition}>{this.props.state.appReducer.news[id].text}</p>
                    <h2  className={styles.pPosition}>{this.props.state.appReducer.news[id].date}</h2>             
                </div>    
            </div>
    	)
    }    
    
    
}

export default withRouter(NewsOneOpened);