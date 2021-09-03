const searchCity = async () => {
    const city = document.getElementById('input-field')
    const cityText = city.value;
    city.value = ' ';
    const API_KEY = `5c629e080db5d517720f44d181ceed7b`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_KEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    displayTemperature(data)
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = info => {
    const {name,main,  weather} = info
    const updateCloud = weather[0]
    setInnerText('city', name)
    setInnerText('temp', main.temp)
    setInnerText('cloud', updateCloud.main)
    // set weather icon
    const url = ` http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)
}