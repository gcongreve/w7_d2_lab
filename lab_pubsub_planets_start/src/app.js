const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js')
const PlanetMenuView = require('./views/planet_menu_view.js')


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();
  const planetMenuView = new PlanetMenuView();
  planetMenuView.bindEvents();
  const planetInfoView = new PlanetInfoView();
  planetInfoView.bindEvents();

});
