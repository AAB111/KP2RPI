import { AbstractComponent } from './AbstractComponent.js';
function createComponentTemplate() {
    return(
        `<select id="city-select">
            <option value="">Выберите город</option>
        </select>`
    );
}
export class SelectComponent extends AbstractComponent{
    constructor(){
        super();
    }
    getTemplate() {
        return createComponentTemplate()
    }
}
