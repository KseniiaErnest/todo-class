
import { Component } from 'react';
import './App.css';
import { InputBar } from './InputBar';
import { List } from './List';

class App extends Component {

  state = {
inputValue: '',
listArr: [],
  }

  handleInput = (e) => {
    this.setState({ inputValue: e });
    console.log(e)
  };

  addItem = (input) => {
    if (!input) return alert("Please provide todo item!");

    const newListArr = [...this.state.listArr, input];
    this.setState({ listArr: newListArr, inputValue: "" });
    console.log("New", newListArr);
  };


  render() {
    return (
      <div className="App">
       <h1>TO DO</h1>
       <InputBar inputValue={this.state.inputValue} handleInput={this.handleInput} addItem={this.addItem} />
       <List list={this.state.listArr}  />
      </div>
    );
  }
  
}

export default App;