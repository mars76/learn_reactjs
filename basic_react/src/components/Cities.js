import React,{Component} from 'react';
import City from './City';

export default class Cities extends Component{

	render(){
		var citiesData = this.props.cities.map(function(city){
			return(
				<City key={city.id} city={city}/>
			)
		});
		return(
			<table className="table table-striped">
				<thead>
					<tr>
						<th>City Name</th>
						<th>Max Temp (F)</th>
						<th>Min Temp (F)</th>
						<th>Humidity (%)</th>
						<th>Wind (MPH)</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{citiesData}
				</tbody>
			</table>
		);
	}

} 