import React from 'react';
import styles from './../About.module.css';

const Partnership =()=> {
   
    return(
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <h2>"ПАРТНЕР"-КЛУБ</h2>
                <img src={'Partnership1.jpg'} alt="" className={styles.autoImgNarrow}/>
                <p>Із метою творення європейського простору високоякісної освіти для майбутнього 26 червня 2004 року було засновано елітний освітянський 
                    «Партнер-клуб. «Партнер»-клуб об’єднав інноваційні заклади різних регіонів України та українських шкіл зарубіжжя. Учасники Міжнародного 
                    освітянського «Партнер»-клубу – ефективні школи на чолі з директором-стратегом.</p>
                <p>Члени «Партнер» клубу – єдина команда лідерів із неординарним, нестандартним, прогностичним мисленням. А спонукало всіх об’єднатися: 
                    потреба « революціонувати» освіту, допомогти кожному реалізувати особисті та корпоративні задуми, створити акмеологічну модель свого 
                    закладу, тобто модель успіху, піднятися на вищий щабель якості лідерства управління, створити імідж закладу, співпрацювати, взаємодіяти, 
                    розвиватись, спілкуватись, підтримувати одне одного.</p>
                <p>Завжди цікавою та актуальною є тематика засідань «Партнер»-клубу. Конференції, науково-практичні семінари дають можливість розглянути 
                    проблеми сучасної шкільної освіти, виховання молоді, питання стратегічного управління ефективною школою. Палкі дискусії на педагогічні 
                    теми поєднуються з психологічними тренінгами та лекціями.</p>
                <img src={'Partnership2.jpg'} alt="" className={styles.autoImg}/>
                <p>Міжнародний освітянський «Партнер»-клуб постійно в пошуку. Вітчизняні і зарубіжні навчальні заклади-члени «Партнер»-клубу є головними 
                    майданчиками апробації й упровадження новітніх освітянських технологій у практичну діяльність кожного вчителя. Постійно здійснюється 
                    аналіз діяльності, окреслюються перспективи. Досвід інноваційних розробок провідних навчальних закладів стає надбанням освітян України.
                    </p>
                <img src={'Partnership3.jpg'} alt="" className={styles.autoImg}/>
            </div>
        </div>       
    )  
}
export default Partnership;