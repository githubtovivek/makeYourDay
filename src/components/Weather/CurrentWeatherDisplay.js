// IMPORT PACKAGE REFERENCES
import React from 'react';
import PropTypes from 'prop-types';


const getUpdateTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padEnd(2, '0');
    return `${hours}:${minutes}`;
};

const CurrentWeatherDisplay = (props) => {
    
    const { weather } = props;
    
    return (
        <div className="current-weather-display col-lg-6" style={{position: 'relative'}}>
            <div className="col-lg-12">
                <div className="weather-location col-lg-6">{weather.location.name}</div>
                <div className="weather-min-max-temp col-lg-6">{weather.temperature.maximum}&deg; | {weather.temperature.minimum}&deg;</div>
            </div>
            <div className="col-lg-12">
                <div className="weather-current col-lg-6">                
                    <span className="weather-temp">{parseInt(weather.temperature.current)} &deg;&nbsp;<sup>c</sup></span>
                </div>
                <div className="weather-condition col-lg-6">
                    <img className="weather-icon" src={weather.icon} />
                    <span className="weather-description">{weather.condition}</span>
                </div>
            </div>
            <div className="col-lg-12">            
                <div className="weather-update col-lg-9">Updated as of {getUpdateTime(weather.date)}</div>
                <i className="refresh fa fa-refresh fa-1x col-lg-3" onClick={props.onRefresh}></i>
            </div>
        </div>
    );
};


CurrentWeatherDisplay.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    weather: PropTypes.object.isRequired
};


export { CurrentWeatherDisplay };