import { AbstractComponent } from './AbstractComponent.js';
function createComponentTemplate(countryName) {
    return(
        `<option value="${countryName}">${countryName}</option>`
    );
}
export class CountryElementSelectComponent extends AbstractComponent{
    #id = null;
    #countryName = null;
    constructor({id, countryName}){
        super();
        this.#id = id;
        this.#countryName = countryName;
    }
    getTemplate() {
        return createComponentTemplate(this.#countryName)
    }
}
