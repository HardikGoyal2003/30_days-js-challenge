let pass=document.getElementById('password')
let msg=document.getElementById('msg')
let str=document.getElementById('strength')

pass.addEventListener('input',()=>{
    let pat=/["$&+,:;=?@#|'<>.-^*()%!"]/

    if (pass.value.length>0) {
        msg.style.display='block'
    } 
    
    else {
        msg.style.display='none'
        
    }

    if (pass.value.length<4) {
        str.innerHTML='Password is Weak'
        pass.style.borderColor='#ff5925'
        msg.style.color='#ff5925'
    }

    else if (pass.value.length>=4 && pass.value.length<8 && (/[A-z]/.test(pass.value))  && (/\d/.test(pass.value)) && (pat.test(pass.value))) {
        str.innerHTML='Password is Medium'
        pass.style.borderColor='yellow'
        msg.style.color='yellow'
    }

    if (pass.value.length>=8 & (/[A-Z]/.test(pass.value)) && (/[a-z]/.test(pass.value)) && (/\d/.test(pass.value)) && (pat.test(pass.value)) ) {
        str.innerHTML='Password is Strong'
        pass.style.borderColor='#26d730'
        msg.style.color='#26d730'
    }

})