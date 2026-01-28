import { useState } from "react";
import { Alert, Button, Card, Form, Stack } from "react-bootstrap";
import {ListOfUsers} from "../data/ListOfUsers";

export default function LoginForm({ onLogin }) {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((p) => ({ ...p, [name]: value }));
    setMsg(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const u = login.username.trim();
    const p = login.password.trim();

    if (!u || !p) {
      setMsg({ type: "danger", text: "Vui lòng nhập đủ username và password." });
      return;
    }

    const found = ListOfUsers.find((x) => x.userName === u && x.password === p);
    if (!found) {
      setMsg({ type: "danger", text: "Sai tài khoản hoặc mật khẩu!" });
      return;
    }
    if (found.status === "Locked") {
      setMsg({ type: "warning", text: "Tài khoản đang bị khóa!" });
      return;
    }

    onLogin?.({ username: found.userName, role: found.role || "user" });
  };

  return (
    <Card className="shadow-lg border-0 rounded-4">
      <Card.Body className="p-4 p-md-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <div className="text-secondary">Welcome back</div>
            <h3 className="fw-bold m-0">Login</h3>
          </div>
        </div>

        {msg && <Alert variant={msg.type}>{msg.text}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Username</Form.Label>
            <Form.Control
              size="lg"
              name="username"
              value={login.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              size="lg"
              name="password"
              type="password"
              value={login.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="rounded-3"
            />
          </Form.Group>

          <Stack direction="horizontal" gap={2}>
            <Button type="submit" size="lg" className="px-4">
              Login
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline-secondary"
              className="px-4"
              onClick={() => setLogin({ username: "", password: "" })}
            >
              Cancel
            </Button>
          </Stack>

          <div className="mt-3 text-secondary">
            Đã có tài khoản? <i><b>Register</b></i>.
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
