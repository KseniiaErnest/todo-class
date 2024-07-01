// This List component gets props and methods as props

import { Component } from "react";

export class List extends Component {
  render() {
    return (
      <div className="list-container">
        <ul>
          {this.props.list.map((item, index) => (
            <li
              className="to-do item"
              onClick={() => this.props.handleCompleted(index)}
              key={index}
            >
              <span className={`${item.completed ? "completed" : ""}`}>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={item.completed}
                />
                {item.task}
              </span>
              <button
                className="btn-delete"
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.deleteOneItem(index);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <div className="to-do item">
          <p>{this.props.handleActiveTasks()} item(s) left</p>
          <button className="btn btn-deleteAll" onClick={this.props.deleteAll}>
            Delete All
          </button>
        </div>
        <div className="to-do btn-container">
          <button
            className={`btn ${
              this.props.currentFilter === "All" ? "active" : ""
            }`}
            onClick={() => this.props.setFilter("All")}
          >
            All
          </button>
          <button
            className={`btn ${
              this.props.currentFilter === "Active" ? "active" : ""
            }`}
            onClick={() => this.props.setFilter("Active")}
          >
            Active
          </button>
          <button
            className={`btn ${
              this.props.currentFilter === "Completed" ? "active" : ""
            }`}
            onClick={() => this.props.setFilter("Completed")}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
