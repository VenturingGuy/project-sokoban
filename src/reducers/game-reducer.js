import {
    MOVE_RIGHT, MOVE_LEFT, MOVE_DOWN,
    PAUSE, RESUME, RESTART, GAME_OVER
  } from '../actions'
  
  const defaultState = () => {
      return {
          grid: [
              [0, 0, 1, 1, 1, 1, 1, 0],
              [1, 1, 2, 0, 0, 0, 1, 0],
              [1, 0, 0, 0, 0, 0, 1, 0],
              [1, 1, 1, 0, 0, 0, 1, 0],
              [1, 0, 1, 1, 0, 0, 1, 0],
              [1, 0, 1, 0, 0, 0, 1, 1],
              [1, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1]
          ],
      }
  }
  const gameReducer = (state = defaultState(), action) => {
  
    switch(action.type) {
  
      case MOVE_RIGHT:
  
        return state
  
      case MOVE_LEFT:
  
        return state
  
      case MOVE_DOWN:
  
        return state
  
      case RESUME:
  
        return state
  
      case PAUSE:
  
        return state
  
      case GAME_OVER:
  
        return state
  
      case RESTART:
  
        return state
  
      default:
        return state
    }
  }
  
  export default gameReducer