let toastbox=document.getElementById('toastbox')
let m1='<i class="fa-solid fa-circle-check" style="color: green;"></i>Successfully Submitted'
let m2='<i class="fa-solid fa-circle-xmark" style="color: red;"></i>Please fix the Error'
let m3='<i class="fa-solid fa-circle-exclamation" style="color: orange;"></i>Invalid input, Check again'



function showToast(msg) {
    let toast =document.createElement("div")
    let toast_btn =document.createElement("button")
    toast.classList.add('toast')
    toast_btn.classList.add('btn')
    toast.innerHTML=msg
    toast_btn.innerHTML='<i class="fa-solid fa-xmark" style="color: #494a4b;"></i>'
    console.log(toast.appendChild(toast_btn))
    toastbox.appendChild(toast)

    toast_btn.addEventListener('click',(e)=>{
        toast.remove()
    })

    if(msg.includes('Successfully')){
        toast.classList.add('success')
    }
    else if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }
    else if(msg.includes('Error')){
        toast.classList.add('error')
    }

    setTimeout(() => {
        toast.remove()
    }, 5500);
}