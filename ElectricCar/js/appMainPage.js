import Parallax from './parallaxAndScroll.js';
import CatalogSlider from './mainCatalogSlider.js';
import NewsSlider from './mainNewsSlider.js';


const newsSlider = new NewsSlider();
const catalogSlider = new CatalogSlider();
const parallax = new Parallax();

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);





