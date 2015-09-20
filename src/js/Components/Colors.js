var React = require('react');
var ColorList = require('./ColorList');
var rgbToHex = require('./Functions/RGBToHex');
var ColorItem = require('./ColorItem');
var Filter = require('./Filter');

var Colors = React.createClass({
  getInitialState: function() {
    return {
      // backgroundColor: '#ff6347',
      // colorName: 'Tomato',
      // headerTextColor: '#1b1b1b',
      // hex: '#ff6347',
      filter: false,
      selection: []
    }
  },
  appendSelection: function(colorName) {
    var newSelection = this.state.selection;
    var tmp = newSelection.push(colorName);
    if(newSelection.length > 5) {
      newSelection.shift();
    }
    this.setState({
      selection: newSelection
    });
  },
  colorItemClicked: function(colorName, textColor, hex) {
    this.appendSelection(colorName);
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
      return <ColorItem textColor={textColor} colorItemClickHandle={self.colorItemClicked} key={color.hex + color.name} colorname={color.name} hex={color.hex} groups={color.groups} filter={activeFilter} />
    });
    var styles = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.headerTextColor
    };
    var stateSelection = this.state.selection;
    console.log(stateSelection);
    var renderSelection = stateSelection.join(', ');
    return (
      <div className="container">
        {stateSelection.length >= 1 && (
          <h2 className='headerColor' style={styles}>{this.state.hex} - <span className='textCapitalize'>{this.state.colorName}</span></h2>
        )}
        <p>Click on a Color or Filter them by Colorgroups.</p>
        <h5 className='textCapitalize recentlyPicked'>{stateSelection.length >= 1 && 'Recently picked: ' + renderSelection}</h5>
        <Filter activeFilter={activeFilter} setFilter={this.updateFilter} />
          {renderColors}
      </div>
    )
  }
});

module.exports = Colors;