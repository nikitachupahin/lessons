 export default class QuestionsPage {
     constructor() {
         this.spollers = document.querySelectorAll('.questions-item');
         this.render();
     }
    render() {
        for(let item of this.spollers ) {
            item.addEventListener('click', function() {
              if(this.classList.contains('active')) {
                this.classList.remove('active')
              } else {
                this.spollers = document.querySelectorAll('.questions-item');
                  for(let el of this.spollers) {
                    el.classList.remove('active')
                  }
                  this.classList.add('active');  
              }
            })
        }
    }
 }