// Function: getRandomSpacecraft
// Description: This function fetches data from the provided API endpoint, selects a random spacecraft, and displays its name in the specified HTML element.
function getRandomSpacecraft(apiUrl, displayElement, errorCallback) {
  // Make a GET request to the specified API endpoint to fetch the spacecraft data.
  fetch(apiUrl)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Extract the array of spacecrafts from the fetched data.
      const spacecrafts = data.spacecrafts;

      // Generate a random index to select a spacecraft randomly from the 'spacecrafts' array.
      // The random index will be between 0 (inclusive) and the length of the 'spacecrafts' array (exclusive).
      const randomIndex = Math.floor(Math.random() * spacecrafts.length);

      // Get the name of the spacecraft at the randomly selected index.
      const spacecraftName = spacecrafts[randomIndex].name;

      // Display the name of the randomly selected spacecraft in the specified HTML element.
      displayElement.innerHTML = spacecraftName;
    })
      .catch(error => {
        if (errorCallback) {
          errorCallback(error);
        } else {
          console.log(error);
        }
      });
  }
  
  // Get the reference to the HTML element with ID 'spacecraft'
  const spacecraftEle = document.getElementById('spacecraft');
  
  // Get the reference to the HTML button element with ID 'randomBtn'
  const spacecraftBtn = document.getElementById('randomBtn');
  
  // Attach a click event listener to the 'randomBtn' button element.
  // This will execute the 'getRandomSpacecraft' function when the button is clicked.
  spacecraftBtn.addEventListener('click', function () {
    // Call the function with the specific API endpoint and display element.
    getRandomSpacecraft('https://isro.vercel.app/api/spacecrafts', spacecraftEle);
  });
  
  // Call the function initially to display a random spacecraft on page load.
  getRandomSpacecraft('https://isro.vercel.app/api/spacecrafts', spacecraftEle);
  
