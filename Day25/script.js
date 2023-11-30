let temp2=0
let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
let toastbox=document.getElementById('toastbox')
const input=document.querySelectorAll('input')
const btn=document.querySelector('button')
let otp_generate_ct=0
let otp=''

input.forEach((i,index1)=>{
        i.addEventListener('keyup',(e)=>{
                const current_input=i
                const nextInput=i.nextElementSibling
                const prevInput=i.previousElementSibling
                console.log()

                if (current_input.value.length>1) {
                        current_input.value=''
                        return
                }

                if (nextInput && nextInput.hasAttribute('disabled') && current_input.value !=='') {
                        nextInput.removeAttribute('disabled')
                        nextInput.focus()

                }

                if (e.key==='Backspace') {
                        
                        input.forEach((i,index2)=>{
                                console.log(index1,index2)
                                if (index1<= index2 && prevInput) {
                                        i.setAttribute('disabled',true)
                                        current_input.value=''
                                        prevInput.focus()
                                }
                        })
                }

                if (!input[3].disabled && input[3].value!=='') {
                        btn.classList.add('active')
                        return
                }
                btn.classList.remove('active')
        })
})

window.addEventListener('load',()=>input[0].focus())
window.addEventListener('load',generateOtp)
// =================================================Pop-Up==============================================================================
function open_pop(){
        let check=otpCheck()
        
        if (check==1) {
                
                if (btn.classList.contains('active') && check) {
                        popup.classList.add("open-pop")
                        document.querySelector('.container').style.display='none'
                }
        } 
        
        else {
               temp2++
               if (temp2<=3) {
                        document.getElementsByTagName('h5')[1].style.display='block'
                        setTimeout(() => {
                                        document.getElementsByTagName('h5')[1].style.display='none'
                        }, 1000);                 
               } 
               
               if(temp2==3){
                        document.querySelector('.container').style.display='none'
                        closePop()
                
               }
        }
}

function cls_pop(){
        popup.classList.remove("open-pop")
        popup2.classList.remove("open-pop")
        document.querySelector('.container').style.display='flex'
        input.forEach((i)=>{

                i.value=''
        })

        window.location.reload()

}

// =================================================OTP Notification===================================================================

function otpCheck() {
        let temp=""
        input.forEach((i)=>{
                temp+=`${i.value}`                
        })

        if (temp==otp) {
                return 1
        }

}

function generateOtp() {
     
        otp_generate_ct++
        if (otp_generate_ct<=3) {
                
                otp=''
                for (let i = 0; i < 4; i++) {
                        const digit=Math.floor(Math.random()*10)
                        otp+=digit                              
                }

                showToast(m1+`OTP : ${otp}`)     
                
                if(otp_generate_ct===3){
                        document.getElementsByTagName('h6')[0].style.display='none'
                        document.getElementsByTagName('h5')[0].style.display='none'
                }
        }

}


let m1=`<i class="fa-solid fa-envelope" style="color: #333;"></i>`
function showToast(msg) {
    let toast =document.createElement("div")
    let toast_btn =document.createElement("button")
    toast.classList.add('toast')
    toast_btn.classList.add('bttn')
    toast.innerHTML=msg
    toast_btn.innerHTML='<i class="fa-solid fa-xmark" style="color: #494a4b;"></i>'
    toast.appendChild(toast_btn)
    toastbox.appendChild(toast)

    toast_btn.addEventListener('click',(e)=>{
        toast.remove()
    })

    setTimeout(() => {
        toast.remove()
    }, 1000*60);
}

// =================================================Close_Pop==========================================================================

function closePop() {
        popup2.classList.add("open-pop")       
}


