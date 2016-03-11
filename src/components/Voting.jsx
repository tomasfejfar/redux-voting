import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from "./Winner"
import Vote from "./Vote.jsx"

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    hasWinner() {
        return !!this.props.winner;
    }
    render () {
        return <div className="voting">
            {this.hasWinner() ?
                <Winner winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>;
    }
}

export default Voting;
