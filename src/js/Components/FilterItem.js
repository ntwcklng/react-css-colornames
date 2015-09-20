var React = require('react');

var FilterItem = React.createClass({
  clickHandle: function() {
    this.props.updateFilter(this.props.filterName);
  },
  render: function() {
    return (
      <li onClick={this.clickHandle} className={this.props.markActive && 'active'}>{this.props.filterName}</li>
    )
  }
});

module.exports = FilterItem;