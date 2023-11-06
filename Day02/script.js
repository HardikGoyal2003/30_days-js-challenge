setInterval(timer, 1000);

function timer(){
    let x= new Date().toTimeString()
    let hr=x.slice(0,2)
    let min=x.slice(3,5)
    let sec=x.slice(6,8)

    document.getElementById("t").innerHTML=`${hr + "         "} :  ${min}  :  ${sec}`
}


