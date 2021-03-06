import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import VoteEntry from '../../src/components/VoteEntry';

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
    return (<div className="voting">
      {this.getPair().map(entry =>
        <VoteEntry key={entry} entry={entry} />
      )}
    </div>);
  },
});
