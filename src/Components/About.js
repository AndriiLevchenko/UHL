import React, {Component} from 'react';

//import Button from './../Button/Button';
//import fire from '../Fire';
//import SignIn from './../Auth/SignIn';
//import SignUp from './Auth/SignUp';
//import SignUpContainer from './Auth/SignUpContainer';
import styles from './Home.module.css';
 import {NavLink} from 'react-router-dom';
//import styles2 from './css/Bootstrap.module.css';
//<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
//import SignUp from './../Auth/SignUp';
//import {hideBeginningReducer} from './../../redux/quizReducer';


class About extends Component {

 


  render(){


	return(
	

          <div >
        
	{/*	   --start-slide-bottom--  */}
			<div className={styles.aboutSection}>
				 <div className={styles.container}>
				     <div className={styles.aboutHead}>
							<h3>ДОРОГІ ЛІЦЕЇСТИ!</h3>
							<p> </p>
					 </div>
				      	<div className={styles.colMd5 + ' ' + styles.slideAbout}>
									<div className={styles.side}>
										 <div  id="top" className={styles.callbacksContainer}>
												<ul className={styles.rslides} id="slider4">
														<li>
														<img src={'/s2.jpg'} className={styles.imgResponsive} alt="" />
														</li>
														<li>
														<img src={'/s2.jpg'} className={styles.imgResponsive} alt="" />
														</li>
														<li>
															<img src={'/s2.jpg'} className={styles.imgResponsive} alt="" />
														</li>
												</ul>
												</div>
											</div>

							{/*		//	<script src="js/responsiveslides.min.js"></script>
					 // <script>
								// // You can also use "$(window).load(function() {"
								// $(function () {
								//   // Slideshow 4
								//   $("#slider4").responsiveSlides({
								// 	auto: true,
								// 	pager:false,
								// 	nav: true,
								// 	speed: 500,
								// 	namespace: "callbacks",
								// 	before: function () {
								// 	  $('.events').append("<li>before event fired.</li>");
								// 	},
								// 	after: function () {
								// 	  $('.events').append("<li>after event fired.</li>");
								// 	}
								//   });
							
								// });
							 //  </script>  
						//	--//End-slider-script--   */}

					<div className={styles.colMd4 + ' ' + styles.memberGrid}>
								<NavLink to='/About'> <img src={'director3.jpg'} className={styles.imgResponsive} alt=" " /></NavLink>		
					</div>

					
					</div>
					<div className={styles.colMd7 + ' ' +  styles.aboutText}>
					    <p>Звертаюсь до Вас, мої Вихованці, – найдорожчого, що є у кожного із нас. Ми живемо у складний історичний час, що потребує від нас неймовірних зусиль і духовної сили. Духовність – саме те, що нас об’єднувало у ліцеї.

Ви – мої діти. Будьте сильними і мужніми, правдивими і чесними, достойними Ваших батьків і дідів. Ми обов’язково переможемо і збережемо гідність, свободу і гордість. Тож тривога і турбота наша про Вас зрозуміла кожному, хто має дітей. Ми намагались вкладати у Ваш розум і серце все те, чим багаті самі, щоби Ви стали нашою опорою і прихистком у майбутньому.</p>
						 <p>Усі, хто був ці роки поряд із Вами, – батьки, учителі, весь колектив ліцею – за  свою скромну і подвижницьку щоденну працю будуть Вами, я впевнена,  належно поціновані. А найбільша дяка – то добра пам'ять про Ліцей і достойне   життя кожного із Вас.

Ви прагнули бути першими і найпершими в Україні: серед Вас наймолодший  народний депутат Верховної ради й міністр, наймолодший доктор наук й  президент успішної бізнес-компанії й не лише… У кожного із Вас своя сторінка  життєвого успіху.

Я дякую за радість спільних творчих успіхів, хвилини щастя і недоспані ночі…

Я вірю у Ваше майбутнє!</p>
						<span>Ваш директор
САЗОНЕНКО ГАННА СТЕФАНІВНА,
кандидат педагогічних наук, Народний учитель України</span>

					</div>
					<div className={styles.clearfix}></div>
				 </div>
			</div>
	{/*	    --start-about-bottom-   */}
	
		<div className={styles.slideBottom}>
			<div className={styles.slideBottomGrid}>

			
				 <div className={styles.container}>
					 <div className={styles.colMd6 + ' ' + styles.slideBottomGrid}>
					  <div className={styles.colMd4 + ' ' + styles.memberGrid}>
								<NavLink to='/About'> <img src={'uglia.jpg'}  className={styles.memberGridPicture} alt=" " /></NavLink>		
					</div>
							<h3>ВІВАТ ЛІЦЕЙ! І СЛАВА ПЕРЕМОЖЦЯМ!</h3>
							<p>Ліцей замислювався як мрія...
Мрія про Україну й українців,
Про сучасну освіту,
Мрія про свободу і незалежність,
Про унікальність Кожного і Всіх.
Мрія про повну реалізацію обдарувань Дитини,
Про родинні взаємини,
Мрія про особливий ліцейний. Дух...
Це була мрія багатьох: Учителів,
Учнів, Батьків і моя — Директора, бо
Ліцей — моя Доля, мій Світ...
Я щаслива, що кожен із Вас є в моєму Житті...

Ганна Сазоненко</p>
					 </div>
					 
					 <div className={styles.colMd6 + ' ' + styles.slideBottomGrid}>
					 <div className={styles.colMd4 + ' ' + styles.memberGrid}>
								<NavLink to='/About'> <img src={'Nagorodu.png'}  className={styles.memberGridPicture} alt=" " /></NavLink>		
					</div>
					       <h3>НАГОРОДИ</h3>
						   
						   <ol>
<li>Почесна грамота Міністерства освіти та науки України, 1995 рік </li>
<li>Почесна грамота Кабінету Міністрів України, 2001 рік</li>
<li>Грамота Президента України, 2001 рік</li>
<li>Диплом міжнародного відкритого Рейтингу популярності та якості "Золота Фортуна" про нагородження орденом "За розбудову України" імені Михайла Грушевського IV ступення, 2001 рік</li>
<li>Орден Святого Рівноапостольного князя Володимира Великого II-го ступеня, 2001 рік</li>
<li>Почесна грамота Національної комісії України у справах UNESCO, 2001 рік</li>
</ol>
					 </div>
					   <div class="clearfix"></div>
				 </div>
			 </div>
		</div>


		<div className={styles.memberSection}>
			<div className={styles.container}>
				<div className={styles.memberHead}>
						<h3>ВИДАТНІ ПОСТАТІ УКРАЇНИ – ПОЧЕСНІ ЛІЦЕЇСТИ!</h3>
					  
				</div>
			    <div className={styles.members}>
					    <div className={styles.colMd4 + ' ' +  styles.memberGrids}>
                                <NavLink to='/About' > <img src={'lyceum1.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Святіший Патріарх Київський і всієї Руси-України Філарет, Михайло Антонович Денисенко</h5>
								<p>Український православний церковний діяч, архієрей.  Патріарх Київський і всієї Руси-України. Герой України.</p>
							</div>
							<div className={styles.colMd4 + ' ' + styles.memberGrids}>
								<NavLink to='/About' > <img src={'lyceum2.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Блаженніший Любомир Гузар, Верховний архиєпископ, єпископ Української Греко-Католицької Церкви</h5>
								<p> український релігійний діяч, патріарх-предстоятель Української Греко-Католицької Церкви (2001—2011). </p>
							</div>
							<div className={styles.colMd4 + ' ' + styles.memberGrids}>
								<NavLink to='/About'> <img src={'lyceum3.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Ніна Митрофанівна Матвієнко.       Співачка, народна артистка України, герой України</h5>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div className={styles.clearfix}> </div>
					    </div>
					    <div className={styles.members}>
					    <div className={styles.colMd4 + ' ' +  styles.memberGrids}>
                                <NavLink to='/About' > <img src={'lyceum4.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Левко Лук’яненко, дисидент, герой України</h5>
								<p>Український політичний та громадський діяч, письменник, радянський дисидент. Борець за незалежність України у ХХ сторіччі. Співзасновник Української Гельсінської Групи. Народний депутат України. Герой України.</p>
							</div>
							<div className={styles.colMd4 + ' ' + styles.memberGrids}>
								<NavLink to='/About' > <img src={'lyceum5.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Леонід Каденюк, перший космонавт, герой України</h5>
								<p> український льотчик-випробувач 1-го класу, космонавт, генерал-майор авіації, перший і єдиний астронавт незалежної України, народний депутат України 4-го скликання, Народний Посол України, Герой України,</p>
							</div>
							<div className={styles.colMd4 + ' ' + styles.memberGrids}>
								<NavLink to='/About'> <img src={'lyceum6.jpg'} className="imgResponsive" alt=" " /></NavLink>
								<h5>Іван Степанович Марчук, народний художник України.</h5>
								<p> український живописець, народний художник України. Є засновником «пльонтанізму» (таку назву жартома Іван Марчук дав своєму стилю — від слів «плести», «пльонтати»: картини ніби створені з клубочків чудернацьких ниток)</p>
							</div>
							<div className={styles.clearfix}> </div>
					    </div>
				</div>
			</div>
		</div>

	// <div className={styles.midBg}>
	// 	<div className="container">
	// 		<div className="midSection">
	// 			 <h3>First Day at School!</h3>
	// 			 <h4>ARE YOU READY ?</h4>
	// 			 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  and typesetting industry. Lorem Ipsum has been the industry's standard dummy  ever since the 1500s,</p>
	// 		</div>
	// 	</div>
	// </div>

	// <fragment>
	// <div id="contact" className="address">
	// 	<div className="colMd7 addressLeft">
	// 		 <div className="products">
	// 			 <h3>Classes</h3>
	// 			 <ul>
	// 				 <li><a href="blog.html">Sports</a></li>
	// 				 <li><a href="blog.html">Music</a></li>
	// 				 <li><a href="blog.html">Dance</a></li>
	// 			 </ul>
	// 		 </div>
	// 		 <div class="companyAdout">
	// 			 <h3>Learn</h3>
	// 			 <ul>
	// 				 <li><a href="about.html">About</a></li>
	// 				 <li><a href="teachers.html">Teacher</a></li>
	// 				 <li><a href="contact.html">Contact</a></li>
	// 			 </ul>
	// 		 </div>
	// 		 <div class="clearfix"></div>
	// 		 <p>Creativity itself doesn't care at all about results - the only thing it craves is the process. 
	// 			Learn to love the process and let whatever happens next happen,<span>
	// 			without fussing too much about it</span></p>
	// 	</div>
	// 	<div class="colMd5 addressRight">
	// 		<h3>Our Offices</h3>
	// 		<p>324 Main Street , 2012 Stundy</p>
	// 		<p>04 84 25 51 54</p>
	// 		<ul class="bottom">
	// 			 <li>009 Street view, Office 21 4563 Paris</li>
	// 			 <li>00 123 456 78</li>
	// 		</ul>
	// 		<ul>
	// 			 <li>123, new street, 129907 New Yark</li>
	// 			 <li>023 456 23456</li>
	// 			 <li><a class="mail" href="mailto:info@example.com">123 int@example.com</a></li>
	// 		</ul>
	// 	</div>
	// 	 <div class="clearfix"></div>
	// </div>
	// </fragment>  */}
	  //address
		// footer
		// 	<div class="footer">
		// 		<div class="container">
		// 			<div class="copy">
		//               <p>&copy; 2015 All Rights Reserved Design by <a href="http://w3layouts.com/">W3layouts</a> </p>
		//             </div>
					
		// 		</div>
		// 	</div>  */}
	   //  start smoth scrolling
			// <script type="text/javascript">
			// 					jQuery(document).ready(function($) {
			// 						$(".scroll").click(function(event){		
			// 							event.preventDefault();
			// 							$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
			// 						});
			// 					});
			// 					</script>
			// 				start smoth scrolling
			// 			<script type="text/javascript">
			// 						$(document).ready(function() {
			// 							/*
			// 							var defaults = {
			// 					  			containerID: 'toTop', // fading element id
			// 								containerHoverID: 'toTopHover', // fading element hover id
			// 								scrollSpeed: 1200,
			// 								easingType: 'linear' 
			// 					 		};
			// 							*/
										
			// 							$().UItoTop({ easingType: 'easeOutQuart' });
										
			// 						});
			// 					</script>  
		//<a href="#home" id="toTop" class="scroll" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>   */}


  	)
    }
  }
  export default About;