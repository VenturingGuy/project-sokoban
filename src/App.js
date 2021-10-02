import { Provider } from 'react-redux';
import './App.css';
import GridBoard from './components/GridBoard';
import { createStore } from 'redux';
import reducers from './reducers'
import GridSquare from './components/GridSquare';
import Controls from './components/Controls';



const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sokoban Redux</h1>
        </header>
        <GridBoard />
        <Controls />
      </div>
    </Provider>
  );
}

export default App;
