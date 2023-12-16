import {render, RenderPosition} from './render.js';
import {SelectComponent} from './components/SelectComponent.js';
import {countries} from './const.js';
import {CountryElementSelectComponent} from './components/CountryComponent.js';
import {WeatherResultComponent} from './components/WeatherResComponent.js';
const weatherWidgetContainer = document.querySelector('.weather-widget');
const selectComponent = new SelectComponent()
render(selectComponent, weatherWidgetContainer, RenderPosition.AFTERBEGIN);
countries.forEach(element=>{
    render(new CountryElementSelectComponent({'id':element['id'],'countryName':element['countryName']}),selectComponent.getElement(),RenderPosition.BEFOREEND)
})
let weatherResComponent = null;
selectComponent.getElement().addEventListener("change",renderInfoCountry)


function renderInfoCountry(evt){
    evt.preventDefault();
    const valueSelect = selectComponent.getElement().value;
    const elementCountry = countries.filter(c => c.countryName.toLowerCase() === valueSelect.toLowerCase());
    if (weatherResComponent != null){
        weatherResComponent.removeElement();
    }
    if (elementCountry.length != 0){
        const { id, countryName, temperatura } = elementCountry[0]; 
        weatherResComponent = new WeatherResultComponent({ id, countryName, temperatura });
        render(weatherResComponent,selectComponent.getElement(),RenderPosition.AFTEREND)
    }
}