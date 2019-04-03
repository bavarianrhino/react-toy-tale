import React from 'react';

const Toy = (props) => {

    const { toy } = props

    return (
        <div className="card">
            <p>{toy.name}</p>
            <img className="toy-avatar" src={toy.image}/ >
        </div>
    )
}

export default Toy;