function showwetherDetail(event){
    event.preventDefault();
    const city=document.getElementById('city').value;
    // lat=document.getElementById('lat').value;
    // lon=document.getElementById('lon').value;
    const apiKey= "4919f1e3783b3e47d374a1ffca67218b";
    const cityUrl=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    

    fetch(cityUrl)
    .then(response=>response.json())
    .then(data=>{
        const lat= data[0].lat;
        const lon=data[0].lon
        const apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

    })
    .catch(error => {
        console.error('Error fetching coordinates:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch city coordinates. Please try again.</p>`;
    });
    
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

