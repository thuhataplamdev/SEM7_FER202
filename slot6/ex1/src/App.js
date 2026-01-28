import { useMemo, useState } from "react";
import { Button, Container, Navbar, Badge } from "react-bootstrap";
import "./App.css";

import DemoForm from "./component/DemoForm";
import LoginForm from "./component/LoginForm";
import ManageUsers from "./component/ManageUsers";

function App() {
  const [page, setPage] = useState("login");
  const [auth, setAuth] = useState(null);

  const isAdmin = useMemo(() => auth?.role === "admin", [auth]);

  const handleLogin = (payload) => {
    setAuth(payload);
    setPage("home");
  };

  const handleLogout = () => {
    setAuth(null);
    setPage("login");
  };

  return (
    <>
      <Navbar className="bg-light border-bottom border-secondary-subtle">
        <Container className="py-2">
          <Navbar.Brand className="fw-bold fs-4">AIR BOOK</Navbar.Brand>

          <div className="d-flex align-items-center gap-2">
            {auth ? (
              <>
                <span className="text-secondary">
                  Xin chào <b>{auth.username}</b>
                </span>
                <Badge bg={isAdmin ? "danger" : "primary"}>
                  {isAdmin ? "ADMIN" : "USER"}
                </Badge>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={handleLogout}
                  className="px-3"
                >
                  Logout
                </Button>
              </>
            ) : (
              <span className="text-secondary">Chưa đăng nhập</span>
            )}
          </div>
        </Container>
      </Navbar>

      <Container className="py-5">
        {page === "login" && (
          <div className="d-flex justify-content-center">
            <div className="w-100" style={{ maxWidth: 520 }}>
              <LoginForm onLogin={handleLogin} />
            </div>
          </div>
        )}

        {page === "home" && (
          <div className="d-flex justify-content-center">
            <div className="w-100" style={{ maxWidth: 980 }}>
              {isAdmin ? <ManageUsers /> : <DemoForm />}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default App;
