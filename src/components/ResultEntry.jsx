import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getVotes() {
    if (this.props.votes) {
      return this.props.votes;
    }
    return 0;
  },
  render() {
    return (
      <div key={this.props.entry} className="entry">
        <h1>{this.props.entry}</h1>
        <div className="voteCount">
          {this.getVotes()}
        </div>
      </div>
    );
  }
  ,
})
;
