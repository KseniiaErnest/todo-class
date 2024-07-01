// This component has its state and all methods that only needed for this component

import { Component } from "react";

export class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listList: props.list,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
      this.setState({ listList: this.props.list });
    }
  }


  deleteAll = () => {
    this.setState({ listList: [] });
      }

  render() {
    return(
      <div>
        <ul>
          {this.state.listList.map((item, index) => (
            <li key={index}>
            {item}
            </li>
          ))}
        </ul>
        <button onClick={this.deleteAll}>Delete All</button>
      </div>
    )
  }
}
