import { AbstractComponent } from './AbstractComponent.js';
function createComponentTemplate(countryName,temperatura) {
    return(
        `<div id="weather-result">
          Температура в ${countryName}: ${temperatura} С
        </div>`
    );
}
export class WeatherResultComponent extends AbstractComponent{
    #id = null;
    #countryName = null;
    #temperatura = null;
    constructor({id, countryName,temperatura}){
        super();
        this.#id = id;
        this.#countryName = countryName;
        this.#temperatura = temperatura;
    }
    getTemplate() {
        return createComponentTemplate(this.#countryName,this.#temperatura)
    }
    removeElement(){
        this.getElement().remove();
        this.element = null;
    }
}
