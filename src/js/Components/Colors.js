var React = require('react');
var Data = require('./Data');
var ColorItem = React.createClass({
  colorItemClick: function() {
    this.props.colorItemClickHandle(this.props.colorname, this.props.textColor);
  },
  render: function() {
    var getColorName = this.props.colorname;
    var styles = {
      backgroundColor: getColorName,
      padding: '10px',
      color: this.props.textColor,
      margin: '10px',
      textAlign: 'center'
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
      defaultBackgroundColor: '#fff',
      colorName: 'White',
      defaultTextColor: '#1b1b1b'
    }
  },
  showHexColor: function(colorName, textColor) {
    var div = document.createElement('div');
    div.style.backgroundColor = colorName;
    document.body.appendChild(div);
    this.setState({
      defaultBackgroundColor: div.style.backgroundColor,
      colorName: colorName,
      defaultTextColor: textColor
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
      position: 'fixed',
      color: this.state.defaultTextColor,
      top: 0,
      left: 0,
      width: '100vw',
      height: '70px',
      lineHeight: '70px',
      textAlign: 'center',
      zIndex: 9999
    };
    return (
      <div className="container">
        <div style={styles}>{this.state.defaultBackgroundColor} - {this.state.colorName}</div>
        {renderColors}
      </div>
    )
  }
});

module.exports = Colors;