const colorPickerBtn = document.querySelector('#color_picker')
const colorList = document.querySelector('.all_colors')
const clear = document.querySelector('.clear')
const head=document.querySelector('.color_collection')
let picked_colors=JSON.parse(localStorage.getItem("pickedColors") || "[]")

function copyColor(elem) {
        console.log(elem)
        navigator.clipboard.writeText(elem.dataset.color)
        elem.src='images/tick.png'
        
        setTimeout(() => {
                elem.src='images/copy.png'
        }, 5000);

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
            <img src='images/copy.png' data-color=${c}>
        </li>
    `).join("")
    
    document.querySelectorAll('.color').forEach(li => {
            li.addEventListener('click',e=>copyColor(e.currentTarget.querySelector('img')))
    });
}


show(ct=0)

async function activateEye(){
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