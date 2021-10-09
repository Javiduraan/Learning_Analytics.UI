import React, { useState }  from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./Lib/ContextLib";
import {useHistory} from "react-router-dom";
import {onError} from "./Lib/errorLib"

function App() {
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const [isAuthenticating, setIsAuthenticating] = useState(true);

  function handleLogout() {
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {isAuthenticated ? (
            <>
            <NavDropdown title="Models" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Simple Regresion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Multiple Regresion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clustering</NavDropdown.Item>
            </NavDropdown>
              <LinkContainer to="">
                <Nav.Link>Help Resources</Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link>Student Advance</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
            ) : (
              <>
                <LinkContainer to="/signup">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;