import { Component } from "react";
import "./App.css";
import { InputBar } from "./InputBar";
import { List } from "./List";

class App extends Component {
  state = {
    inputValue: "",
    listArr: [],
    currentFilter: "All",
  };

  handleInput = (e) => {
    this.setState({ inputValue: e });
    console.log(e);
  };

  addItem = (input) => {
    if (!input) return alert("Please provide todo item!");

    const newListArr = [
      ...this.state.listArr,
      { task: input, active: true, completed: false },
    ];
    this.setState({ listArr: newListArr, inputValue: "" });
    console.log("New", newListArr);
  };

  deleteAll = () => {
    this.setState({ listArr: [] });
  };

  deleteOneItem = (index) => {
    const updatedList = [...this.state.listArr];
    updatedList.splice(index, 1);
    this.setState({ listArr: updatedList });
  };

  handleCompleted = (index) => {
    const updatedList = [...this.state.listArr];
    updatedList[index].completed = !updatedList[index].completed;
    updatedList[index].active = !updatedList[index].active;

    this.setState({ listArr: updatedList });
  };

  setFilter = (filter) => {
    this.setState({ currentFilter: filter });
  };

  handleFilterTask = () => {
    const { listArr, currentFilter } = this.state;
    // or below is the same:
    // const listArr = this.state.listArr;
    // const currentFilter = this.state.currentFilter;

    if (currentFilter === "Active")
      return listArr.filter((task) => task.active);
    if (currentFilter === "Completed")
      return listArr.filter((task) => task.completed);

    return listArr;
  };

  handleActiveTasks = () => {
    const toDoItemsNum = this.state.listArr.filter(
      (item) => item.active
    ).length;
    return toDoItemsNum;
  };

  render() {
    const filterTask = this.handleFilterTask();

    return (
      <div className="App">
        <main>
          <h1>T O D O</h1>
          <InputBar
            inputValue={this.state.inputValue}
            handleInput={this.handleInput}
            addItem={this.addItem}
          />
          <List
            list={filterTask}
            deleteAll={this.deleteAll}
            deleteOneItem={this.deleteOneItem}
            handleCompleted={this.handleCompleted}
            setFilter={this.setFilter}
            currentFilter={this.state.currentFilter}
            handleActiveTasks={this.handleActiveTasks}
          />
        </main>
      </div>
    );
  }
}

export default App;
