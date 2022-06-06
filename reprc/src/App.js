import {Component} from "react"; //클래스


import logo from './logo.svg';
import './App.css';

import './components/card-list/card-list.component'
import CardList from "./components/card-list/card-list.component";
import CardListComponent from "./components/card-list/card-list.component";

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

    // 검색 필터 매서드
    onSearchChange = (event) => {

        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {searchField: searchField}
        });
    }

    render() {
        console.log("render")
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this

        const filteredMonsters = monsters.filter((monster) => { //검색된 array
            return monster.name.toLocaleLowerCase().includes(searchField); //있을시 true 그리고 array에 저장장                    })
        });
        console.log(filteredMonsters)
        return (<div className='App'>
            <input className='search-box' type='search' placeholder='search monsters'
                   onChange={onSearchChange}
            />
            <CardList monsters={filteredMonsters}/>

        </div>);
    }
}

export default App;
