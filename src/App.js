import React from 'react';
import axios from 'axios';
import RandomJoke from './RandomJoke';
import Categories from './Categories';
import './App.css';

class App extends React.Component {

  // state = { joke: ""};

  // onButtonClick = async () => {
  //   console.log("in");
  //   const response = await axios.get('https://api.chucknorris.io/jokes/random');
  //   console.log(response);
  //   this.setState({joke: (response).data.value});
  // }

  render() {
    return (
      <div className="App">
        <RandomJoke></RandomJoke>
        <Categories></Categories>
      </div>
    );
  }
}

export default App;
