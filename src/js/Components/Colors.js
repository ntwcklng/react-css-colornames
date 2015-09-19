var React = require('react');
var ReactAddons = require('react/addons')
var ColorList = require('./ColorList');
var rgbToHex = require('./Functions/RGBToHex');
var ColorItem = require('./ColorItem');
var Filter = require('./Filter');
var ReactCSSTransitionGroup = ReactAddons.addons.CSSTransitionGroup;

var Colors = React.createClass({
  getInitialState: function() {
    return {
      backgroundColor: '#ff6347',
      colorName: 'Tomato',
      headerTextColor: '#1b1b1b',
      hex: '#ff6347',
      filter: false
    }
  },
  showHexColor: function(colorName, textColor, hex) {
    this.setState({
      backgroundColor: hex,
      colorName: colorName,
      headerTextColor: textColor,
      hex: hex
    });
  },
  updateFilter: function(filter) {
    var setFilter = filter;
    if(filter === 'Remove Filter') {
      setFilter = false
    }
    this.setState({
      filter: setFilter
    });
  },
  render: function() {
    var self = this;
    var colorItemStyle;
    var activeFilter = this.state.filter;
    var renderColors = ColorList.map(function(color) {
      var textColor = color.textColor || "#1b1b1b";
      return <ColorItem textColor={textColor} colorItemClickHandle={self.showHexColor} key={color.hex + color.name} colorname={color.name} hex={color.hex} groups={color.groups} filter={activeFilter} />
    });
    var styles = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.headerTextColor
    };
    return (
      <div className="container">
        <h2 className='headerColor' style={styles}>{this.state.hex} - <span className='textCapitalize'>{this.state.colorName}</span></h2>
        <Filter setFilter={this.updateFilter} />
          {renderColors}
      </div>
    )
  }
});

module.exports = Colors;