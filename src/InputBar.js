import { Component } from "react";

export class InputBar extends Component {
  
  handleAddItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.props.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <input className="to-do"
          placeholder="Create a new todo..."
          type="type"
          value={this.props.inputValue}
          onChange={(e) => this.props.handleInput(e.target.value)}
        />
      </form>
    );
  }
}



