import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Car extends Component {
    // Constructor is responsible for setting up props and setting initial state
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            data : []
        };
    }

    //to={"/cars/"+car.id}
    render(){
        const cars = this.state.data;
        // Map through cars and return linked cars
        //const carNode = this.state.cars.map((car) => {
        const carNode = cars.map((car) => {
            return (
                <Link
                    to={`/car/${car.id}`}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div className="container">
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car