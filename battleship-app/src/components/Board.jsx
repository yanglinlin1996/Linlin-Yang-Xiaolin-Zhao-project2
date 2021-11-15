import React from "react";
import '../style/Board.css';
import Square from './Square.jsx';
import { useSelector } from 'react-redux';

export default function Board(props) {

    const { player } = props;

    const boardState = useSelector((state) => state[player]);

    const clickState = useSelector((state) => state.totalClicks);
    const totalClicks = clickState.totalClicks;
    const winner = clickState.winner;

    const boardComponent = [];

    console.log("Current Board State is: " + boardState);

    

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol = {boardState[i][j]} boardState = {boardState} x = {i} y = {j} player = {player} totalClicks={totalClicks} winner={winner}/>);
        }
    }

    function getWinner(winner) {
        if (winner) {
            props.checkWinner(winner);
        }
    }

    return (
        <div id="board" getWinner={getWinner(winner)} >
            {boardComponent}
        </div> 
    );
}