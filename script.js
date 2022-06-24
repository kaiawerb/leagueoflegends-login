const inputs = document.querySelectorAll('.login-form-input')
const login_button = document.querySelector('.login-button')

const handleFocus = ({target}) => {
    const span = target.previousElementSibling
    span.classList.add('login-form-active')
}

const handleFocusOut = ({target}) => {
    if(target.value == ''){
        const span = target.previousElementSibling
        span.classList.remove('login-form-active')
    }
}

const handleChange = ({}) => {
    const [username, password] = inputs;
    
    if(username.value && password.value.length >= 8){
        login_button.removeAttribute('disabled')
    }else{
        login_button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus))
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut))
inputs.forEach((input) => input.addEventListener('input', handleChange))

function backgroundRandom() {
    const wallpaper = document.querySelector('.wallpaper')
    var totalWallpaper = 3;
    var num = Math.ceil( Math.random() * totalWallpaper );
    wallpaper.style.backgroundImage = 'url(images/wallpaper-'+num+'.jpg)';
}

backgroundRandom();
