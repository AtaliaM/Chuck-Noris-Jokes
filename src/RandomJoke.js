import React from 'react';
import axios from 'axios';


class RandomJoke extends React.Component {
    state = { joke: "" };

    onButtonClick = async () => {
        console.log("in");
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(response);
        this.setState({ joke: (response).data.value });
    }

    render() {
        return (
            <div className="container">
                <button style={{ marginBottom: "20px" }} onClick={this.onButtonClick}>Get Random Joke</button>
                <div>{this.state.joke}</div>
            </div>
        );
    }

}

export default RandomJoke;
