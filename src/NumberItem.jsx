import React, { Component } from 'react'
class NumberItem extends Component {
    state = {  } 
    render() { 
        return (
            <div className=''>
                <li>
                    {this.props.value}
                    <button onClick={this.props.remove}>x</button>
                </li>
            </div>
        );
    }
}
 
export default NumberItem;