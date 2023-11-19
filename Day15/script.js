const pass_box=document.getElementById('password')
let length=12
let UpperCase='',LowerCase='',Digits='';
let uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowercase='abcdefghijklmnopqrstuvwxyz'
let digits='0123456789'
let special_char=''
all_pre=document.querySelectorAll('.side pre')
let passkey=[]
let side=document.querySelector('.side')
let check=document.querySelectorAll('.chars input')
let flag=0


function check_box() {
    special_char=''
    for (let i = 0; i < check.length; i++) {
        const element = check[i];
        if (element.checked) {
            special_char+=element.value
        } 
    }
}

function show_side() {
    side.style.display='flex'
}

function hide_side() {
    side.style.display='none'
}

function set_done() {
    hide_side()
    check_box()
    custom()
}

function common() {
    passkey=[]

    if (flag==0) {
        UpperCase=uppercase
        LowerCase=lowercase
        Digits=digits
    }
    passkey.push(UpperCase[Math.floor(Math.random()* UpperCase.length)])
    passkey.push(LowerCase[Math.floor(Math.random()* LowerCase.length)])
    passkey.push(Digits[Math.floor(Math.random()* Digits.length)])
    passkey.push(special_char[Math.floor(Math.random()* special_char.length)])
    const allchar= UpperCase + LowerCase + Digits+special_char;
    
        while(length>passkey.length){
            passkey.push(allchar[Math.floor(Math.random()* allchar.length)])
        }
}

function slide_value(index,value) {
    switch(index){

        // Case to show Slider Value of length
        case 0:
            all_pre[index].innerHTML=`Length : ${value}`
            break
        
        // Case to show Slider Value of UpperCase
        case 1:
            if (value==0) {
                all_pre[index].innerHTML=`None`
            }
            else if (value==1) {
                all_pre[index].innerHTML=`A`
            }
            else {
                all_pre[index].innerHTML=`A-${uppercase[parseInt(value)-1]}`
            }
            break
            
        // Case to show Slider Value of LowerCase
        case 2:
            if (value==0) {
                all_pre[index].innerHTML=`None`
            }
            else if (value==1) {
                all_pre[index].innerHTML=`a`
            }
            else {
                all_pre[index].innerHTML=`a-${lowercase[parseInt(value)-1]}`
            }
            break

            // Case to show Slider Value of LowerCase
        case 3:
            if (value==0) {
                all_pre[index].innerHTML=`None`
            }
            else if (value==1) {
                all_pre[index].innerHTML=`0`
            }
            else {
                all_pre[index].innerHTML=`0-${digits[parseInt(value)-1]}`
            }
            break

    }
}

function custom() {
    all_custom=document.querySelectorAll('.side input')
    length=all_custom[0].value
    UpperCase=uppercase.slice(0,[all_custom[1].value])
    LowerCase=lowercase.slice(0,[all_custom[2].value])
    Digits=digits.slice(0,[all_custom[3].value])
    flag=1
    common()
    
}

function create_passkey(){
    common()
    pass_box.value=passkey.join('')
}

function copy() {
    let copy_img=document.querySelector('.display img')
    pass_box.select()
    document.execCommand('copy')
    copy_img.src='images/tick.png'
    
    setTimeout(() => {
        copy_img.src='images/copy.png'
    }, 5000);

}
