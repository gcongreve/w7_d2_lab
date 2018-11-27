const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("PlanetMenuView:selected-planet", (event) => {
    const seletedPlanet = event.detail;
    const planetDetails = this.planets.find((planet) => {
      return planet.name === seletedPlanet;
    }); console.log(planetDetails);
    PubSub.publish("SolarSystem:selected-planet", planetDetails)
  });

};


module.exports = SolarSystem;
