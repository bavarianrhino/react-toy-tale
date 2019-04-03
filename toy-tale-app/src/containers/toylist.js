import React from 'react';
import Toy from '../components/toy';

class ToyList extends React.Component {

    rendertoys = (props) => {
        return this.props.toys.map((toy) =>{
            return <Toy key={toy.id} toy={toy} />
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