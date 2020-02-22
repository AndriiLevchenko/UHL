import React from 'react';
import styles from './Admission.module.css';


const Admission =()=> {  

	return (
      <div className={styles.wrapper}>
          <div className={styles.textBlock}>
                  <h2>ДОРОГІ ДІТИ!</h2>
                  <p>Ви наполегливі й розумні, самостійні й упевнені в собі, не боїтеся труднощів?</p>
                  <p>Ми раді надати Вам можливість випробувати себе і вступити до Українського гуманітарного ліцею Київського 
                    національного університету  імені Тараса Шевченка – саме того навчального закладу, у якому Ви мрієте навчатися.</p>
                  <p>Ми розраховуємо на Вашу свідомість, уміння приймати правильні рішення, бажання вчитися і носити горде звання – ліцеїст.</p>
                  <p>Ніколи не забувайте, що той, хто хоче чогось досягти, робить більше, ніж той, хто може. Тож учителі ліцею бажають 
                    Вам наснаги, завзяття й терпіння в  досягненні успіху. І можливо, Ви саме той учень, на якого чекає педколектив 
                    нашого навчального закладу.</p>
                  <p><a href='https://drive.google.com/file/d/1_xD0cPz7hBRZraNNJcfLCIknL1JLPyXk/view'>Правила прийому - 2019</a></p>
                  <p><a href='https://drive.google.com/file/d/1sb2KUYwVS_JxKdFfO25R88oW0vZpsKEx/view'>Календар вступної кампанії 2019</a></p>
                  <p><a href='https://drive.google.com/file/d/0B-4kKmm5MXN1eV8wM1lRTTlSdkU/view'>Навчальні програми (для вступу до 8 класу)</a></p>
                  <p>Шановні відвідувачі сайту! Звертаємо Вашу увагу на те, що для ознайомлення розміщено зразки вступних завдань за 
                    минулі роки, тому окремі питання можуть не відповідати діючим програмам.</p>
                  <p><a href='https://drive.google.com/file/d/0B-4kKmm5MXN1UVFZUFQxbk9tcGs/view'> Зразки тестів (8 клас)</a></p>
                  <p><a href='https://drive.google.com/file/d/0B-4kKmm5MXN1eUJuUndITHk2Ukk/view?usp=sharing'>Зразки тестів (9 клас)</a></p>

                  <h4 className={styles.year}><i>Бажаємо вам успіхів!</i></h4>
                  <h4 className={styles.year}><i>Учителі ліцею</i></h4>   

          </div>    
      </div>       
  )  
    
}
export default Admission;