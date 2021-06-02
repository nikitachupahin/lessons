import UsefulPageData from './usefulPageData.js';

export default class UsefulData {
    constructor() {
        this.prevBtn = document.querySelector('.arrow-1__action');
        this.nextBtn = document.querySelector('.arrow-2__action');
        this.containerNewsCards = document.querySelector('.news__items-wrapper');
        this.dotsItems = document.querySelectorAll('.docs__item');
        this.arrow = document.querySelectorAll('.arrow');
        this.dotsActions = document.querySelectorAll('.docs__item-action')
        this.pageNumber = 0;
        this.countCards = 5;
        
        this.launchNewsSlider();
    }
    createAndRenderCardsOfNews() {
        for(let el = 0; el < UsefulPageData.length; el++ ) {
            const e = UsefulPageData[el];
        
        // (this.pageNumber - 1 ) * this.countCards
        this.containerNewsCards.innerHTML =  UsefulPageData
        .filter( (el ,index) => {
            return index >= (this.pageNumber ) * this.countCards &&  index < ((this.pageNumber ) * this.countCards) + 5;
            
        })
        .map( ({ img, title, subtitle}) => {
            
            // news__item-reverse
            
                return `
            <div class="news__item ">
                <div class="news-item__img-wrapper">
                    <img class="item-img" src="${img}" alt="Car">
                </div>
                <div class="news__item-description">
                    <div class="news__title">
                        ${title}
                    </div>
                    <div class="news__item-description--subtitle">
                        ${subtitle}
                    </div>
                    <div class="news__item-description--btn ">
                        <a href="articlePage.html" class="view-action action__sign-up action__detail">Подробнее</a>
                    </div>
                </div>
            </div>
                ` ;   
             } 
            ).join('');
         }
            }
        clickBtns() {
            this.nextBtn.addEventListener('click', () => {
            
             this.pageNumber++;
             this.containerNewsCards.innerHTML = "";
             this.createAndRenderCardsOfNews();
             this.activeDot(this.pageNumber)
            
            })
            this.prevBtn.addEventListener('click', () => {
                this.pageNumber--;
                this.containerNewsCards.innerHTML = "";
                this.createAndRenderCardsOfNews();
                this.activeDot(this.pageNumber)
            }) 
            // this.dotsActions[1].addEventListener('click', () => {
            //     this.pageNumber++;
            //     this.containerCatalogCards.innerHTML = "";
            //     this.createAndRenderCardsOfCatalog();
            //     this.activeDot(this.pageNumber)
            //    })
              
        }
        
        activeDot(n) {
            for( let dot of this.dotsItems) {
                dot.classList.remove('docs__item-active');
                dot.classList.add('docs__item-next')
            }
            for( let dotAction of this.dotsActions) {
                dotAction.classList.remove('docs__item-active');
            }
            for (let mainArrow of this.arrow) {
                mainArrow.classList.remove('arrow');
            }
            this.dotsActions[n].classList.add('docs__item-active')
            this.dotsItems[n].classList.remove('docs__item-far')
            this.dotsItems[n].classList.remove('docs__item-next')
            this.dotsItems[n].classList.add('docs__item-active')

            if (this.pageNumber === 2 ) {
                this.arrow[1].classList.add('arrow__no-click')
            } else {
                // this.arrow[n].classList.remove('arrow__no-click')
            }
            if(this.pageNumber === 0) {
                this.arrow[0].classList.add('arrow__no-click')
            }  else {
                // this.arrow[n].classList.remove('arrow__no-click')
            }
            if(this.pageNumber === 1) {
                this.arrow[0].classList.remove('arrow__no-click')
                this.arrow[1].classList.remove('arrow__no-click')
            }
            
        }     
        launchNewsSlider() {
                    this.createAndRenderCardsOfNews();
                    this.clickBtns();
        }
}