import {Component} from "react";
import './card-list.styles.css'
import CardContainer from "../card-container/card-container.component"

const CardList = ({monsters}) => (
    // const {monsters} = props;

    <div className='card-list'>
        {monsters.map(monster => {
            const {name, id, email} = monster
            return (
                <CardContainer monster={monster}/>
                // <CardContainer name={name} id={id} email={email}/>

            )
        })}
    </div>
)

export default CardList; // 다른 파일들이 import 할 수 있게 한다.