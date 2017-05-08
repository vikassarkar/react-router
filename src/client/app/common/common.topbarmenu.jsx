import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class TopBarMenu extends Component {
    render(){
        return (
			<div>
	            <nav className="navbar navbar-default">
	                <div className="container-fluid">
	                    <div className="navbar-header">
	                        <Link className="navbar-brand" to="/home">Scotch Cars</Link>
	                    </div>
	                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	                        <ul className="nav navbar-nav">
	                            <li className="active">
	                             <Link to="/home">Home<span className="sr-only">(current)</span></Link>	                                	
	                            </li>
	                            <li><Link to="/car">Cars</Link></li>
	                            <li><Link to="/about">About</Link></li>
	                        </ul>
	                    </div>
	                </div>
	            </nav>
	            <div className="container">
	                {this.props.children}
	            </div>	            
				<Route path="/:id" component={Url}/>     
	        </div>
	    )
    }
}


export default TopBarMenu