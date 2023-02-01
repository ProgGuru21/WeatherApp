//define all the variables
let btn = document.getElementById("submit");
let city = document.getElementById("city");
let cityinput = document.getElementById("cityinput");
let result = document.getElementById("output_container"); 
let windspeed = document.getElementById("windspeed"); 
let temperature = document.getElementById("temperature"); 
let weathercondition = document.getElementById("weathercondition"); 
let loader  = document.getElementById("loading_container");
//function to convert the data to degree celcius
function convertion(val){
    return (val - 273).toFixed(2)
}
//api key for open weather map website
apik = "f355ba779810612c99ace48f59352fe8";
//adding event listener
btn.addEventListener("click", ()=>{
    loader.style.display = "block";
    let cityname = city.value;
    setTimeout(fetchData,2000);
    function fetchData(){
        loader.style.display = "none";
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityinput.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temp = data['main']['temp']
            var wndspd = data['wind']['speed']
            city.innerHTML = nameval;
            weathercondition.innerHTML = descrip;
            temperature.innerHTML = convertion(temp) + " &#8451";
            windspeed.innerHTML = wndspd + " km/h";
            result.style.display = "flex";



        })
        .catch(err => alert('please enter a valid city name!'))


    }
    
})