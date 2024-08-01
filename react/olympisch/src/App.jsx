import React from 'react';
import GamesTable from './gamesTable';
import './App.css';
import Unterseite from './Unterseite';
 
 
class App extends React.Component {
 
  render() {
    return (
      <div className="app">
        <Unterseite></Unterseite>
        <GamesTable></GamesTable>
      </div>
    );

 }
}
export default App;