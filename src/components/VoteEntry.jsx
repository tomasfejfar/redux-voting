import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair() {
    return this.props.pair || [];
  },
  isDisabled() {
    return !!this.props.hasVoted;
  },
  isVotedFor(entry) {
    return this.props.hasVoted === entry;
  },
  render() {
    return (<button
      disabled={this.isDisabled()}
      onClick={() => this.props.vote(this.props.entry)}
    >
      <h1>{this.props.entry}</h1>
      {this.props.hasVoted ?
        <div className="label">Voted</div> :
        null}
    </button>);
  },
});
