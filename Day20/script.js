const colorPickerBtn = document.querySelector('#color_picker')
const colorList = document.querySelector('.all_colors')
const clear = document.querySelector('.clear')
const head=document.querySelector('.color_collection')
let picked_colors=JSON.parse(localStorage.getItem("pickedColors") || "[]")

function copyColor(elem) {
        navigator.clipboard.writeText(elem.dataset.color)
        elem.src='images/tick.png'
        
        setTimeout(() => {
                elem.src='images/copy.png'
        }, 5000);
}

function deleteColor(elem) {
        console.log(elem.parentNode)
        const i = picked_colors.indexOf(elem.dataset.color)
        picked_colors.splice(i,1)
        localStorage.setItem("pickedColors",JSON.stringify(picked_colors))
        show(ct=0)

}

function show(ct) {
        if (picked_colors.length==0) {
                head.classList.add('hide')
        }
        
        else{
                head.classList.remove('hide')

        }
    colorList.innerHTML =picked_colors.map(c=>`
        <li class="color">
            <span class="num">${++ct}.</span>
            <span class="rect" style="background-color:${c}; border: 1px solid ${c == '#ffffff' ? "#ccc" : c };"></span>
            <span class="value">${c}</span>
            <img src='images/delete.png' data-color=${c} class="delete">
            <img src='images/copy.png' data-color=${c} class="copy">
        </li>
    `).join("")
    
        document.querySelectorAll('.copy').forEach(copy_icon => {
            copy_icon.addEventListener('click',e=>copyColor(e.currentTarget))
    });
    
        document.querySelectorAll('.delete').forEach(delete_icon => {
            delete_icon.addEventListener('click',e=>deleteColor(e.currentTarget))
    });
}


show(ct=0)

async function activateEye(){
        document.body.style.display="none"
        try {
                const eyeDropper = new EyeDropper()
                const response = await eyeDropper.open()
                const copied=response.sRGBHex
                navigator.clipboard.writeText(copied)
                
                if (!picked_colors.includes(response.sRGBHex)) {
                        
                        picked_colors.push(response.sRGBHex)
                        localStorage.setItem("pickedColors",JSON.stringify(picked_colors))
                        show(ct=0)
                }

        } catch (error) {
                console.log("Failed to copy the color code!!")
        }
        document.body.style.display="block"
}       

function clear_all() {
        picked_colors.length=0;
        localStorage.setItem("pickedColors",JSON.stringify(picked_colors))
        head.classList.add('hide')
        show()
}

colorPickerBtn.addEventListener('click', activateEye)
clear.addEventListener('click', clear_all)