const PubSub = require("../helpers/pub_sub.js");

const PlanetMenuView = function () {

};

PlanetMenuView.prototype.bindEvents = function () {
  const planetMenu = document.querySelector('.planets-menu');
  planetMenu.addEventListener('click', (event) => {
    event.preventDefault();
    const planetClicked = event.target.getAttribute("id");
    PubSub.publish("PlanetMenuView:selected-planet", planetClicked);
  })
};

module.exports = PlanetMenuView;
