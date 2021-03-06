console.log("hello world"); 

const navigation = document.querySelector(".navbar"); 
const slider = document.querySelector("#my-slider");
const bimage = document.querySelector(".brand-image");
const btitle = document.querySelector(".brand-title");
const collapseitem = document.querySelector(".navbar-collapse");
const navlink = document.querySelectorAll(".nav-link")


const faders = document.querySelectorAll(".fade-in"); 
const sliders = document.querySelectorAll(".slide-in"); 
console.log(faders); 

const options = {
	rootMargin:"-150px 0px 0px 0px"
}

const callbackfunction = function(entries,sliderobserver){

	entries.forEach(entry => {

		console.log(entry); 
		if(!entry.isIntersecting){
			navigation.classList.add("inverse");
			bimage.classList.add("inverse-brand-image");
			btitle.classList.add("inverse-brand-title");
			collapseitem.classList.remove("invert-drop");
			navlink.forEach(nav => {
				nav.classList.add("inverse-link");
			});
		}
		else if(entry.isIntersecting){
			navigation.classList.remove("inverse");
			bimage.classList.remove("inverse-brand-image");
			btitle.classList.remove("inverse-brand-title");
			collapseitem.classList.add("invert-drop");
			navlink.forEach(nav => {
				nav.classList.remove("inverse-link");
			});
		}
	})
}

const sliderobserver = new IntersectionObserver(callbackfunction,options);  

sliderobserver.observe(slider); 


// for faders

const options2 = {
	threshold:0.2
}

const callbackfunction2 = function(entries,appearonscroll){

	entries.forEach(entry =>{
		if(!entry.isIntersecting){
			return ; 
		}else{
			entry.target.classList.add("appear"); 
			 appearonscroll.unobserve(entry.target); 
		}

	})
}

const appearonscroll = new IntersectionObserver(callbackfunction2,options2); 


faders.forEach(fader =>{
	appearonscroll.observe(fader); 
})

// faders end

// for sliders

const options3 = {
}

const callbackfunction3 = function(entries,appearonslide){

	entries.forEach(entry =>{
		if(!entry.isIntersecting){
			return ; 
		}else{
			entry.target.classList.add("appear"); 
			appearonslide.unobserve(entry.target); 
		}

	})
}

const appearonslide = new IntersectionObserver(callbackfunction3,options3); 

sliders.forEach(slider=>{
	appearonslide.observe(slider); 
})

const button = document.querySelector(".show-hide"); 
const togg = document.querySelector(".invisi"); 


const featuretoggler = function(e){

	togg.classList.toggle("d-none"); 

	if(togg.classList.contains("d-none")){
		e.target.innerText = "show More";
	}else{
		e.target.innerText = "show less";
	}
}

button.addEventListener("click",featuretoggler); 