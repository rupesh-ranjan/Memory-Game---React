import { useEffect, useState } from "react";

function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [boardSize, setBoardSize] = useState(3);
    const [flippedCardId, setFlippedCardId] = useState(null);
    const [solvedCards, setSolvedCards] = useState([]);
    const [won, setWon] = useState(false);

    function initializeGame(boardSize) {
        const totalCards = boardSize * boardSize; // 9

        const pairCount = Math.floor(totalCards / 2); // 4
        const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
        const shuffledCards = [...numbers, ...numbers]
            .sort(() => Math.random() - 0.5)
            .slice(0, totalCards)
            .map((number, index) => {
                return { id: index, number };
            });

        setCards([
            ...shuffledCards.slice(0, shuffledCards.length / 2),
            ...(totalCards % 2 !== 0 ? [{ id: null, number: null }] : []),
            ...shuffledCards.slice(shuffledCards.length / 2),
        ]);
        setFlippedCardId(null);
        setSolvedCards([...(totalCards % 2 !== 0 ? [null] : [])]);
        setWon(false);
    }

    function handleCardClick(cardId) {
        if (flippedCardId === cardId) return;

        const currentCardaValue = cards.find(
            (card) => card?.id === cardId,
        ).number;
        const flippedCardaValue = cards.find(
            (card) => card?.id === flippedCardId,
        )?.number;

        if (!solvedCards.includes(cardId)) {
            if (currentCardaValue !== flippedCardaValue) {
                // first card
                setFlippedCardId(cardId);
            } else {
                // second card
                setSolvedCards([...solvedCards, flippedCardId, cardId]);
                setFlippedCardId(null);
            }
        }
    }

    function handleBoardSize(e) {
        let size = e.target.value > 10 ? 10 : e.target.value;
        size = e.target.value < 2 ? 2 : e.target.value;
        setBoardSize(size);
    }

    useEffect(() => {
        initializeGame(boardSize);
    }, [boardSize]);

    useEffect(() => {
        if (cards.length > 0 && solvedCards.length > 0) {
            if (solvedCards.length === cards.length) setWon(true);
        }
    }, [solvedCards, cards]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-8">
            {/* Size */}
            <div className="text-3xl mr-4">
                <label className="mr-4">
                    Enter the board size (min:2. max:10 )
                </label>
                <input
                    type="number"
                    min={2}
                    max={10}
                    value={boardSize}
                    onChange={handleBoardSize}
                    className="border-2 px-2"
                />
            </div>

            {/* Cards */}
            <div
                className="grid gap-2"
                style={{
                    gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
                    width: `min(100%, ${boardSize * 5.5}re)`,
                }}
            >
                {cards.map((card) => {
                    const isOpen =
                        solvedCards.includes(card?.id) ||
                        flippedCardId === card?.id ||
                        card === null;
                    // console.log(card.id, isOpen);
                    return (
                        <div
                            key={card.id}
                            className={` p-6 rounded-lg text-white text-2xl hover:cursor-grab 
                                ${isOpen ? "bg-green-600" : "bg-red-600"}
                                `}
                            onClick={() => handleCardClick(card?.id)}
                        >
                            {isOpen ? card?.number : "?"}
                        </div>
                    );
                })}
            </div>

            {/* Won */}
            <p className="text-3xl text-green-600 animate-bounce">
                {won && "You won!"}
            </p>

            {/* Reset */}
            <button
                className="bg-green-600 text-3xl text-white border-2 p-2 rounded-lg px-8"
                onClick={() => initializeGame(boardSize)}
            >
                {won ? "Play Again !" : "Reset !"}
            </button>
        </div>
    );
}

export default MemoryGame;
