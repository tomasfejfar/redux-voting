import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  isDisabled() {
      return !!this.props.hasVoted;
    },
  getPair() {
      return this.props.pair || [];
    },
  isVotedFor(entry) {
      return this.props.hasVoted == entry;
    },
  render() {
      return <div className="voting">
            {this.getPair().map(entry =>
                <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                    {this.isVotedFor(entry) ?
                        <div className="label">Voted</div> :
                        null}
                </button>
            )}
        </div>;
    }
});
