import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class CarDetail extends Component {
	constructor(props) {
	  super(props);
	  console.log(props)
	  this.state = {};
	}

    render(){  
        // Car array
        const cars = this.props.data;
        // Car Id from param
        console.log(this.props);
        const id = 2;//this.props.match.params.id;
        // Filter car with ID
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });  	
        return (
        	<div className="container">
        		
                <div>
                    <h1>{car[0].name}</h1>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <img src={car[0].media} alt={car[0].name} />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                           <ul>
                               <li><strong>Model</strong>: {car[0].model}</li>
                               <li><strong>Make</strong>: {car[0].make}</li>
                               <li><strong>Year</strong>: {car[0].year}</li>
                               <li><strong>Price</strong>: {car[0].price}</li>
                           </ul>
                        </div>
                    </div>
                </div>
        	</div>
        );
    }
}

export default CarDetail