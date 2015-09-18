var React = require('react');
var Data = require('./Data');
var OptionsItem = React.createClass({
  onClickFunc: function () {
    this.props.lastClickHandle(this.props.name);
  },
  render: function() {
    return (
      <li onClick={this.onClickFunc}>
        {this.props.name} - {this.props.num}
      </li>
    )
  }
});
var Options = React.createClass({
  getInitialState: function() {
    return {
      lastClicked: ''
    }
  },
  clickHandle: function(e) {
    this.setState({
      lastClicked: e
    })
  },
  render: function() {
    var self = this;
    var renderData = Data.map(function(option) {
      return <OptionsItem lastClickHandle={self.clickHandle} name={option.name} num={option.num} getName={option.name} />
    });
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {renderData}
        </ul>
        {this.state.lastClicked ? 'Last Clicked: ' + this.state.lastClicked : '' }
      </div>
    )
  }
});

module.exports = Options;