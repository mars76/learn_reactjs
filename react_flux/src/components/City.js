import React,{Component} from 'react';

export default class City extends Component{
	
	render(){
		return(

				<tr>
					<td>{this.props.city.name}</td>
					<td>{this.props.city.tempMax}</td>
					<td>{this.props.city.tempMin}</td>
					<td>{this.props.city.humidity}</td>
					<td>{this.props.city.wind}</td>
					<td>{this.props.city.desc}</td>
				</tr>

		);
	}
}