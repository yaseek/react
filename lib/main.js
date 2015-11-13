var React = require('react');
var ReactDOM = require('react-dom');

var others = require('./others');

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

ReactDOM.render(
    <others.Photo />, 
    document.getElementById('photo'));