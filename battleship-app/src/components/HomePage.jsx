import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import '../style/Home.css';

export default function Home() {
    return (
        <div className="homeContainer">
            <h1>Welcome to Battleship Game</h1>
            <div className="modeContainer">
                <h2>Please select game mode</h2>
                <div class="buttonContainer">
                    <Stack direction="row" spacing={10}>
                        <Button variant="contained" className="modeButton" href="/freeplay">Free Play</Button>
                        <Button variant="contained" className="modeButton" href="/normalplay">Normal Play</Button>
                    </Stack>
                </div>
                
            </div>
            <Link href="/rule" fontSize="large">How to Play Battleship</Link>
        </div>
        
    )
}