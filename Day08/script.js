let progress=document.getElementById("progress")
let song=document.getElementById("song")
let ctrl_icon=document.getElementById("ctrl_icon")
let song_name=document.getElementsByTagName("h1")[0]
let singer=document.getElementsByTagName("p")[0]
let song_img=document.getElementsByTagName("img")[0]
let song_source=document.getElementsByTagName("source")[0]
let ct=0

const song_arr=[["Night Changes","One Direction"],
                ["Happier-Acoustic","Ed Sheeran"],
                ["They Don't Know About Us","One Direction"]]

song.onloadeddata=function(){
    progress.max=song.duration
    progress.value=song.currentTime
}

function play_pause() {
    if(ctrl_icon.classList.contains("fa-pause")){
        song.pause()
        ctrl_icon.classList.remove("fa-pause")
        ctrl_icon.classList.add("fa-play")
        
    }
    else{
        song.play()
        ctrl_icon.classList.remove("fa-play")
        ctrl_icon.classList.add("fa-pause")

    }
}

if (song.play()){
    setInterval(() => {
        progress.value=song.currentTime
    }, 1000);
}

progress.onchange=function(){
    song.play()
    song.currentTime= progress.value
    ctrl_icon.classList.remove("fa-play")
    ctrl_icon.classList.add("fa-pause")

}

function common_f_b() {
    song_name.innerHTML=`${song_arr[ct][0]}`
    singer.innerHTML=`${song_arr[ct][1]}`
    song_img.src=`images/${song_arr[ct][0]}.jpg`
    song_source.src=`media/${song_arr[ct][0]}.mp3`
    song.load()
    song.play()
}

function forward() {
    ct++
    if(ct>=(song_arr.length)){
        ct=0
    }

    common_f_b()

}

song.onended = function() {
    forward();
};

function backward() {
    ct--
    if(ct<0){
        ct=0
    }

    common_f_b()

}
