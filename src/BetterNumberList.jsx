import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  state = { nums: [1, 2, 3, 4, 5] };
  remove=(num)=>{
this.setState((ste)=>({
    nums: ste.nums.filter((n)=> n!==num),
}))

  }
  render() {

    let nums = this.state.nums.map((num) => <BetterNumberItem key={num} value={num} remove={()=>this.remove(num)}/>);
    return (
      <div className="">
        <h1>First Number</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
