
export default class CreateEl {
    constructor() {
        this.createAndRenderEl();
        // this.clickToggle();
    }
    clickToggle() {
      const toggleBtn = document.querySelector('.toggle-btn'),
            paragraphEl = document.querySelector('.paragraph__main-line'),
            descriptionEl = document.querySelector('.slider__description'),
            stringActive = document.querySelector('.paragraph__string')   
               

      const openInfoBox = () => {

        descriptionEl.classList.add('open');
        stringActive.classList.add('string__active');
        paragraphEl.style.display = "none";

        const openBox = document.querySelector('.slider__description.open')
        if (openBox) {
          descriptionEl.style.transform = "translateY(0)";
        }
        const closeBox = () => {
          if(openBox.style.transform = "translateY(0)") {

            descriptionEl.classList.remove('open');
            descriptionEl.style.transform = "translateY(50%)";
            paragraphEl.style.display = "block";
            stringActive.classList.remove('string__active');
            setInterval(this.clickToggle(), 1000);
          } else {
             
          }
        }

        toggleBtn.addEventListener('click', closeBox)
        
      }

      toggleBtn.addEventListener('click', openInfoBox)

    }
    createAndRenderEl() {   
        let mainContent = '',
        main = document.querySelector('.app__slider');
        
        return fetch(' https://boring-fe.herokuapp.com/react-hw-1')
                    .then(response => response.json())
                    .then( mainData => {
                        mainData.forEach(data => {
                          mainContent+=`
                          <div class="slider__item" style="transform: translateX(0%);">
                            <div class="slider__img-wrapper">
                              <img class="img" src="${data.img}" alt="Food" />
                            </div>
                            <div class="slider__description">
                              <div class="description__title">${data.title}</div>
                              <p class="description__paragraph">
                              <div class="paragraph__main-line">
                                Lorem ipsum dolor sit amet. consectetur adipisicin...
                              </div>
                                <span class="paragraph__string ">${data.description}</span>
                              </p>
                            </div>
                            <div class="slider__toggle-btn">
                              <button class="toggle-btn">Toggle</button>
                            </div>
                          </div>
                          `;
                          });
                          console.log(mainData);
                          main.innerHTML = mainContent;
                        })
                        .then( () => {
                          this.clickBtns();
                          this.clickToggle();
                        } )

        

                        
                        
    }
    clickBtns() {


        const prevBtn = document.getElementById('prevBtn'),
            nextBtn = document.getElementById('nextBtn'),
            firstSlider = document.getElementById('firstBtn'),
            lastSlider = document.getElementById('lastBtn'),
            slides = document.querySelectorAll('.slider__item');

      let index = 0;
      
      slides[0].classList.add('active');
      slides[1].style.transform = "translateX(-100%)";
      slides[2].style.transform = "translateX(-200%)";
      slides[3].style.transform = "translateX(-300%)";

      const activeSlide = n => {
        console.log(n);

        for(let slide of slides) {
            slide.classList.remove('active')
        }
        slides[n].classList.add('active');
      }

      const nextSlide = () => {
        if (index == slides.length - 1) {
          index = 0;
          activeSlide(index)
        } else {
          index++;
          activeSlide(index);
        }
      }

      const firstSlide = () => {
          index = 0;
          activeSlide(index)
      }

      const lastSlide = () => {
          index = slides.length - 1;
          activeSlide(index)
      }

      const prevSlide = () => {
        if (index == 0) {
          index = slides.length - 1;
          activeSlide(index)
        } else {
          index--;
          activeSlide(index);
        }
      }

      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      firstSlider.addEventListener('click', firstSlide);
      lastSlider.addEventListener('click', lastSlide)

      
    }
    
}