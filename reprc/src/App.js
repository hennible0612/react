import {Component} from "react"; //클래스


import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        console.log("Constructor")

        super();
        this.state = {
            monsters: [],
            searchField: ''
        };

    }

    componentDidMount() {
        console.log("ComponenetDidMount")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(
                    () => {
                        return {monsters: users}
                    },
                    () => {
                        // console.log(this.state)
                    }
                )
            );
    }


    render() {
        console.log("render")

        const filteredMonsters = this.state.monsters.filter((monster) => { //검색된 array
            return monster.name.toLocaleLowerCase().includes(this.state.searchField); //있을시 true 그리고 array에 저장장                    })
        });
        console.log(filteredMonsters)
        return (<div className='App'>
            <input className='search-box' type='search' placeholder='search monsters'
                   onChange={(event) => {

                       const searchField = event.target.value.toLocaleLowerCase();

                       this.setState(() => {
                           return {searchField : searchField}
                       });
                   }}
            />
            {
                filteredMonsters.map((monster) => { //검색된 array 만 랜더링
                    return <h1>{monster.name}</h1>
                })
            }
        </div>);
    }
}

export default App;
