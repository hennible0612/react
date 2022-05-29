import {Component} from "react"; //클래스


import logo from './logo.svg';
import './App.css';

class App extends Component {
    //로컬 state 이 컴포넌트만 사용가능
    constructor() { //when ever its built // 다른 생성자들이랑 똑같다
        super();
        this.state = {
            name: {lastName: "SW", firstName: "Hong"},

            company: "Baek Sue"
        };

    }
    // name: {firstName: "Sam", lastName: "Park"

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hi I'm {this.state.name.firstName} {this.state.name.lastName}, I am {this.state.company}
                    </p>

                    <button
                        onClick={()=>{
                            this.setState((state, props)=>{
                                return {
                                    name: {firstName: "Sam", lastName: "Park"}
                                }
                            }, ()=>{ console.log(this.state)});
                        }}
                    >
                        Change Name
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
