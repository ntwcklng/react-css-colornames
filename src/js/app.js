var React = require('react');
var ApplicationClass = require('./Components/Index');
var ApplicationComponent = React.createFactory(ApplicationClass);

React.render(ApplicationComponent(), document.querySelector('#root'));