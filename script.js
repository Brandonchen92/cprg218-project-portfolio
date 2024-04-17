function updateClock() {
  const apiKey = '1FNN4LIBX78J'; // Your API key
  
  fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=America/Edmonton`)
    .then(response => response.json())
    .then(data => {
      const timeElement = document.getElementById('time');
      const currentTime = new Date(data.formatted);
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      timeElement.textContent = formattedTime;
    })
    .catch(error => {
      console.error('Error fetching time:', error);
    });
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update when the page loads
updateClock();


document.addEventListener('DOMContentLoaded', function() {
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackConfirmation = document.getElementById('feedbackConfirmation');

  feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const feedbackData = Object.fromEntries(formData.entries());

    fetch("https://formspree.io/f/mayraynr", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackData)
    })
    .then(response => {
      if (response.ok) {
        feedbackForm.reset();
        feedbackConfirmation.style.display = 'block';
        setTimeout(function() {
          feedbackConfirmation.style.display = 'none';
        }, 5000);
      } else {
        console.error('Failed to send feedback:', response.status);
        alert('Failed to send feedback. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error sending feedback:', error);
      alert('Failed to send feedback. Please try again later.');
    });
  });
});