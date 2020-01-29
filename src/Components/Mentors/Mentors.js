import React from 'react';
import styles from './Mentors.module.css';
import {NavLink} from 'react-router-dom';



const Mentors =()=> {

  return(
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <h2>НАСТАВНИКИ...</h2>
                <div className={styles.quote}>
                      <p><i>"Тільки особистість може творити особистість,</i></p>
                      <p><i>тільки характером можна утворити характер…"</i></p>
                      <h4 className={styles.year}><i>К.Д. Ушинський</i></h4>
                </div>
                <img src={'Mentors.jpg'} alt="Вчителі " className={styles.autoImg}/>
                <p><span>Директор ліцею – Г. С. Сазоненко</span>, кандидат педагогічних наук, Народний учитель України, кавалер орденів «Княгині Ольги» III ст., «Ярослава 
                  Мудрого» V ст., «князя Володимира» ІІІ ст., «князя Володимира» І ст., «Святих рівноапостольних Кирила і Мефодія», знаків «В.О. Сухомлинського», 
                  «Петра Могили», «Софії Русової»</p>
                <h4 className={styles.year}>Якісний склад педагогічного колективу</h4>
                <img src={'Diagramma3.png'} alt=" " className={styles.autoImg}/>
                  
                  

                    <h4 className={styles.year}>Заслужені вчителі України:</h4>
                    <ul>
                        <li><p>Я. М. Гольденберг, учитель історії</p></li>
                        <li><p>К. М. Бальоха, учитель української літератури</p></li>
                        <li><p>Л. О. Доненко, учитель української літератури</p></li>
                        <li><p>О. А. Худобець,  учитель історії.</p></li>
                        <li><p>В. В. Назаров,  учитель правознавства</p></li>
                        <li><p>Л. . Гребенюк,  учитель історії</p></li>
                        
                    </ul>

                    <h4 className={styles.year}>Кандидати наук:</h4>
                    <ul>
                        <li><p>О. М. Надтока,  кандидат хімічних наук</p></li>
                        <li><p>Г. О. Проценко, кандидат педагогічних наук</p></li>
                        <li><p>А. О. Скорофатова,  кандидат філологічних наук</p></li>
                        <li><p>Н. В. Майбогіна,  кандидат економічних наук</p></li>
                    </ul>

                    <h4 className={styles.year}>Відмінники освіти України:</h4>
                    <ul>
                        <li><p>К. М. Бальоха, учитель української літератури</p></li>
                        <li><p>Л. М. Бусол,  учитель географії</p></li>
                        <li><p>Л. Г. Василенко,  учитель риторики</p></li>
                        <li><p>Я. М. Гольденберг,  учитель історії</p></li>
                        <li><p>Л. І. Гребенюк, учитель історії</p></li>
                        <li><p>Л. О. Доненко,  учитель української літератури</p></li>
                        <li><p>В. В. Назаров,  учитель правознавства</p></li>
                    </ul>

                     <h4 className={styles.year}>«Знак В.О. Сухомлинського»:</h4>
                    <ul>
                        <li><p>Л. М. Бусол,  учитель географії</p></li>
                        <li><p>Я. М. Гольденберг,  учитель історії</p></li>
                        <li><p>Л. І. Гребенюк, учитель історії</p></li>
                    </ul>


                    <h4 className={styles.year}>«Орден святих рівноапостольних Кирила і Мефодія»:</h4>
                    <ul>
                        <li><p>К. М. Бальоха, учитель української літератури</p></li>
                       
                    </ul>

                      <h4 className={styles.year}>«Орден князя Володимира» ІІІ ст.:</h4>
                    <ul>
                        <li><p>К. М. Бальоха, учитель української літератури</p></li>
                    </ul>

                      <h4 className={styles.year}>«Орден княгині Ольги ІІІ-го ступеня»:</h4>
                    <ul>
                        <li><p>Г. Г. Снітко,  учитель художньої культури</p></li>
                    </ul>

                    <h4 className={styles.year}>медаль УПУКП «Різдва Христова»:</h4>
                    <ul>
                        <li><p>К. М. Бальоха, учитель української літератури</p></li>
                        <li><p>Л. І. Гребенюк, учитель історії</p></li>
                    </ul>

            </div>    
        </div>       
    )  
    
  }
  export default Mentors;