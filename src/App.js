import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import ReactStars from "react-rating-stars-component";
import img from "./img.jpg"
import { useState } from "react";

function App() {
  const [text, settext] = useState("")
  const [rate, setrate] = useState(0)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <img src={img} style={{width:"50px"}}/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              onChange={(newRating)=>setrate(newRating)}
            />
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>settext(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MovieList text={text} rate={rate}/>
    </div>
    
  );
}

export default App;
