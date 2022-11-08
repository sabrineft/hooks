import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function NewFilm({ movies, setmovieliste }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: 0,
  });

  const handleAdd = () => setmovieliste([...movies, newmovie]);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add New Film !
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Film !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Film Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your film name"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Film Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your film image"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, posterurl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Film Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your film description"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Film Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your fim rating"
                onChange={(e) =>
                  setnewmovie({ ...newmovie, rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewFilm;
