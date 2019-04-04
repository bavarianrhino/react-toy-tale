import React from 'react';
import Toy from '../components/toy';

class ToyList extends React.Component {

    rendertoys = () => {
        return this.props.toys.map((toy) => {
            return <Toy key={toy.id} toy={toy} handleLike={this.props.handleLike} />
        })
    }

    render() {
        return (

            <div>
                {this.rendertoys()}
            </div>
        )
    }
}

export default ToyList;