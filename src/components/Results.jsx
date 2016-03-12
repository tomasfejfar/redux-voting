import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ResultEntry from './ResultEntry';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair() {
    return this.props.pair || [];
  },
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  render() {
    return (<div className="results">
      {this.getPair().map((entry) =>
        <ResultEntry key={entry} entry={entry} votes={this.getVotes(entry)} />
      )}
    </div>);
  },
});
