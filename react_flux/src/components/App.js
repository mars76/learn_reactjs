import React, {Component} from 'react';


export default class App extends Component{
	constructor(props){
		super(props);
		this.getWeatherData = this.getWeatherData.bind(this);
		
	}

	getWeatherData(e){

	}

	render(){
		return(
			<div>
				<div className="panel panel-default">
				  <div className="panel-body">
				    <div>
					  	<form className="form-inline">
						  <div className="form-group">
						    <label  for="zipCode">Zip Code</label>
						    <input type="text" className="form-control" ref="zipCodeRef" id="zipCode" placeholder="00000"/>
						  </div>
						  <button type="submit" onClick={this.getWeatherData} class="btn btn-primary">
						  	<span className="{this.state.loading ? 'spinner active' : 'spinner'}"><i className="icon-spin icon-refresh"></i></span>
						  	Find Weather
						  </button>
						</form>
				  	</div>
				  </div>
				</div>
				<Cities cities={this.state.cities}/>
			</div>
		);
	}

}