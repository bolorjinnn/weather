// API-->Aplication Programming Interface (hadgalsan data)
// fetch()-->api request yavuulah /http:/
// promise -->then()   requestees hariu avah amlalt
// status:200 /approved/
// status:300 404 500 error
// json() file --> hun harahad hylbar bolsn data file
fetch('https://fakestoreapi.com/users').then(
    response => response.json()
).then(
    data=>{
        console.log(data);
        console.log(data[0].email);
        console.log(data[0].address.city);
        console.log(data.length-1);
        console.log(data[data.length-1].name.lastname)
    }
)
const input=document.getElementsByTagName('input')[0];
const btn=document.getElementsByTagName('button')[0];
const temp=document.querySelector('.temp');
const wind=document.querySelector('.wind');
const desc=document.querySelector('.desc');
const humid=document.querySelector('.humid');
btn.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response => response.json()
).then(
    data=>{
        console.log(data);
        //img.innerText=
        temp.innerText=Math.floor(data.main.temp)+"C";
        wind.innerText=data.wind.speed+"km/h";
        humid.innerText=data.main.humidity+"%";
        desc.innerText=data.weather[0].description;
        // if(data.weather[0].main=="sun"){
            // document.getElementsByTagName('img')[0].src="sunny.png";
        // }else if(data.weather[0].main=="cloud"){
            // document.getElementsByTagName('img')[0].src="cloud.png";
        // }else if(data.weather[0].main=="rain"){
            // document.getElementsByTagName('img')[0].src="rain.jpg";
        // }
    }
)
})
