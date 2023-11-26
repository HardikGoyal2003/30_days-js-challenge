let countdown=new Date("Jan 1,2024 00:00:00").getTime()
let x=setInterval(() => {
       let now = new Date().getTime()
       let distance = countdown-now
       
       let days = Math.floor(distance / (1000 * 60 * 60 * 24));
       let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       let seconds = Math.floor((distance % (1000 * 60)) / 1000);

       document.getElementsByTagName('p')[1].innerHTML=days
       document.getElementsByTagName('p')[2].innerHTML=hours
       document.getElementsByTagName('p')[3].innerHTML=minutes
       document.getElementsByTagName('p')[4].innerHTML=seconds
       
       if (distance<0) {
               clearInterval(x)
               document.getElementsByTagName('p')[1].innerHTML="00"
               document.getElementsByTagName('p')[2].innerHTML="00"
               document.getElementsByTagName('p')[3].innerHTML="00"
               document.getElementsByTagName('p')[4].innerHTML="00"
       }


}, 1000);