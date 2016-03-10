import React from "react";

class Winner extends React.Component {
    render() {
        return <div className="winner" rel="winner">The winner is {this.props.winner}</div>
    }
}

export default Winner;
