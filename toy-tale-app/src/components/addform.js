import React from 'react';

class Addform extends React.Component {


// class NewToyForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             image: ""
//         };
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     handleReset = () => {
//         this.setState({ name: "", image: "" });
//     };

    handleSubmit = (e) => {
        this.props.addNewToy(e)
        e.target.reset()
    }


    render() {
        return (
            <div className="toy-header-form">
                <form onSubmit={this.handleSubmit} className="add-toy-form">
                    <h2>Add Toy</h2>
                    <input type="text" name="name" placeholder="Toys name..." className="input-text"/>
                    <input className="input-text" type="text" name="image" placeholder="Toy's image URL..."/>
                    <br />
                    <input className="submit" type="submit" name="submit" value="Create New Toy"/>
                </form>
            </div>
        )
    }
}

export default Addform;

// value = { this.state.image }
// onChange = { this.handleChange }