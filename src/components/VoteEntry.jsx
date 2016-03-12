import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  isDisabled() {
    return !!this.props.hasVoted;
  },
  isVotedFor(entry) {
    return this.props.hasVoted === entry;
  },
  _onClick() {
    return this.props.vote(this.props.entry);
  },
  render() {
    return (<button
      disabled={this.isDisabled()}
      onClick={this._onClick}
    >
      <h1>{this.props.entry}</h1>
      {
        this.props.hasVoted ?
          <div className="label">Voted</div> :
          null
      }
    </button>);
  },
});
