import './PlayArea.css';

function MemCardImg({ img, imgAlt }) {
    return (
        <div id="memCardImg">
            <img src={`${process.env.PUBLIC_URL}/assets/images/${img}`} alt={ imgAlt } /> 
        </div>
    )
}

function MemCardTitle({ title }) {
    return (
        <div id="cardTitle">
            <p>{title || "Card Title"}</p>
        </div>
    )
}

function MemCard({ cardData, handleCardClick }) {
    const cardClicked = (e) => {
        console.log(cardData.title);
        handleCardClick(cardData.title);
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