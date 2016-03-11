import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from "./Winner"
import Vote from "./Vote.jsx"

export default React.createClass({
    mixins: [PureRenderMixin],
    hasWinner() {
        return !!this.props.winner;
    },
    render () {
        return <div className="voting">
            {this.hasWinner() ?
                <Winner winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>;
    }
});
