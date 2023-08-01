const spacecraftEle = document.getElementById('spacecraft')
const spacecraftBtn = document.getElementById('randomBtn')

spacecraftBtn.addEventListener('click', getRandomSpacecraft)

getRandomSpacecraft()

function getRandomSpacecraft() {
  fetch('https://isro.vercel.app/api/spacecrafts')
      .then(response => response.json())
      .then(data => {
          const spacecrafts = data.spacecrafts;
          const randomIndex = Math.floor(Math.random() * spacecrafts.length);
          const spacecraftName = spacecrafts[randomIndex].name;
          spacecraftEle.innerHTML = spacecraftName
      })
      .catch(error => console.log(error));
}
