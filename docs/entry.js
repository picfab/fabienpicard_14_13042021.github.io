
    import React from "react";

    import ReactDOM from "react-dom";

    window.Components = {};


    import Wrapper from '../node_modules/better-docs/lib/wrapper.js';

    window.React = React;

    window.ReactDOM = ReactDOM;

    window.Wrapper = Wrapper;

  import App from '../src/App.js';
Components.App = App;

import Employees from '../src/views/Employees.js';
Components.Employees = Employees;

import Home from '../src/views/Home.js';
Components.Home = Home;

import Logo from '../src/Components/Logo.js';
Components.Logo = Logo;

import Routes from '../src/routes/index.js';
Components.Routes = Routes;

import Spinner from '../src/Components/Spinner.js';
Components.Spinner = Spinner;