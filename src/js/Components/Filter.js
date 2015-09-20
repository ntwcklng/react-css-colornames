var React = require('react');
var FilterList = require('./FilterList');
var FilterItem = require('./FilterItem');

var Filter = React.createClass({
  getInitialState: function() {
    return {
      activeFilter: ''
    }
  },
  updateFilter: function(filter) {
    this.props.setFilter(filter);
    this.setState({
      activeFilter: filter
    });
  },
  render: function() {
    var self = this;
    var renderFilters = FilterList.map(function(filter) {
      var markAsActive = false;
      if(self.state.activeFilter === filter && filter !== 'Remove Filter') markAsActive = true;

      return <FilterItem markActive={markAsActive} updateFilter={self.updateFilter} key={filter} filterName={filter} />
    });
    return(
      <ul className="filterList">
        {renderFilters}
      </ul>
    )
  }
});

module.exports = Filter;