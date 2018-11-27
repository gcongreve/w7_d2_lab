const PubSub = require('../helpers/pub_sub.js')

const PlanetInfoView = function () {

}

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:selected-planet", (planet) => {
    this.clearDisplay()
    this.displayInfo(planet.detail);
  })
};

PlanetInfoView.prototype.clearDisplay = function () {
  const infoSection = document.querySelector('.planet-details');
  while(infoSection.hasChildNodes()) {
      infoSection.removeChild(infoSection.firstChild);
  }
};

PlanetInfoView.prototype.displayInfo = function (planet) {
  const infoSection = document.querySelector('.planet-details');
  const planetName = document.createElement('h1');
  planetName.textContent = planet.name;
  infoSection.appendChild(planetName);

  const orbit = document.createElement("p");
  orbit.textContent = `Orbit: ${planet.orbit} Earth days`;
  const day = document.createElement("p");
  day.textContent = `Day Length: ${planet.day} Earth days`;
  const surfaceArea = document.createElement("p");
  surfaceArea.textContent = `Surface Area: ${planet.surfaceArea} Earths`;
  const volume = document.createElement("p");
  volume.textContent = `Volume: ${planet.volume} Earths`;
  const gravity = document.createElement("p");
  gravity.textContent = `Gravity: ${planet.gravity}g`;
  const moons = document.createElement("p");
  moons.textContent = `Moons: ${planet.moons}`;
  const planetImage = document.createElement("img")
  planetImage.src = `images/${planet.name}.jpg`

  infoSection.appendChild(day);
  infoSection.appendChild(orbit);
  infoSection.appendChild(surfaceArea);
  infoSection.appendChild(volume);
  infoSection.appendChild(gravity);
  infoSection.appendChild(moons);
  infoSection.appendChild(planetImage);

};

module.exports = PlanetInfoView;
