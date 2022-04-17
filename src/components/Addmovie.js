import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Addmovie({ Addmovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterurl, setposterurl] = useState("");
  const [rate, setrate] = useState(0);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add your movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label>title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <label>description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>posterUrl</label>
        <input
          type="text"
          value={posterurl}
          onChange={(e) => setposterurl(e.target.value)}
        />
        <label>rating</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setrate(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              Addmovie({
                id: Math.randomtitle(),
                description,
                posterurl,
                rate,
              });
              handleClose()
            }}
          > 
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie;
