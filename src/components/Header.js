import React from 'react';
import PropTypes from 'prop-types';
import { WeatherDashboard } from './Weather/WeatherDashboard';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark col-lg-12" style={{overflowX: 'hidden'}}>
        <div className="col-lg-4">
            <span className="brand-icon fa fa-sun-o fa-2x"></span>
            <span className="brand-text">{props.title}</span>
        </div>
        <div className="col-lg-8">
            <WeatherDashboard />
        </div>   
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export { Header };