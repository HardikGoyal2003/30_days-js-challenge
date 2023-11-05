const apikey = "Your_API_Key";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let search=document.querySelector(".search input")
let search_btn=document.querySelector(".search button")
let weather_icon=document.querySelector(".weather-icon")


async function checkweather(){
    try {

        if(search.value==""){
            const response= await fetch(apiUrl + "delhi" + `&appid=${apikey}`)
            console.log("Fetching...")  
            var data = await response.json();
            console.log(data)
        }
        
        else{
            const response= await fetch(apiUrl + search.value+ `&appid=${apikey}`)
            console.log("Fetching...")  
            var data = await response.json();
            console.log(data)

        }

        console.log("Processing...")
        console.log(data.name)

        if(data.name!=undefined){
            document.querySelector(".city").innerHTML=data.name
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C"
            document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"
        
            let weather=data.weather[0].main
            
            if(weather=="Rain"){
                weather_icon.src='images/rain.png'
            }
            
            
            else if(weather=="Smoke"){
                weather_icon.src='images/mist.png'
            }
                        
            
            else if(weather=="Mist"){
                weather_icon.src='images/mist.png'
            }

            
            else if(weather=="Clouds"){
                weather_icon.src='images/clouds.png'
            }
            
            else if(weather=="Clear"){
                weather_icon.src='images/clear.png'
            }
            
            else if(weather=="Atmosphere"){
                weather_icon.src='images/mist.png'
            }
            
            else if(weather=="Snow"){
                weather_icon.src='images/snow.png'
            }
            
            else if(weather=="Drizzle"){
                weather_icon.src='images/drizzle.png'
            }
            else if(weather=="Thunderstorm"){
                weather_icon.src='images/thunderstorm.png'
            }
            
            
            document.querySelector("#invalid").style.display='none'
            console.log("done!")
        }
        else{

            document.querySelector("#invalid").style.display='block'
        }
    } 
    
    catch(err){
        
        console.error(err)
    }

   


}
search_btn.addEventListener('click',()=>{
    console.log("Running...")
    checkweather()
})

