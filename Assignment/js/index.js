var weatherButton = document.querySelector('.submit-button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

function currentWeatherInfo() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
            inputValue.value + '&units=imperial&appid=f07f3f3a131cca80d9f469ca9e8fd9c4')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var nameValue = data['name'];
            var tempValue = "Temperature: " + data['main']['temp'];
            var descValue = "Weather Forecast: " + data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
        .catch(err => alert("Wrong city name!"))
}

weatherButton.addEventListener('click', currentWeatherInfo);