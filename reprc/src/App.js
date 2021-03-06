import './App.css';

import {useState, useEffect} from 'react'

import './components/card-list/card-list.component'
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import CardListComponent from "./components/card-list/card-list.component";

const App = () => {
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters)


    //dependency 에 있는 값이 바뀔때만 rendering 한다. 처음에는 걍 돌린다.
    useEffect(() => {
        console.log('useEffect');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));

    }, [])

    console.log('render');
    useEffect(() => { //monsters 혹은 searchField 가 바뀔때만 실행
        const newfilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        });

        setFilterMonsters(newfilteredMonsters);
    },[monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase(); //입력된값
        setSearchField(searchFieldString);

    }


    return (
        <div className='App'>
            <h1 className="app-title">Monsters Rolodex</h1>

            <SearchBox className={"monsters-search-box"}
                       onChangeHandler={onSearchChange}
                       placeholder={'search Monsters'}
            />

            <CardList monsters={filteredMonsters}/>
        </div>
    )
}


// class App extends Component {
//
//     constructor() {
//         console.log("Constructor")
//
//         super();
//         this.state = {
//             monsters: [],
//             searchField: ''
//         };
//
//     }
//
//     componentDidMount() {
//         console.log("ComponenetDidMount")
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((users) => this.setState(
//                     () => {
//                         return {monsters: users}
//                     },
//                     () => {
//                         // console.log(this.state)
//                     }
//                 )
//             );
//     }
//
//     // 검색 필터 매서드
//     onSearchChange = (event) => {
//
//         const searchField = event.target.value.toLocaleLowerCase();
//
//         this.setState(() => {
//             return {searchField: searchField}
//         });
//     }
//
//     render() {
//         console.log("render")
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this
//
//         const filteredMonsters = monsters.filter((monster) => { //검색된 array
//             return monster.name.toLocaleLowerCase().includes(searchField); //있을시 true 그리고 array에 저장장                    })
//         });
//         console.log(filteredMonsters)
//         return (<div className='App'>
//             <h1 className="app-title">Monsters Rolodex</h1>
//
//             <SearchBox className={"monsters-search-box"} onChangeHandler={onSearchChange} placeholder={'search Monsters'}/>
//
//             <CardList monsters={filteredMonsters}/>
//         </div>);
//     }
// }

export default App;
