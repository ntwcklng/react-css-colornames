var React = require('react');
var ApplicationClass = require('./Components/Index');
//var ApplicationComponent = React.createFactory(ApplicationClass);

React.render(<ApplicationClass />, document.querySelector('#root'));
//React.render(ApplicationComponent(), document.querySelector('#root'));