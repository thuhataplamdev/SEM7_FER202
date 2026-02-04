import { useReducer } from "react";
import { Button, Card, Form, InputGroup, ListGroup } from "react-bootstrap";

const initialState = {
  todos: [],
  task: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      const trimmed = action.text.trim();
      if (!trimmed) return state;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: trimmed },
        ],
        task: "",
      };
    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.id),
      };
    case "SET_TASK":
      return {
        ...state,
        task: action.value,
      };
    default:
      return state;
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ type: "ADD_TASK", text: state.task });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TASK", id });
  };

  return (
    <div className="d-flex gap-4 flex-wrap align-items-start">
      <div style={{ minWidth: 360 }}>
        <InputGroup>
          <Form.Control
            placeholder="Please input a Task"
            value={state.task}
            onChange={(e) => dispatch({ type: "SET_TASK", value: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <Button variant="danger" onClick={addTodo}>
            Add Todo
          </Button>
        </InputGroup>
      </div>

      <Card style={{ width: 420 }}>
        <Card.Body>
          <Card.Title className="text-center">Todo List</Card.Title>

          {state.todos.length === 0 ? (
            <div className="text-center text-muted mt-3">
              Bạn chưa có list việc cần làm
            </div>
          ) : (
            <ListGroup className="mt-3">
              {state.todos.map((t) => (
                <ListGroup.Item
                  key={t.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{t.text}</span>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTodo(t.id)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
