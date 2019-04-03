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


    render() {
        return (
            <div className="toy-body">
                <Header />
                {(this.state.viewform) ? <Addform /> : null }
                <Addtoy renderForm={this.renderForm} />
                <ToyList toys={this.state.toys}/>
            </div>
        );
    }
}

export default App;
