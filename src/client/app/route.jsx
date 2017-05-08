

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link, browserHistory } from 'react-router-dom';


import AppHeader from './common/common.appheader.jsx';
import SideBarMenu from './common/common.sidebarmenu.jsx';

import Home from './home/home.widget.jsx';
import About from './about/about.widget.jsx';
import Car from './car/car.widget.jsx';
import CarDetail from './car/car-detail.component.jsx';


const data = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Mercedes-Benz AMG GT Coupe',
        year: '2016',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

    },
    {
        id: 3,
        name: 'BMW X6 SUV',
        year: '2016',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
    },
    {
        id: 4,
        name: 'Ford Edge SUV',
        year: '2016',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
    },
    {
        id: 5,
        name: 'Dodge Viper Coupe',
        year: '2017',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
    }
];

render(
    <Router history={browserHistory}>
	    <div>
	      	<Route component={SideBarMenu}/>     
	      	<Route component={AppHeader}/>     
	      	<Route exact={true} path="/" component={Home} />
        	<Route path="/home" component={Home}/>
          <Route path="/car" component={Car} params={data}/>
          <Route path="/about" component={About}/>
			    <Route path="/car/:id" component={CarDetail}/>
	    </div>
	</Router>,
    document.getElementById('root')
);