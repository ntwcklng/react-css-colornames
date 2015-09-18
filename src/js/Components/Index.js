var React = require('react');
var Options = require('./Options');

var Index = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Options title="Options Title" />
      </div>
    );
  }
});

module.exports = Index;