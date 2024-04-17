fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract relevant weather information
                const { main, weather } = data;
                const temperature = main.temp;
                const description = weather[0].description;

                // Display weather information
                const weatherInfoDiv = document.getElementById('weather-info');
                weatherInfoDiv.innerHTML = `
                    <p><strong>Current Temperature:</strong> ${temperature}°C</p>
                    <p style="line-height: 5rem"><strong>Current Status:</strong> ${description}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });