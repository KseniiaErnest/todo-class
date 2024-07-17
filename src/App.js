import { Component } from "react";
import "./App.css";
import { InputBar } from "./InputBar";
import { List } from "./List";

class App extends Component {
  state = {
    inputValue: "",
    listArr: [],
    currentFilter: "All",
    lightMode: false,
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

  // toggle method for dark/light mode
  toggleMode = () => {
    this.setState((prevState) => ({ lightMode: !prevState.lightMode }));
  };

  // method to apply dark/light mode
  applyMode = (lightMode) => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };

  // Lifecycle methods for dark/light mode
  componentDidMount() {
    const lightMode = localStorage.getItem("lightMode") === "true";
    this.setState({ lightMode });
    this.applyMode(lightMode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lightMode !== this.state.lightMode) {
      this.applyMode(this.state.lightMode);
      localStorage.setItem("lightMode", this.state.lightMode);
    }
  }

  render() {
    const filterTask = this.handleFilterTask();

    return (
      <div className="App">
        <main>
          <h1>
            T O D O{" "}
            <span onClick={this.toggleMode}>
              {this.state.lightMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                  />
                </svg>
              )}
            </span>
          </h1>

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

