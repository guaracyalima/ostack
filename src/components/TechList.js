import React, { Component } from 'react';
class TechList extends Component {

	state = {
		techs: [
			'Node.JS', 'PHP', 'ReactJS', 'React Native',
		],
		newTech: ''
	};

	handleInputChange = e => {
		console.log( e.target.value );
		this.setState( { newTech: e.target.value } )
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState( {
			techs: [
				...this.state.techs,
				this.state.newTech,
			],
			newTech: '',
		} )
	}

	render() {
		return ( <form onSubmit={this.handleSubmit}>
			< h1 >
				{this.state.newTech}</h1>
			< ul >
				{
					this
						.state
						.techs
						.map(tech => <li key={tech}>
							{tech}
							< /li>
								) }
			</ul>
			<input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>

			<button type="submit">
				Enviar</button>
		</form> )
	}
}

export default TechList;
