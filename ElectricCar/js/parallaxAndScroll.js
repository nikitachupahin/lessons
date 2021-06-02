export default class Parallax {
    constructor() {
        window.onload = this.loadParallax();
        this.loadParallax();
        // this.scrollParallax();
    }
    loadParallax() {
        const parallax = document.querySelector('.main__page-first__screen');
        const car = document.querySelector('.first__screen-img');
                
        const forCar = 30;
    
        const speed = 0.05;
    
        let positionX = 0, positionY = 0;
        let coordXProcent = 0, coordYProcent = 0;
    
        function setMouseParallaxStyle() {
            const distX = coordXProcent - positionX;
            const distY = coordYProcent - positionY;
    
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);
    
            car.style.cssText = `transform : translate(${positionX / forCar}%,${positionY / forCar}%);`;
    
                requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();
    
        parallax.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;
    
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;
    
            coordXProcent = coordX / parallaxWidth * 100;
            coordYProcent = coordY / parallaxHeight * 100; 
        })
        
    }
    // scrollParallax() {
    //     let thresholds = [];
    //     for(let i = 0; i <= 1.0; i += 0.005) {
    //         thresholds.push(i);
    //     };

    //     const callback = function(entries, observer) {
    //         const parallax = document.querySelector('.main__page-first__screen');
    //         const parallaxHeight = parallax.offsetHeight;
    //         const scrollTopProcent = window.pageYOffset / parallaxHeight * 100;
    //         setParallaxItemsStyle(scrollTopProcent);

    //     };
    //     const observer = new IntersectionObserver(callback, {
    //         threshold: thresholds
    //     });

    //     const scrollItem = document.querySelector('.page-catalog');
    //     const scrollItem1 = document.querySelector('.page-advantages');
    //     const scrollItem2 = document.querySelector('.page-map');
    //     const scrollItem3 = document.querySelector('.page-news');
    //     const scrollItem4 = document.querySelector('.page-footer');

    //     observer.observe(scrollItem, scrollItem1, scrollItem2,  scrollItem3,  scrollItem4);

    //     function setParallaxItemsStyle(scrollTopProcent) {
    //         scrollItem.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
    //         scrollItem1.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
    //         scrollItem2.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4.25}%);`;
    //         scrollItem3.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3.32}%);`;
    //         scrollItem4.style.cssText = `transform: translate(0%,-${scrollTopProcent / 1.16}%);`;
    //     }
    // }
    
}
