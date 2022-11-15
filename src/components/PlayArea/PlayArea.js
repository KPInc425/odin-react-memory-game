function MemCardImg({ img, imgAlt }) {
    return (
        <div id="memCardImg">
            <img src={ img } alt={ imgAlt } /> 
        </div>
    )
}

function MemCardTitle({ title }) {
    return (
        <div id="cardTitle">
            {title || "Card Title"}
        </div>
    )
}

function MemCard({ cardData, handleCardClick }) {
    const cardClicked = (e) => {
        // console.log(e.target.parentNode);
        handleCardClick();
    }

    return (
        <div id="memCard" onClick={ cardClicked }>
            <MemCardImg img={ cardData.img } imgAlt={ cardData.imgAlt }/>
            <MemCardTitle title={ cardData.title }/>
        </div>
    )
}

function PlayArea({ cardsArray, handleCardClick }) {
    return (
        <div id='playArea'>
            { cardsArray.map((card, index) => <MemCard key={ index } cardData={ card } handleCardClick={ handleCardClick }/>) }
        </div>
    )
}

export default PlayArea;