let eye_i=document.getElementById('eye_icon')
let passkey=document.getElementById('password')

function check() {
    if (passkey.type=='password') {
        passkey.type='text'
        eye_i.src='images/eye-o.png'
    }
    
    else{
        passkey.type='password'
        eye_i.src='images/eye-c.png'
    }
}