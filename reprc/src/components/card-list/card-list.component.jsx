import {Component} from "react";

class CardList extends Component {
    render() {
        const {monsters} = this.props
        return (
            <div>
                {monsters.map(monsters => (
                    <h1>{monsters.name}</h1>
                ))
                }
            </div>
        );
    }
}

export default CardList; // 다른 파일들이 import 할 수 있게 한다.