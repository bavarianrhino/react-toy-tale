import React, { Component } from 'react';
import { toys } from './resources/toys.js';
import Header from './containers/header';
import ToyList from './containers/toylist';
import Addtoy from './components/addtoy';
import Addform from './components/addform';
// import './Index.css';

class App extends Component {

    state = {
        toys: [],
        viewform: false
    }
    
    componentDidMount = () => {
        this.setState({ toys: toys })
    }

    renderForm = () => {
        this.setState({ viewform: !this.state.viewform })
    }

    handleLike = (toy) => {
        const newToyLikes = this.state.toys.map((t) => (t.id === toy.id ? ({ ...toy, likes: toy.likes +1 }) : t))
        this.setState({ toys: newToyLikes })
    }

    addNewToy = (e) => {
        e.preventDefault()
        
        let newName = e.target.name.value
        let newImage = e.target.image.value

        let newToy = {
            id: this.state.toys[this.state.toys.length - 1].id + 1,
            name: newName,
            image: newImage,
            likes: 0
        };

        this.setState({
            toys: [...this.state.toys, newToy], viewform: !this.state.viewform
        });
    }


    render() {
        return (
            <div className="toy-body">
                <Header />
                {(this.state.viewform) ? <Addform addNewToy={this.addNewToy}/> : null }
                <Addtoy renderForm={this.renderForm} />
                <ToyList toys={this.state.toys} handleLike={this.handleLike}/>
            </div>
        );
    }
}

export default App;
