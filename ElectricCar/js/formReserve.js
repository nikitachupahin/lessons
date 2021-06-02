
export default class FormReserve {
    constructor() {
        this.isFormReverse();
    }
    isFormReverse() {
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('formReserveCall');
            form.addEventListener('submit', formSend);

            async function formSend(e) {
                e.preventDefault();
                
                let error = formValidate(form);
                
                if(error === 0) {
                    let formRequired = document.querySelectorAll('.__required');
                    for (let index = 0; index < formRequired.length; index++) {
                        const input = formRequired[index];
                        console.log(input.value)
                    }
                    form.reset();

                } else {

                }
            }

            function formValidate(form) {
                let error = 0;
                let formRequired = document.querySelectorAll('.__required');

                for (let index = 0; index < formRequired.length; index++) {
                    const input = formRequired[index];
                    formRemoveError(input);

                    if(input.classList.contains('._tel')) {
                        if(telTest(input)) {
                            formAddError(input);
                            error++;
                        }
                    } else if(input.getAttribute("type") === "checkbox" && input.checked === false ) {
                        formAddError(input);
                        error++;
                    } else {
                        if(input.value === "") {
                            formAddError(input);
                            error++;
                        }
                    }
                }
                    return error;
                }

            function formAddError(input) {
                input.parentElement.classList.add('error');
                input.classList.add('error')
            }
            function formRemoveError(input) {
                input.parentElement.classList.remove('error');
                input.classList.remove('error')
            }
            function telTest(input) {
                return /^\+380\d{9}$/.test(input.value)
            }
        })
    }
}