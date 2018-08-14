import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import {CustomerSearch} from "../../../features";
import {ReButton,ReMenu,ReMenuItem} from "../../common";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import './app-header.scss';

export default function HeaderApp() {
	return ( 
		<div>
		<AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
               

                </Typography>
                 <Tabs value="tet" >
            <Tab value="search" label="search"  to='/search' component={Link}  />
            <Tab value="home" label="home"  to='/' component={Link}  />
       
          </Tabs>
            </Toolbar>
        </AppBar>
</div>
    )

}