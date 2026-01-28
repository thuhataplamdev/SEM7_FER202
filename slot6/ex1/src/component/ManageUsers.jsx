import { useState } from "react";
import { Badge, Button, Card, Table } from "react-bootstrap";
import { ListOfUsers } from "../data/ListOfUsers";

export default function ManageUsers() {
  const [users, setUsers] = useState(ListOfUsers);

  const userOnly = users.filter((u) => u.role === "user");

  const toggleLock = (id) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== id) return u;
        if (u.role !== "user") return u;

        return { ...u, status: u.status === "Locked" ? "Active" : "Locked" };
      })
    );
  };

  const editUser = (id) => {
    const current = users.find((u) => u.id === id);
    if (!current) return;

    if (current.role !== "user") return;

    const newUserName = window.prompt("Edit UserName:", current.userName);
    if (newUserName === null) return;

    const newPassword = window.prompt("Edit Password:", current.password);
    if (newPassword === null) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, userName: newUserName, password: newPassword } : u
      )
    );
  };

  return (
    <Card className="p-3" style={{ maxWidth: 900 }}>
      <h4 className="mb-3">Manage Users</h4>

      <Table bordered hover responsive className="align-middle">
        <thead>
          <tr>
            <th style={{ width: 70 }}>ID</th>
            <th style={{ width: 100 }}>Avatar</th>
            <th>UserName</th>
            <th style={{ width: 120 }}>Status</th>
            <th>Password</th>
            <th style={{ width: 170 }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {userOnly.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>

              <td>
                <img
                  src={u.avatar || "/images/u1.jpg"}
                  onError={(e) => (e.currentTarget.src = "/images/u1.jpg")}
                  alt={u.userName}
                  width={48}
                  height={48}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              </td>

              <td>{u.userName}</td>

              <td>
                <Badge bg={u.status === "Locked" ? "danger" : "success"}>
                  {u.status}
                </Badge>
              </td>

              <td style={{ fontFamily: "monospace" }}>{u.password}</td>

              <td>
                <div className="d-flex gap-2">
                  <Button
                    size="sm"
                    variant="outline-primary"
                    onClick={() => editUser(u.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant={u.status === "Locked" ? "success" : "outline-danger"}
                    onClick={() => toggleLock(u.id)}
                  >
                    {u.status === "Locked" ? "Unlock" : "Lock"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}