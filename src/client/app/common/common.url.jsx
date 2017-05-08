import React, { Component } from 'react';

class Url extends Component {
	constructor(props) {
	    super(props);
	    console.log(props);
	}
	render(){
		return (
		  <div>
		    <h3>ID: {this.props.match.params.id}</h3>
		  </div>
		)
	}
}


export default Url