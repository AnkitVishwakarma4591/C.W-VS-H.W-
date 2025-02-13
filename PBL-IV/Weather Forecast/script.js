// Your OpenWeather API Key
const apiKey = "afe7973d356c54b94bc7455004751c9f"; // Replace with your actual API key

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const city = document.getElementById('city').value.trim();
  const weatherInfoDiv = document.getElementById('weatherInfo');

  // Clear previous weather information
  weatherInfoDiv.textContent = '';

  if (city) {
    // Construct the API URL dynamically based on the entered city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch weather data from OpenWeather API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          // Extract necessary data
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;

          // Display the weather info
          weatherInfoDiv.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
          `;
          weatherInfoDiv.style.color = '#333';
        } else {
          // Handle errors like invalid city name
          weatherInfoDiv.textContent = `Error: ${data.message}`;
          weatherInfoDiv.style.color = 'red';
        }
      })
      .catch(error => {
        weatherInfoDiv.textContent = 'Failed to fetch weather data.';
        weatherInfoDiv.style.color = 'red';
      });
  } else {
    weatherInfoDiv.textContent = 'Please enter a city name.';
    weatherInfoDiv.style.color = 'red';
  }
});
