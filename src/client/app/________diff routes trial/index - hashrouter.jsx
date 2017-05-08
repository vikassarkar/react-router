

import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';  

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#/home">Scotch Cars</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#/home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li><a href="#/car">Cars</a></li>
                                <li><a href="#/about">About</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
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

//render(<Home />, document.getElementById('container'));
/*Each route is defined with Route*/
render(
    <Router >
        <div>
            <Route path="/" component={Main}/>
            <Route exact={true} path="/" component={Home}/>         
            <Route path="/home" component={Home}/>
            <Route path="/car" component={Car}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>,
    document.getElementById('root')
);
/*render(
    <Router path="/" component={Main} history={browserHistory}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home}/>
            <Route path="/car" component={Car}/>
            <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('root')
);*/
/*render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} />
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('root')
);*/



