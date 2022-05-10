const homeScroll = document.querySelector('#homeHref');
const productsScroll = document.querySelector('#productsHref');
const aboutScroll = document.querySelector('#aboutHref');

const header = document.querySelector('header');
const products = document.querySelector('#products');
const about = document.querySelector('#about');

const intro = document.querySelector('.intro');


/*scrolling*/

function scrollTo(elem){
	window.scroll({
		left: 0,
		top: elem.offsetTop,
		behavior: 'smooth'
	});
};


productsScroll.addEventListener('click', (event) =>{
	event.preventDefault();
	scrollTo(products);
});

aboutScroll.addEventListener('click', (event) =>{
	event.preventDefault();
	scrollTo(about);
});

homeScroll.addEventListener('click', (event) =>{
	event.preventDefault();
	scrollTo(header);
});



/*header*/

function scrollHeader(){
	if (document.documentElement.scrollTop >= intro.clientHeight) {
		header.classList.add('fixed');
	} else if(document.documentElement.scrollTop < intro.clientHeight){
		header.classList.remove('fixed');
	}
};

document.addEventListener('scroll', () =>{
	scrollHeader();
});
