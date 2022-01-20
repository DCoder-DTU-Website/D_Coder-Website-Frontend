import React from "react";
import tw from "twin.macro";

const YearDropdown = tw.select`text-gray-900 mx-12 xl:-mx-16 my-2 rounded-md w-32 h-12 px-6 text-lg`;
const YearItems = tw.option`rounded-md `;
const Years = [
  {
    id:1,
    value:"2022"
  },
  {
    id:2,
    value:"2021"
  }
];

class YearSelction extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      value:"2022",
      lists: Years
    }
     this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({value:e.target.value})
    this.props.setCurrentYear(e.target.value);
  }

  render(){
    return (
      <YearDropdown style={{ marginLeft: "2rem" }} onChange={this.handleChange}>
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
