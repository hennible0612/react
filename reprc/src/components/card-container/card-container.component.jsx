import {Component} from "react";
import CardList from "../card-list/card-list.component";
import './cart-container.style.css'
class CardContainer extends Component {

    render() {
        // const id = this.props.id
        // const name = this.props.name
        // const email = this.props.email
        const {id, name, email} = this.props.monster
        return(
            <div className='card-container' key={id}>
                <img alt={`monster ${name}`}
                     src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
        )
    }
}
export default CardContainer; // 다른 파일들이 import 할 수 있게 한다.