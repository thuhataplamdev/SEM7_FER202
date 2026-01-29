import { useState } from "react";
import { Button, Card, Form, InputGroup, ListGroup } from "react-bootstrap";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const trimmed = task.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="d-flex gap-4 flex-wrap align-items-start">
      <div style={{ minWidth: 360 }}>
        <InputGroup>
          <Form.Control
            placeholder="Please input a Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
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

          {todos.length === 0 ? (
            <div className="text-center text-muted mt-3">
              Bạn chưa có list việc cần làm
            </div>
          ) : (
            <ListGroup className="mt-3">
              {todos.map((t) => (
                <ListGroup.Item
                  key={t.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center gap-2">
                    <Form.Check
                      type="checkbox"
                      checked={t.done}
                      onChange={() => toggleDone(t.id)}
                    />
                    <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
                      {t.text}
                    </span>
                  </div>

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
