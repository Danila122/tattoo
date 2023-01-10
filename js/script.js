document.addEventListener("DOMContentLoaded", ()=>{

	class App{
	
		acriveMenuBurger(){
			document.querySelector('.header__burger').addEventListener('click', (event)=>{
				event.preventDefault();
				event.currentTarget.classList.toggle('active');
				document.querySelector('.header__menu').classList.toggle('active');
			});
		}

		//Метод превращает картинку в теге img в фоновое изобоажение
		createBackgroundImage(){
			let ibg = document.querySelectorAll(".ibg");
		
			for (var i = 0; i < ibg.length; i++) {
				if (ibg[i].querySelector('img')) {
					ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				}
			}
		}

		//Метод создает плавный скролл к блоку на странице, при клике на пункт меню
		activationSmoothScrolling(){

			const menuLinks = document.querySelectorAll('.menu a');

			for (let i = 0; i < menuLinks.length; i++) {
				const menuLink = menuLinks[i];
		
				menuLink.addEventListener('click', (event)=>{
					event.preventDefault();
		
					document.querySelector('.header__burger').classList.remove('active');
					document.querySelector('.header__menu').classList.remove('active');
		
					const blockID = menuLink.getAttribute('href').slice(1);
					document.getElementById(blockID).scrollIntoView({block: "start", behavior: "smooth"});
				})
				
			}
		}

		init(){
			this.acriveMenuBurger();
			this.createBackgroundImage();
			this.activationSmoothScrolling();
		}
	}

	new App().init();

});


