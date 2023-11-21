let [s,m,h]=[0,0,0]
let time=document.getElementById('time')
let timer=null

function st() {
    s++
    if (s==60) {
        s=0
        m++
    }

    if (m==60) {
        m=0
        h++
    }

    let hh= h<10?"0"+h:h
    let mm= h<10?"0"+m:m
    let ss= s<10?"0"+s:s
    
    time.innerHTML=`${hh}:${mm}:${ss}`
}

function start() {
    if (timer!=null) {
        clearInterval(timer)
    }
    
    timer= setInterval(() => {
        st()
    }, 1000);
        
}

function stop() {
    clearInterval(timer)
}

function reset() {
    clearInterval(timer);
    [s,m,h]=[0,0,0];
    time.innerHTML="00:00:00";
}
