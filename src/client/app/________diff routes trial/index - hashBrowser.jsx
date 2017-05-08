

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


const BrowserRoutes = () => (
  <Router>
    <div>
      <Route path="/" component={Menu}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/car" component={Car}/>
    </div>
  </Router>
)

const HashRoutes = () => (
	<Router >
        <div>
            <Route path="/" component={Menu}/>
            <Route exact={true} path="/" component={Home}/>         
            <Route path="/home" component={Home}/>
            <Route path="/car" component={Car}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
)

class Menu extends Component {
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
	        </div>
	    )
    }
}


class Home extends Component {
    render(){
        return (<h1>Home Page</h1>);
    }
}

class Car extends Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}


/*ReactDOM.render(
  React.createElement(BrowserRoutes),
  document.getElementById('root')
);*/

render(
    <Router>
	    <div>
	      	<Route path="/" component={Menu}/>
            <Route exact={true} path="/" component={Home}/>         
            <Route path="/home" component={Home}/>
            <Route path="/car" component={Car}/>
            <Route path="/about" component={About}/>
	    </div>
	</Router>,
    document.getElementById('root')
);