// Select the checkbox input and the status message element
const toggleInput = document.getElementById('toggle-input');
const statusMessage = document.getElementById('statusMessage');

// Function to update the status message based on the toggle state
function updateStatus() {
  if (toggleInput.checked) {
    statusMessage.textContent = 'Status: NIT'; // If checked, display "IT"
  } else {
    statusMessage.textContent = 'Status: IT'; // If unchecked, display "NIT"
  }
}

// Add an event listener to handle changes to the toggle
toggleInput.addEventListener('change', updateStatus);

// Add another event listener to redirect based on toggle state
toggleInput.addEventListener('click', function() {
  if (toggleInput.checked) {
    window.location.href = 'N_IT.html'; // Redirect to index.html when checked
  } else {
    window.location.href = 'index.html'; // Redirect to dhileep.html when unchecked
  }
});

// Call the function initially to set the correct status message
updateStatus();