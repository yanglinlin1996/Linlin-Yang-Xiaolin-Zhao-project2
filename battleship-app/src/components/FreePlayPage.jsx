import React from 'react';
import { useSelector } from 'react-redux';
import { PLAYER_BOARD, STYLE } from '../utils/Constants.js';
import Board from "./Board.jsx";
import ResetButton from './ResetButton.jsx';
import Button from '@mui/material/Button';
import '../style/PlayPage.css';

export default function FreePlayBoard() {
    const winner = useSelector((state) => state.gameReducer).winner;
    return (
        <div>
            <div class="navbar">
            <Button variant="contained" className="navbarButton" href="/" style={STYLE}>Home</Button>
                <Button variant="contained" className="navbarButton" href="/freeplay" style={STYLE}>Free Play</Button>
                <Button variant="contained" className="navbarButton" href="/normalplay" style={STYLE}>Normal Play</Button>
                <Button variant="contained" className="navbarButton" href="/rule" style={STYLE}>Play Rule</Button>
            </div>
            <div class="buttonContainer">
                <ResetButton text="Reset game"/>
            </div>
            <div class={winner? "winnerContainer" : null}>{winner ? `Game over! ${winner} Won!` : "" }</div>
            <div class="boardContainer">
                <div class="player">
                    <Board playerBoard={PLAYER_BOARD} />
                    <h3>Enemy Board</h3>
                </div>
            </div>
        </div>
        
        
    );
}