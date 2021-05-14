import newsCardsSlider from './mainNewsSliderData.js';

export default class NewsSlider {
    constructor() {
        this.launchNewsSlider();
    }
    createCardsOfNews() {
        const newsContainer = document.querySelector('.news__items-slider');
        const mainNewsContainer = document.querySelector('.news-items');

        mainNewsContainer.append(newsContainer);

        mainNewsContainer.innerHTML = newsCardsSlider.map( (news, indexSlider) => {

            let status = "news-slider__item-next";
            if( indexSlider === 0) {
               status = "news-slider__item-active";
            }
            if (indexSlider === newsCardsSlider.length -1) {
                status = "news-slider__item-last";
            }

                const { imgOfNew, titleOfNew, descriptionOfNew } = news;
    
                return `
                <div class="news__items-slider ${status}">
                <div class="news-item">
                <div class="item__img-wrapper">
                    <img class="item-img" src="${imgOfNew}" alt="Picture">
                </div>
                <div class="item__title-action">
                    <a href="#" class="title-action">${titleOfNew}</a>
                </div>
                <div class="item__description-news">${descriptionOfNew}</div>
                </div>
                <div class="news-item">
                <div class="item__img-wrapper">
                    <img class="item-img" src="${imgOfNew}" alt="Picture">
                </div>
                <div class="item__title-action">
                    <a href="#" class="title-action">${titleOfNew}</a>
                </div>
                <div class="item__description-news">${descriptionOfNew}</div>
                </div>
                <div class="news-item">
                <div class="item__img-wrapper">
                    <img class="item-img" src="${imgOfNew}" alt="Picture">
                </div>
                <div class="item__title-action">
                    <a href="#" class="title-action">${titleOfNew}</a>
                </div>
                <div class="item__description-news">${descriptionOfNew}</div>
                </div> 
            </div> ` ;
    
            } ).join('');
    }
    startNewsSlider(type) {
            const mainNewsContainer = document.querySelector('.news-items');
            const activeNews = document.querySelector('.news-slider__item-active');
            const lastNews = document.querySelector('.news-slider__item-last');
            let nextNews = activeNews.nextElementSibling;
            if (!nextNews) {
                nextNews = mainNewsContainer.firstElementChild;  
            }
            activeNews.classList.remove(['news-slider__item-active']);
            lastNews.classList.remove(['news-slider__item-last']);
            nextNews.classList.remove(['news-slider__item-next']);

            activeNews.classList.add('news-slider__item-last');
            lastNews.classList.add('news-slider__item-next');
            nextNews.classList.add('news-slider__item-active');
        }
    launchNewsSlider() {
        this.createCardsOfNews();
        this.startNewsSlider();
        setInterval(this.startNewsSlider, 8000);
    }    
}