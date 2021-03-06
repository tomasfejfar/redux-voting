import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return <div className="winner" rel="winner">The winner is {this.props.winner}</div>;
  },
});
