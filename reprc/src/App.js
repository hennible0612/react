import {Component} from "react"; //클래스


import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    name: 'linda',
                },
                {
                    name: 'Frank',
                },
                {
                    name: 'Jacky',
                }
            ]
        };

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(
                () => {
                    return {monsters: users}
                },
                () => {
                    console.log(this.state)
                }
            ));
    }


    render() {
        return <div className='App'>
            {
                this.state.monsters.map((monster) => {
                    return <h1>{monster.name}</h1>
                })
            }

        </div>;
    }
}

export default App;
