import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="app">
      <Navbar expand="lg" className=" bg-black">
        <Container fluid>
          <Navbar.Brand href="#" className="text-white">
            MY APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-4 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-white">
                Acceuil
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Link
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Recherche"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Rechercher</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Card className=" mt-5 d-flex flex-row ">
          <Card className="m-auto" border="primary" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="m-auto" border="success" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="m-auto" border="danger" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Card>
      </div>
    </div>
  );
}
export default App;
