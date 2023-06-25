

const Controls = ({ onIncrement, onDescrement }) => (
    <div className="Counter_controls">
    <button type="button" onClick={onIncrement}>Увеличить на 1</button>
    <button type="button" onClick={onDescrement}>Уменьшить на 1</button>
</div>
);




export default Controls;