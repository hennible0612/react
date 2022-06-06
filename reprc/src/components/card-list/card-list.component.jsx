import {Component} from "react";

class CardList extends Component {
    render() {
        const {monsters} = this.props
        return (
            <div className='card-list'>
                {monsters.map(monster => (

                    <div className='card-container' key={monsters.id}>
                        <img alt={`moster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
                        <h2>{monster.name}</h2>
                        <p>{monster.email}</p>

                    </div>
                ))
                }
            </div>
        );
    }
}

export default CardList; // 다른 파일들이 import 할 수 있게 한다.