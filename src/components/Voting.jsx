import React from "react";
import Winner from "./Winner"
import Vote from "./Vote.jsx"

class Voting extends React.Component {

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
