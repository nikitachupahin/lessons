import CatalogPageData from './catalogPageData.js';

export default class ViewAuto {
    constructor() {
        this.container = document.querySelector('.view-auto__imgs')
        this.currentImg = 1;
        this.countCards = 1;
        this.createAndRenderCardsOfCatalog();
        this.clickAndRenderExtraPhoto();
    }
    createAndRenderCardsOfCatalog() {
        this.container.innerHTML =  CatalogPageData
        .filter( (el ,index) => {
            return index > ( this.currentImg - 1 ) * this.countCards &&  index <= (this.currentImg ) * this.countCards;
        })
        .map( ({ img, id }) => {
            // <a href="" class="view-auto__img-action arrow-left"></a>
            // <a href="" class="view-auto__img-action arrow-right"></a>
            // <img class="img-main" src="${img}" alt="Main car">
            console.log(img)
            return `
            <div id="img-main" class="view-auto__img-main img-main" style="background: url(${img}) left 0% / 100% no-repeat;" >
                
            </div>
                <div class="view-auto__img-extra">
                    
                    <img class="img-main view-img" src="./img/extra1.png" alt="Extra">
                    <img class="img-main view-img" src="./img/extra2.png" alt="Extra">
                    <img class="img-main view-img" src="./img/extra3.png" alt="Extra">
                    <img class="img-main view-img" src="./img/extra4.png" alt="Extra">
                    
                </div>
            `;
        }).join('');
    }
    clickAndRenderExtraPhoto() {
        const wrapper = document.getElementById("img-main");
        const extraPhotos = document.querySelectorAll(".view-img");

        const arrOfImg=[
	        './img/largeExtra1.png',
	        './img/largeExtra2.png',
	        './img/largeExtra3.png',
            './img/largeExtra4.png',
        ];

        function startImg() {
            for(let i = 0; i < extraPhotos.length; i++) {
                
                extraPhotos[i].style.backgroundImage="url(" + arrOfImg[i] + ")"
            }
        };

        startImg()

        for(let k = 0; k < extraPhotos.length; k++) {
            
            extraPhotos[k].onclick = function(e) {
                wrapper.style.backgroundImage = e.target.style.backgroundImage;
            };
        };
    }

}