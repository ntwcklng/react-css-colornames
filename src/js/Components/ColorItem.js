var React = require('react');
var ColorItem = React.createClass({
  colorItemClick: function() {
    this.props.colorItemClickHandle(this.props.colorname, this.props.textColor, this.props.hex);
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
    var styles = {
      backgroundColor: this.props.colorname,
      color: this.props.textColor
    };
    return (
        <div onClick={this.colorItemClick} style={styles} className={showColor ? 'colorItem ' : 'hideColor'}>
          <h3>{this.props.colorname} <small>({this.props.hex})</small></h3>
        </div>
    )
  }
});

module.exports = ColorItem;