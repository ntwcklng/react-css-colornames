var React = require('react');
var Colors = require('./Colors');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <Colors title="Options Title" />
      </div>
    );
  }
});

module.exports = Index;