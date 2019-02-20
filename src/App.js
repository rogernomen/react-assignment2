import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
      inputText: ''
  };

  inputChangeHandler = (event) => {
      this.setState({inputText: event.target.value});
  };

  removeChar = (char) => {
      const splitText = this.state.inputText.split('');
      const charIndex = splitText.indexOf(char);
      splitText.splice(charIndex, 1);

      this.setState({inputText: splitText.join('')});
  };

  render() {
      const char = this.state.inputText.split('').map(char => <Char char={char} removeChar={this.removeChar.bind(this, char)}/>);
      let disclaymer;

      if (this.state.inputText.length > 0) {
          disclaymer = (<label>Click on every letter to delete it</label>);
      }

      return (
          <div className="App">
              <div>Enter a word</div>
            <input type="text" onChange={this.inputChangeHandler} value={this.state.inputText}/>
              <Validation textLength={this.state.inputText.length}/>
              {disclaymer}
              {char}
          </div>
      );
  }
}

export default App;
