import React from 'react'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'

// Represents a 8 x 9 grid of grid squares

export default function GridBoard(props) {
    const game = useSelector((state) => state.game)
    const { grid } = game

    for (let row = 0; row < 18; row ++) {
        grid.push([])
        for (let col = 0; col < 10; col ++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
        }
    }

  // The components generated in makeGrid are rendered in div.grid-board

    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}