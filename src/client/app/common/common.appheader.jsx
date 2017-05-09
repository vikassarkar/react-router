import React, { Component } from 'react';

class AppHeader extends Component {
	constructor(props) {
      super(props);
      this.state = {};
      this.showSidebar = this.showSidebar.bind(this)
    }

    showSidebar(e, x, y){       
        console.log(x)
        console.log(y)
        console.log(e.target)
        document.querySelector('.sideBar-overlay').classList.remove('hide');
    	document.querySelector('.sideBarMenu').classList.remove('slideOut');
    	document.querySelector('.sideBarMenu').classList.add('slideIn');
    } 
    render(){
        return (
            <div className="container-fluid appheader">
                <div className="container">
                    <button onClick={(e) => this.showSidebar(e, 'home', 'xyz')}>Menu</button>
                    <span>AppHeader Page</span>  
                         
                    {this.props.children}     
                </div> 
            </div>         
        );
    }
}

export default AppHeader