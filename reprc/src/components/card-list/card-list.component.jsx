import {Component} from "react";
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const {monsters} = this.props
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    const {name, id, email} = monster
                        return (
                            <div className='card-container' key={id}>
                                <img alt={`moster ${name}`}
                                     src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                                <h2>{name}</h2>
                                <p>{email}</p>

                            </div>
                        )
                    })}
            </div>
        );
    }
}

export default CardList; // 다른 파일들이 import 할 수 있게 한다.