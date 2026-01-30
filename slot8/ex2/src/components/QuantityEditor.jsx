import { useReducer } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

const initialState = (initialValue) => ({
  count: Math.max(0, initialValue),
});

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: Math.max(0, state.count - 1) };
    case 'SET_INPUT':
      return { count: Math.max(0, action.value) };
    default:
      return state;
  }
}

export default function QuantityEditor({ initialValue = 0, onChange }) {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });
    onChange?.(Math.max(0, state.count - 1));
  };

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
    onChange?.(state.count + 1);
  };

  const handleInputChange = (e) => {
    const raw = e.target.value;
    let num = 0;
    if (raw !== "") {
      num = parseInt(raw, 10);
      if (Number.isNaN(num)) num = 0;
    }
    dispatch({ type: 'SET_INPUT', value: num });
    onChange?.(num);
  };

  return (
    <div style={{ maxWidth: 150 }}>

      <InputGroup>
        <Button variant="secondary" onClick={handleDecrease}>
          <FaMinus/>
        </Button>

        <Form.Control
          type="number"
          min={0}
          value={state.count}
          onChange={handleInputChange}
          aria-label="quantity"
        />

        <Button variant="secondary" onClick={handleIncrease}>
          <FaPlus/>
        </Button>
      </InputGroup>
    </div>
  );
}
