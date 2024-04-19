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




// Get the button
var scrollButton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}