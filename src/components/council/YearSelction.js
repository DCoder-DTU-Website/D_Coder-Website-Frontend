import React from "react";
import tw from "twin.macro";
import "./YearSelection.css";

const YearDropdown = tw.select`text-gray-900 mx-12 xl:-mx-16 my-2 rounded-md w-48 h-12 px-6 text-lg`;
const YearItems = tw.option`rounded-md `;
const Years = [
  {
    id: 1,
    value: "2021-2022",
  },
  {
    id: 2,
    value: "2020-2021",
  },
];

class YearSelction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "2021-2022",
      lists: Years,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.setCurrentYear(e.target.value);
  }

  render() {
    return (
      <YearDropdown
        className="YearSelection__select"
        onChange={this.handleChange}
      >
        {this.state.lists.map((list) => (
          <YearItems key={list.id} value={list.value}>
            {list.value}
          </YearItems>
        ))}
      </YearDropdown>
    );
  }
}

export default YearSelction;
