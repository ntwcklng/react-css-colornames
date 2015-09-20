var React = require('react');
var returnTextColor = require('./Functions/ReturnTextColor');

var ColorItem = React.createClass({
  colorItemClick: function() {
    var textColor = returnTextColor(this.props.groups);
    this.props.colorItemClickHandle(this.props.colorname, textColor, this.props.hex);
  },
  render: function() {
    var showColor = true;
    if(this.props.filter) {
      var splitGroups = this.props.groups;
      //if the filter matches one of the group items
      // dont append the hide class
      if(splitGroups.indexOf(this.props.filter.toLowerCase()) !== -1) {
        showColor = true;
      } else {
        showColor = false;
      }
   }
   var textColor = returnTextColor(this.props.groups);
    var styles = {
      backgroundColor: this.props.colorname,
      color: textColor
    };
    return (
        <div onClick={this.colorItemClick} style={styles} className={showColor ? 'colorItem ' : 'hideColor'}>
          <h3><span className='textCapitalize'>{this.props.colorname}</span> <small>({this.props.hex})</small></h3>
        </div>
    )
  }
});

module.exports = ColorItem;