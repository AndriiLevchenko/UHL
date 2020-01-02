import React, {Component} from 'react';
import NewsOne from './NewsOne';
import styles from './News.module.css';
import axios from 'axios';
import {getNews} from './../../redux/appReducer'; 


class News extends Component {

    
    

    render(){
      console.log(this.props);
          const newsAllDataSort=Object.values(this.props.state.appReducer.news);
          // newsAllDataSort.sort(function (a, b){
          //       var dateA=new Date(a.date), dateB=new Date(b.date);
          //       return (dateA-dateB);
          // });
          const dateWord=(dateNumber)=>{
            switch(dateNumber.substr(0, 2)){
            case '01': return ('Січень' + dateNumber.substr(2, 9))
            case '02': return ('Лютий' + dateNumber.substr(2, 9))
            case '03': return ('Березень' + dateNumber.substr(2, 9))
            case '04': return ('Квітень' + dateNumber.substr(2, 9))
            case '05': return ('Травень' + dateNumber.substr(2, 9))
            case '06': return ('Червень' + dateNumber.substr(2, 9))
            case '07': return ('Липень' + dateNumber.substr(2, 9))
            case '08': return ('Серпень' + dateNumber.substr(2, 9))
            case '09': return ('Вересень' + dateNumber.substr(2, 9))
            case '10': return ('Жовтень' + dateNumber.substr(2, 9))
            case '11': return ('Листопад' + dateNumber.substr(2, 9))
            case '12': return ('Грудень' + dateNumber.substr(2, 9))

              default:console.log(dateNumber.substr(0, 2)); 
              return dateNumber
            }
          }

    return (  
        <div className={styles.endingScreen}> 
            <div className={styles.ending}>
                <h1>Новини і анонси</h1>
                <div>
                    {
                        newsAllDataSort.reverse().map(function(item, i){
                           return( <NewsOne key={i} newsId={newsAllDataSort[i].id} date={dateWord(newsAllDataSort[i].date)} name={newsAllDataSort[i].name} picture={newsAllDataSort[i].picture} text={newsAllDataSort[i].text}></NewsOne> ); 
                        }) 
                    }   
                </div>   
            </div>
        </div>  
      )
    }
}

export default News;