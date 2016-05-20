import BaseStore from './BaseStore';
import WeatherActions from '../constnats/WeatherConstants';

class WeatherStore extends BaseStore{

	constructor(){
		super();
    	this.subscribe(() => this._registerToActions.bind(this))
	}

}