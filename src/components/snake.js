import { useState } from 'react';

export default function Snake() {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState('RIGHT');

    const boardWidth = '70vw';
    const boardHeight = '70vh';

    const boardStyle = {
        width: boardWidth,
        height: boardHeight,
        backgroundColor: '#fff',
        display: 'grid',
        gridTemplateColumns: `repeat(${boardWidth / 20}, 20px)`,
        gridTemplateRows: `repeat(${boardHeight / 20}, 20px)`,
        gap: '1px',
    };

    const boardContainerStyle = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    };

    return (
        <div className="logo-container">
            <div className="logo-text">SNAKE</div>
            <div class="anim-border">
            <div style={boardContainerStyle}>
                <div style={boardStyle}>
                    {/* Render the game board */}
                </div>
                </div>
            </div>
        </div >
    );
}