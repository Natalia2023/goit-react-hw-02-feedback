import React from "react";
import Controls from "./Controls";


class Counter extends React.Component {
    state = {
        value: this.props.initialValue, 
    };
    handleIncremet = () => {
        this.setState((prevState) => {
            return {
            value: prevState.value + 1,
            }
        });
        };
    handleDecremet = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value - 1,
            }
        })
      
    };

    render() {
        return (
            <div className="Counter">
                <span className="Counter_value">{this.state.value}</span>
<Controls 
onIncrement={this.handleDecremet}
onDescrement={this.handleDecremet}
/>
                {/* <div className="Counter_controls">
                    <button type="button" onClick={this.handleIncremet}>Увеличить на 1</button>
                    <button type="button" onClick={this.handleDecremet}>Уменьшить на 1</button>
                </div> */}
            </div>
        );
    }
}




export default Counter;