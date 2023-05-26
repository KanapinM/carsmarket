import Card from '../../components/Card/Card'

function Cards(props) {
    return (

        <>
            {(props.cards === false || undefined || null)
                ?
                <></> :

                (<ul className="cards__container" cards={props.cards}>
                    {props.cards.map(({ ...card }) =>
                        <Card
                            card={card}
                            {...card}
                        />

                    )}
                </ul>)

            }
        </>

    );
}

export default Cards;