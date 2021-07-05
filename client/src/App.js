import React from 'react';
import PlayerList from "./components/PlayerList"
import DarkModeToggle from "./components/DarkModeToggle"
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  this.state = {
    players: [],
    searchText: ''
  };

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res)
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err.message));
  }
  handleChanges = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  searchPlayers = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => { 
        let playerSearched = response.data.filter(player =>
            player.name.toLowerCase().includes(this.state.searchText.toLowerCase())
          );
        this.setState({
          players: playerSearched,
          searchText: ""
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="App">
        <DarkModeToggle />
        <div className="searchForm">
        <label htmlFor="playerSearch">Search Players </label>
        <input id="playerSearch" name="playerSearch" value={this.state.searchText} onChange={this.handleChanges} />
        <button onClick={this.searchPlayers}>Search!</button>
        </div>
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
