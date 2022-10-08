import React, { Component } from 'react'
class BetterNumberItem extends Component {
  handleRemove=()=>{
    this.props.remove(this.props.value);
  }
    render() { 
        return (
            <div className=''>
                <li>
                    {this.props.value}
                    <button onClick={this.handleRemove}>x</button>
                </li>
            </div>
        );
    }
}
 
export default BetterNumberItem;