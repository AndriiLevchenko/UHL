import React, {Component} from 'react';
import styles from './News.module.css';
import {withRouter} from 'react-router-dom';
import dateWord from './../functions/functionDate';
import renderHTML from 'react-render-html';

class NewsOneOpened extends Component {

        // state={
        //     usersArray: null,
        //     userslist:[],
        //     commentsArray: [],
        //     loading:false
        // }    
   
    render(){
              console.log(this.props);
              const id = this.props.i;
              console.log(id);
              const openedNewsArray=(this.props.state.appReducer.news);
              const openedNews=openedNewsArray[id];
               console.log(openedNewsArray);
              console.log(openedNews);
              const imgNew = openedNews.picture;
              console.log(openedNews.picture);
              //const imgNew2 = '/'+imgNew;     
    	return(
    		    <div className={styles.bigArticleCard} >
                    <div className={styles.usersPicture}>
                        <img src={imgNew}  alt='photogpaphy' />                                   
                    </div>
                    <h2  className={styles.pPosition}>{openedNews.name}</h2>
                    <p  className={styles.pPosition}>{renderHTML(openedNews.text)}</p>
                    <h2  className={styles.pPosition}>{dateWord(openedNews.date)}</h2>             
                    <div className="clearfix"></div>
            </div>
    	)
    }      
}

export default withRouter(NewsOneOpened);