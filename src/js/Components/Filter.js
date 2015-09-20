var React = require('react');
var FilterList = require('./FilterList');
var FilterItem = React.createClass({
  getInitialState: function() {
    return {
      activeFilter: ''
    } 
  },
  clickHandle: function() {
    this.props.updateFilter(this.props.filterName);
    this.setState({
      activeFilter: this.props.filterName
    });
  },
  render: function() {
    return (
      <li onClick={this.clickHandle} className={this.props.markActive && 'active'}>{this.props.filterName}</li>
    )
  }
});

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