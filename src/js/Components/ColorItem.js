var React = require('react');
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

module.exports = ColorItem;