const form = document.querySelector('.formContainer');

    
    function passConfirm () {
        if (password.value === '' || confirm_password.value === '') {
            console.log('this bih emmmy')

        }

        else if (password.value != confirm_password.value) {

            classList.add('error')
        }


        else if (password.value === confirm_password.value) {

            classList.add('confirm')
        }
    }