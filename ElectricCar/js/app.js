import Parallax from './parallaxAndScroll.js';
import CatalogSlider from './mainCatalogSlider.js';
import NewsSlider from './mainNewsSlider.js';
import CatalogPage from './catalogPage.js';
import ViewAuto from './viewAutoPage.js';
import UsefulData from './usefulPage.js';
import QuestionsPage from './questionsPage.js';
import PopupReserveCall from './popupReserveCall.js';
import PopupQuestion from './popupQuestion.js';
import PopupRecord from './popupRecord.js';
import PopupRent from './popupRent.js';
import FormReserve from './formReserve.js';
import FormRecord from './formRecord.js';
import FormProposition from './formProposition.js';
import FormQuestion from './formQuestion.js';
import FormRent from './formRent.js';

const popupCall = new PopupReserveCall();
const popupRecord = new PopupRecord()
const popupQuestion = new PopupQuestion();
const popupRent = new PopupRent();
const formCall = new FormReserve();



if (window.location.pathname === "/fe2402/hw-lessons/ElectricCar/catalogPageOfElectricCar.html") {
	const page = new CatalogPage();
}; 
if(window.location.pathname === "/fe2402/hw-lessons/ElectricCar/usefulData.html") {
	const usefulData = new UsefulData();
};
if(window.location.pathname === "/fe2402/hw-lessons/ElectricCar/mainPageOfElectricCar.html") {
	const newsSlider = new NewsSlider();
	const catalogSlider = new CatalogSlider();
	const parallax = new Parallax();
	const formRecord = new FormRecord();
};
if(window.location.pathname === "/fe2402/hw-lessons/ElectricCar/chargingStationPage.html") {
	const formProposition = new FormProposition();
}
if(window.location.pathname === "/fe2402/hw-lessons/ElectricCar/viewAutoPage.html") {
	const view = new ViewAuto();
	const formRecord = new FormRecord();
	const formRent = new FormRent();
};
if(window.location.pathname === "/fe2402/hw-lessons/ElectricCar/questionAnswer.html") {
	const guestionsSpollers = new QuestionsPage();
	const formQuestion = new FormQuestion(); 
};
setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);





