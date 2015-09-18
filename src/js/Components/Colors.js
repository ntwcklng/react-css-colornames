var React = require('react');
var Data = require('./Data');
var rgbToHex = require('./RGBToHex');
var returnNum = require('./ReturnNum');
var ColorItem = React.createClass({
  colorItemClick: function() {
    this.props.colorItemClickHandle(this.props.colorname, this.props.textColor);
  },
  render: function() {
    var getColorName = this.props.colorname;
    var styles = {
      backgroundColor: getColorName,
      padding: '20px 5px',
      color: this.props.textColor,
      margin: '5px',
      textAlign: 'center',
      cursor: 'pointer'
    };
    return (
      <div onClick={this.colorItemClick} style={styles} className='colorItem'>
        <h3>{getColorName} <small>{this.props.hex}</small></h3>
      </div>
    )
  }
});
var Colors = React.createClass({
  getInitialState: function() {
    return {
      defaultBackgroundColor: 'rgb(255, 255, 255)',
      colorName: 'White',
      defaultTextColor: '#1b1b1b',
      hex: '#ffffff'
    }
  },
  showHexColor: function(colorName, textColor) {
    var div = document.createElement('div');
    div.style.backgroundColor = colorName;
    document.body.appendChild(div);
    var splitRgb = div.style.backgroundColor.split(',');
    var convertToHex = rgbToHex(returnNum(splitRgb[0]), returnNum(splitRgb[1]), returnNum(splitRgb[2]));
    this.setState({
      defaultBackgroundColor: div.style.backgroundColor,
      colorName: colorName,
      defaultTextColor: textColor,
      hex: convertToHex
    });
  },
  render: function() {
    var self = this;
    var colorItemStyle;
    var renderColors = Data.map(function(color) {
      if(color.name) {
        colorItemStyle = color.textColor;
        color = color.name;
      } else {
        colorItemStyle = '#1b1b1b';
      }
      return <ColorItem textColor={colorItemStyle} colorItemClickHandle={self.showHexColor} ref={color} key={color} colorname={color} />
    });
    var styles = {
      backgroundColor: this.state.defaultBackgroundColor,
      color: this.state.defaultTextColor,
      margin: '0'
    };
    return (
      <div className="container">
        <h2 className='headerColor' style={styles}>{this.state.hex} - {this.state.defaultBackgroundColor} - {this.state.colorName}</h2>
        {renderColors}
      </div>
    )
  }
});

module.exports = Colors;