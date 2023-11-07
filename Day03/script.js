const qr_txt=document.getElementById("qrtxt")
const qr_img=document.getElementById("qrimg")
const qr_download=document.getElementById("qrdownload")

btn.addEventListener('click',generate)

function generate(){

    if(qr_txt.value!=""){
        qr_img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_txt.value
        imgbox.classList.add('show-img')
        qr_download.href="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_txt.value + ".jpg"
    }
    
    else{
        
        qr_txt.classList.add('error')
        setTimeout(() => {
            qr_txt.classList.remove('error') 
        }, 1000);

    }
}

