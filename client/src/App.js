import React from 'react';
import {useLocalStorage} from "./hooks/useLocalStorage"
import PlayerList from "./components/PlayerList"
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  this.state = {
    players: [],
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

  render() {
    return (
      <div className="App">
        <h1>Soccer Womens</h1>
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
