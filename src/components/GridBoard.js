import React from 'react'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'

// Represents a 8 x 9 grid of grid squares



export default function GridBoard(props) {
    
      const grid = useSelector(state => state.game.grid)
      const grid_squares = []
      for (let row = 0; row < 9; row ++) {
          for (let col = 0; col < 8; col ++) {
              grid_squares.push(<GridSquare key={`${col}${row}`} color={grid[row][col]} />)
          }
      }
  
    // The components generated in makeGrid are rendered in div.grid-board
  
      return (
          <div className='grid-board'>
              {grid_squares}
          </div>
      )
  }
  
