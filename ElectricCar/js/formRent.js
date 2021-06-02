export default class FormRent {
    constructor() {
        this.isFormRent();
    }
    isFormRent() {
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('formRent');
            form.addEventListener('submit', formSend);

            async function formSend(e) {
                e.preventDefault();
                
                let error = formValidate(form);
                
                if(error === 0) {
                    // let formRequired = document.querySelectorAll('._req');
                    // for (let index = 0; index < formRequired.length; index++) {
                    //     const input = formRequired[index];
                    // }
                    form.reset();

                } else {

                }
            }

            function formValidate(form) {
                let error = 0;
                let formRequired = document.querySelectorAll('._req');

                for (let index = 0; index < formRequired.length; index++) {
                    const input = formRequired[index];
                    formRemoveError(input);

                    if(input.getAttribute("type") === "checkbox" && input.checked === false ) {
                        formAddError(input);
                        error++;
                    } else if(input.value === "") {
                            formAddError(input);
                            error++;
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
            function selTest(input) {
                return 
            }
        })
    }
}