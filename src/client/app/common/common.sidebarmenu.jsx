import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class SideBarMenu extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.hideSidebar = this.hideSidebar.bind(this)
	}

	hideSidebar(e, x, y){    	
    	console.log(x)
    	console.log(y)
    	console.log(e.target)
    	document.querySelector('.sideBar-overlay').classList.add('hide');		
    	document.querySelector('.sideBarMenu').classList.remove('slideIn');
    	document.querySelector('.sideBarMenu').classList.add('slideOut');
    }    

    render(){
        return (
        	<div className="sideBar">
				<div className= "sideBar-overlay hide" onClick={(e) => this.hideSidebar(e, 'home', 'xyz')}></div>
				<div className= "sideBarMenu" onClick={(e) => this.hideSidebar(e, 'home', 'xyz')}>
			        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
			         	<div className="navbar-ico">
	                        <Link className="brand-img" to="/home">Scotch Cars</Link>
	                    </div>
			            <ul className="nav sidebar-nav">		                
			                <li className="active">
	                            <Link to="/home">Home<span className="sr-only">(current)</span></Link>	                                	
	                        </li>
	                        <li><Link to="/car">Cars</Link></li>
	                        <li><Link to="/about">About</Link></li>
			            </ul>
			        </nav>		      
		        </div>
	        </div>
		)
    }


}

export default SideBarMenu