import React from 'react';
import axios from 'axios';


class Categories extends React.Component {

    state = {categories: [], buttons: [], currentJoke : ""};
  
    async componentDidMount() {
      const response = await axios.get('https://api.chucknorris.io/jokes/categories');
      console.log(response);
      const categories = (response).data.slice(0,); //copying joke categories to state prop
      this.setState({categories: [...categories]});

      this.createButtons(this.categories);
    }

   jokeByCategory = async(category) => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    console.log(response);
    this.setState({currentJoke : response.data.value});
    }

    createButtons = () => {
        const btnArray = [];
        for (let i =0; i < this.state.categories.length; i++) {
            btnArray.push(<button style={{margin:"5px"}} 
            onClick= {()=>this.jokeByCategory(this.state.categories[i])}>
            {this.state.categories[i]}</button>); //creating each button and adding onClick function
        }
        
        console.log(btnArray);
        this.setState({buttons: [...btnArray]});
    }
  
   
    render() {
      return (
        <div>
          {this.state.buttons}
          <div>{this.state.currentJoke}</div>
        </div>
      );
    }
  }
  
  export default Categories;
  