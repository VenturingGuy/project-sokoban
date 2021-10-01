// Returns the default grid
export const gridDefault = () => {
    const rows = 8
    const cols = 9
    const array = []
  
    for (let row = 0; row < rows; row++) {
        array.push([])
        for (let col = 0; col < cols; col++) {
          if (col < 1 || col > cols - 1) {
            array[row].push(0)
          }
        }
    }
  
    return array
}

// Return the default state for the game
export const defaultState = () => {
    return {
      // Create an empty grid
      grid: gridDefault(),
      // Game isn't over yet
      gameOver: false
    }
  }