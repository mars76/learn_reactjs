import React, {Component} from 'react';
import axios from 'axios';
import Cities from './Cities';

export default class App extends Component{

	constructor(props){
		console.log('in constructor  [1] props=',props);
		super(props);
		this.state ={
			cities : [],
			loading : false
		}
		this.getWeatherData = this.getWeatherData.bind(this);
	}

	componentWillMount(){
		console.log('in componentWillMount [2]');
	}

	componentDidMount(){
		console.log('in componentDidMount [3]');
	}

	componentWillUnmount(){
		console.log('in componentWillUnmount [4]');
	}

	getWeatherData(e){
		e.preventDefault();
		var that= this;
		console.log('in getWeatherData and zipCode=>',this.refs.zipCodeRef.value);
		that.setState({loading:true});
		axios.get('http://api.openweathermap.org/data/2.5/forecast/city', {
		    params: {
		      q: this.refs.zipCodeRef.value+',US',
		      APPID :'1a93252ed5ec2becf2b4087800e24c83',
		      units : 'imperial'
		    }
		  })
		  .then(function (response) {
		    console.log(response);
		    var cityInfo ={};
		    if(response && response.data){
		    	cityInfo.id = response.data.city.id;
				cityInfo.name = response.data.city.name;
				cityInfo.tempMax = response.data.list[0].main.temp_max;
				cityInfo.tempMin = response.data.list[0].main.temp_min;
				cityInfo.humidity = response.data.list[0].main.humidity;
				cityInfo.desc = response.data.list[0].weather[0].description;
				cityInfo.wind = response.data.list[0].wind.speed;
		    }
		    else{
		    	cityInfo.error ='Unable to get Data for City ['+this.refs.zipCodeRef.value+']!!';
		    }
		    var cities = that.state.cities;
		    cities.push(cityInfo);
		    that.setState({
		    	cities: cities,
		    	loading : false
		    });
		  })
		  .catch(function (response) {
		    console.log(response);
		  });
	}

	render(){

		var citiesData = this.state.cities.map(function(city){
			return(
				<tr key={city.id}>
					<td>{city.name}</td>
					<td>{city.tempMax}</td>
					<td>{city.tempMin}</td>
					<td>{city.humidity}</td>
					<td>{city.wind}</td>
					<td>{city.desc}</td>
				</tr>
			)
		});

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