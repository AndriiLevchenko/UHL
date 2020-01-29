import React, {Component} from 'react';

//import Button from './../Button/Button';
//import fire from '../Fire';
//import SignIn from './../Auth/SignIn';
//import SignUp from './Auth/SignUp';
//import SignUpContainer from './Auth/SignUpContainer';
import styles from './About.module.css';
 import {NavLink} from 'react-router-dom';
//import styles2 from './css/Bootstrap.module.css';
//<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
//import SignUp from './../Auth/SignUp';
//import {hideBeginningReducer} from './../../redux/quizReducer';


class About extends Component {

 


  render(){


	return(
        <div>
			<div className={styles.aboutContainer}>
				<div className={styles.aboutHead}>
					<h3>ДОРОГІ ЛІЦЕЇСТИ!</h3>
				</div>
				<NavLink to='/About'>
				<div className={styles.aboutFoto}>
					<img src={'director3.jpg'}  alt=" " />
				</div>
				</NavLink> 	
				<p> 
					Звертаюсь до Вас, мої Вихованці, – найдорожчого, що є у кожного із нас. Ми живемо у складний історичний час, що потребує від нас неймовірних зусиль і духовної сили. Духовність – саме те, що 
					нас об’єднувало у ліцеї. Ви – мої діти. Будьте сильними і мужніми, правдивими і чесними, достойними Ваших батьків і дідів. Ми обов’язково переможемо і збережемо гідність, свободу і гордість. Тож тривога 
					і турбота наша про Вас зрозуміла кожному, хто має дітей. Ми намагались вкладати у Ваш розум і серце все те, чим багаті самі, щоби Ви стали нашою опорою і прихистком у майбутньому.</p>
					<p>Усі, хто був ці роки поряд із Вами, – батьки, учителі, весь колектив ліцею – за  свою скромну і подвижницьку щоденну працю будуть Вами, я впевнена,  належно поціновані. А найбільша дяка – то добра пам'ять про Ліцей і достойне   життя кожного із Вас.
					Ви прагнули бути першими і найпершими в Україні: серед Вас наймолодший  народний депутат Верховної ради й міністр, наймолодший доктор наук й  президент успішної бізнес-компанії й не лише… У кожного із Вас своя сторінка  життєвого успіху.
					Я дякую за радість спільних творчих успіхів, хвилини щастя і недоспані ночі… Я вірю у Ваше майбутнє!
				</p>
				<div className={styles.aboutSignature}>
					<p>Ваш директор,</p>
					<p>САЗОНЕНКО ГАННА СТЕФАНІВНА,</p>
					<p>кандидат педагогічних наук, Народний учитель України</p>
				</div>
				<div className="clearfix"></div>
			</div>
	
			<div className={styles.aboutContainer}>
				<div className={ styles.aboutLeft}>
					<NavLink to='/About'>
					<div className={styles.aboutFotoLeftRight}>
						<img src={'uglia.jpg'}   alt=" " />		
					</div>
					</NavLink> 	
					<h3>ВІВАТ ЛІЦЕЙ! І СЛАВА ПЕРЕМОЖЦЯМ!</h3>
					<p>Ліцей замислювався як мрія... Мрія про Україну й українців, Про сучасну освіту,
					Мрія про свободу і незалежність, Про унікальність Кожного і Всіх. Мрія про повну реалізацію обдарувань Дитини,
					Про родинні взаємини, Мрія про особливий ліцейний. Дух... Це була мрія багатьох: Учителів,
					Учнів, Батьків і моя — Директора, БорецьЛіцей — моя Доля, мій Світ...
					Я щаслива, що кожен із Вас є в моєму Житті...</p>
					<p>Ганна Сазоненко</p>
				</div>
				<div className={ styles.aboutRight}>
					<NavLink to='/About'>
					<div className={styles.aboutFotoLeftRight}>
						<img src={'Nagorodu.png'}  className={styles.memberGridPicture} alt=" " />	
					</div>
					</NavLink> 	
					<h3>НАГОРОДИ</h3>
					<ol>
						<li><p>Почесна грамота Міністерства освіти та науки України, 1995 рік </p></li>
						<li><p>Почесна грамота Кабінету Міністрів України, 2001 рік</p></li>
						<li><p>Грамота Президента України, 2001 рік</p></li>
						<li><p>Диплом міжнародного відкритого Рейтингу популярності та якості "Золота Фортуна" про нагородження орденом "За розбудову України" імені Михайла Грушевського IV ступення, 2001 рік</p></li>
						<li><p>Орден Святого Рівноапостольного князя Володимира Великого II-го ступеня, 2001 рік</p></li>
						<li><p>Почесна грамота Національної комісії України у справах UNESCO, 2001 рік</p></li>
					</ol>
				</div>
					   <div className="clearfix"></div>
			</div>


			<div className={styles.memberSection}>
				<div className={styles.container}>
					<div className={styles.memberHead}>
						<h3>ВИДАТНІ ПОСТАТІ УКРАЇНИ – ПОЧЕСНІ ЛІЦЕЇСТИ!</h3>	  
					</div>
			    	<div className={styles.members}>
					    	<div className={styles.memberOne}>
					    		<NavLink to='/About'> <img src={'lyceum3.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Ніна Митрофанівна Матвієнко.       Співачка, народна артистка України, герой України</h5>
								<p> Українська співачка, народна артистка України з 1985, Герой України. Член Спілки кінематографістів України.</p>
							
                               	</div>
							<div className={styles.memberOne}>
								<NavLink to='/About' > <img src={'lyceum1.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Святіший Патріарх Київський і всієї Руси-України Філарет, Михайло Антонович Денисенко</h5>
								<p>Український православний церковний діяч, архієрей.  Патріарх Київський і всієї Руси-України. Герой України.</p>
								</div>
							<div className={styles.memberOne}>
								<NavLink to='/About' > <img src={'lyceum2.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Блаженніший Любомир Гузар, Верховний архиєпископ, єпископ Української Греко-Католицької Церкви</h5>
								<p> Український релігійний діяч, патріарх-предстоятель Української Греко-Католицької Церкви ( 2001—2011 р.р. ). </p>
							</div>
							<div className={styles.clearfix}> </div>
					    </div>
					    <div className={styles.members}>
					    	<div className={styles.memberOne}>
                                <NavLink to='/About' > <img src={'lyceum4.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Левко Лук’яненко, дисидент, герой України</h5>
								<p>Український політичний та громадський діяч, письменник, радянський дисидент. Борець за незалежність України у ХХ сторіччі. Співзасновник Української Гельсінської Групи. Народний депутат України. Герой України.</p>
							</div>
							<div className={styles.memberOne}>
								<NavLink to='/About' > <img src={'lyceum5.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Леонід Каденюк, перший космонавт, герой України</h5>
								<p> Український льотчик-випробувач 1-го класу, космонавт, генерал-майор авіації, перший і єдиний астронавт незалежної України, народний депутат України 4-го скликання, Народний Посол України, Герой України,</p>
							</div>
							<div className={styles.memberOne}>
								<NavLink to='/About'> <img src={'lyceum6.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Іван Степанович Марчук, народний художник України.</h5>
								<p> Український живописець, народний художник України. Є засновником «пльонтанізму» (таку назву жартома Іван Марчук дав своєму стилю — від слів «плести», «пльонтати»: картини ніби створені з клубочків чудернацьких ниток).</p>
							</div>
							<div className={styles.clearfix}> </div>
					    </div>
				</div>
			</div>
		</div>


  	)
    }
  }
  export default About;