export default class PopupReserveCall {
    constructor() {
        this.popupLinks = document.querySelectorAll('.popup-link');
        this.renderPopup();
        
    }
    renderPopup() {
        let unlock = true;
        const popupActive = document.querySelector('.popup__item.open');
        if(this.popupLinks.length > 0) {
            for(let index = 0 ; index < this.popupLinks.length; index++) {
                const popupLink = this.popupLinks[index];
                popupLink.addEventListener("click", function (e) {
                    const popupName = popupLink.getAttribute('href').replace('#', '');
                    const currentPopup = document.getElementById(popupName);
                    popupOpen(currentPopup);
                    e.preventDefault();

                    function popupOpen(currentPopup) {
                        if(popupActive) {
                           
                        } else {
                            bodyLock();
                        }
                        if(currentPopup && unlock) {
                            currentPopup.classList.add('open');
                            currentPopup.addEventListener("click", function (e) {
                                if(!e.target.closest('.popup__item__content')) {
                                    popupClose(e.target.closest('.popup__item'));
                                }
                            });
                        } else {
                            currentPopup.classList.add('open');
                            currentPopup.addEventListener("click", function (e) {
                                if(!e.target.closest('.popup__item__content')) {
                                    popupClose(e.target.closest('.popup__item'));
                                }
                            });
                        }
                    }

                    function popupClose(popupActive, doUnlock = true ) {
                        if(unlock) {
                            popupActive.classList.remove('open');
                            if(doUnlock) {
                                bodyUnLock();
                            }
                        }
                    }
                    function bodyLock() {
                        const timeout = 800;
                        const lockPadding = document.querySelectorAll(".lock-padding");
                        const body = document.querySelector('body');
                        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + "px";
                                    for(let index = 0 ; index < lockPadding.length; index++) {
                                        const el = lockPadding[index];
                                        el.style.paddingRight = lockPaddingValue;
                                    }
                                    body.style.paddingRight = lockPaddingValue;
                                    body.classList.add('lock');
        
                                    unlock = false;
                                    setTimeout(function () {
                                        unlock = true;
                                    }, timeout)
                    }
                    function bodyUnLock() {
                        const timeout = 800;
                        setTimeout(function () {
                            const lockPadding = document.querySelectorAll(".lock-padding");
                            const body = document.querySelector('body');
                            for(let index = 0 ; index < lockPadding.length; index++) {
                                const el = lockPadding[index];
                                el.style.paddingRight = '0px';
                            }
                            body.style.paddingRight = '0px';
                            body.classList.remove('lock');
                        }, timeout); 
                
                        unlock = false;
                        setTimeout(function () {
                            unlock = true;
                        }, timeout)
                    };

                })
                
            }
        }
        
    }
}