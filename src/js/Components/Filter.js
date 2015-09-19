var React = require('react');
var FilterList = require('./FilterList');
var FilterItem = React.createClass({
  clickHandle: function() {
    this.props.updateFilter(this.props.filterName);
  },
  render: function() {
    return (
      <li onClick={this.clickHandle} >{this.props.filterName}</li>
    )
  }
});

var Filter = React.createClass({
  updateFilter: function(filter) {
    this.props.setFilter(filter);
  },
  render: function() {
    var self = this;
    var renderFilters = FilterList.map(function(filter) {
      return <FilterItem updateFilter={self.updateFilter} key={filter} filterName={filter} />
    });
    return(
      <ul className="filterList">
        {renderFilters}
      </ul>
    )
  }
});

module.exports = Filter;