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
  console.log(isAuthenticated);
  
  function handleLogout() {
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
          <img width="50px"
                        className="d-block w-20px"
                        src="/images/logo_tec_barra.png"
                        alt=""
          />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {isAuthenticated ? (
            <>
           
            <NavDropdown title="Modelos" id="basic-nav-dropdown">              
            <NavDropdown.Item>
                <LinkContainer to="/basicestadistic">
                  <span>Estadisticas Basicas</span> 
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/simplereg">
                  <span>Regresión Simple</span> 
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/multiplereg">
                  <span>Regresión Múltiple</span>
                </LinkContainer>
                </NavDropdown.Item>
              <NavDropdown.Item>
              <LinkContainer to="/clustering">
                  <span>Clustering (Agrupamientos)</span>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <LinkContainer to="/redesneuro">
                  <span>Redes Neuronales (Para Predicción)</span>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
              <LinkContainer to="/help">
                <Nav.Link>Recursos de ayuda</Nav.Link>
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