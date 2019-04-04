import React from 'react';

const Toy = (props) => {

    // const { toy } = props

    let handleClick = () => {
        props.handleLike(props.toy)
    }

    return (
        <div className="card">
            <p>{props.toy.name}</p>
            <img className="toy-avatar" src={props.toy.image} alt="toy"/ >
            <p>{props.toy.likes === null ? 0 : props.toy.likes}</p>
            <button onClick={handleClick}>Like</button>
        </div>
    )
}

export default Toy;