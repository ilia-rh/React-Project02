import React, { Component } from "react";
import TextBox from "./Components/TextBox/TextBox";
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";


class App extends Component {
  state = {
    userInput: "",
  }


  inputLisinerHandeler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteHandeler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  };

  render() {
    const charLsit = this.state.userInput.split("").map((chr, index) => {
      return <Char text={chr} key={index} funcClick={() => this.deleteHandeler(index)} />
    })
    return (
      <div>
        <TextBox change={this.inputLisinerHandeler} />
        <p> {this.state.userInput} </p>
        <Validation inputLengh={this.state.userInput.length} />
        {charLsit}
      </div>
    );
  };
};


export default App;