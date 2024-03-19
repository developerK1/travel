//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );
	
	let thisYear = new Date();
	let newYear = thisYear.getFullYear();
	
	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());

/* =============================================
 LINK FUNCTIONALITY
=============================================*/
const allNavLinks = document.querySelectorAll("ul li .nav-link");


//toggling an active state on the menu links
$(document).on('click', 'ul li', function(){
	$(this).addClass('active').siblings().removeClass('active');
});


allNavLinks.forEach(link =>{
	if(window.location.href.includes(link.textContent.toLowerCase())){
		link.classList.add("at-page")	
	}
})


//toggling the current link state
const menuHover = document.querySelector('ul');
const currentLi = document.querySelector('.at-page');

menuHover.addEventListener('mouseover', ()=>{
	currentLi.classList.remove('at-page');
});

menuHover.addEventListener('mouseout', ()=>{
	currentLi.classList.add('at-page');
});


/*====================================

--------------------------------------*/ 



//social icon animation
const socialimgs = document.querySelectorAll(".soc-med-icon");

socialimgs.forEach((socialimg)=>{
	socialimg.addEventListener("click",function(){
	this.style.transition = " all 0.3s ease-in-out";
		this.classList.add("soc-icon-js");
	});
});



//navbar icon animations
const navbar = document.querySelector('.navbar-toggler');
/*const icon = document.querySelector('.navbar-toggler-icon'); 

navbar.addEventListener('click', pressed);

function pressed(){
	navbar.classList.toggle('openn');
	icon .classList.toggle('openn-icon');
	navbar.style.transition = " 0.6s ease" ;
	icon.style.transition = " 1s ease" ;
}
*/

//HUMBEGURE NAV
const hamburger = document.querySelector(".navbar-toggler");
const Lines = document.querySelectorAll(".lines");
let hambStust = false;

hamburger.addEventListener("click", function(){
	
	if(!hambStust){

		Lines.forEach((line, index) =>{
			if(index == 0){
				line.classList.add("style1");
			}
			if(index == 2){
				line.classList.add("style2");
			}
			if(index == 1){
				line.classList.add("style3");
			}
		})
		
		hambStust = true;

	}else if(hambStust){


		Lines.forEach((line, index) =>{
			if(index == 0){
				line.classList.remove("style1");
			}
			if(index == 2){
				line.classList.remove("style2");
			}
			if(index == 1){
				line.classList.remove("style3");
			}
		})
		
		
		hambStust = false;
	}
})


/* ====================================================== =========================================
/*===================================================== ========================================== */

const seviceAsides = document.querySelectorAll("#services article aside");
let aisdeActiveStats = false;

seviceAsides.forEach((item)=>{
	item.addEventListener("mouseover", ()=>{
		item.lastElementChild.classList.add("seviceAsidLine");
		item.classList.add("seviceAside");
	});
	
	item.addEventListener("mouseout", ()=>{
		item.lastElementChild.classList.remove("seviceAsidLine");
		item.classList.remove("seviceAside");
	})
})


