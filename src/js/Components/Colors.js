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
      backgroundColor: 'rgb(255, 255, 255)',
      colorName: 'White',
      headerTextColor: '#1b1b1b',
      hex: '#ffffff',
      filter: 'INIT'
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
      setFilter = 'INIT'
    }
    this.setState({
      filter: setFilter
    });
  },
  render: function() {
    var self = this;
    var colorItemStyle;
    var activeFilter = this.state.filter;
    var renderColorsV2 = ColorList.map(function(color) {
      var textColor = color.textColor || "#1b1b1b";
      if(activeFilter || activeFilter === "INIT") {
        if((color.groups.indexOf(activeFilter.toLowerCase()) !== -1) || activeFilter === 'INIT') {
          return <ColorItem textColor={textColor} colorItemClickHandle={self.showHexColor} key={color.hex + color.name} colorname={color.name} hex={color.hex} groups={color.groups} filter={activeFilter} />
        } else {
          console.log("j");
        }
      }
    });
    var styles = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.headerTextColor
    };
    return (
      <div className="container">
        <h2 className='headerColor' style={styles}>{this.state.hex} - {this.state.colorName}</h2>
        <Filter setFilter={this.updateFilter} />
        <ReactCSSTransitionGroup transitionName='colorItem'>
          {renderColorsV2}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = Colors;