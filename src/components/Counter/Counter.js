import React from "react";



class Counter extends React.Component {
    handleIncremet = () => {
        console.log('Кликнули ура увелич на 1');
        console.log(this);
    };
    handleDecremet = () => {
        console.log('Кликнули ура уменьш на 1');
        console.log(this);
    }
    render() {
        return (
            <div className="Counter">
                <span className="Counter_value">0</span>

                <div className="Counter_controls">
                    <button type="button" onClick={this.handleIncremet}>Увеличить на 1</button>
                    <button type="button" onClick={this.handleDecremet}>Уменьшить на 1</button>
                </div>
            </div>
        );
    }
}




export default Counter;