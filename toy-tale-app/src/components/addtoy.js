import React from 'react';

class Addtoy extends React.Component {

    handleClick = (props) => {
        this.props.renderForm()
    }

    render() {
        return (
            <div>
                <p>Add a Toy!!</p>
                <button onClick={this.handleClick}>Add Toy</button>
            </div>
        )
    }
}

export default Addtoy;