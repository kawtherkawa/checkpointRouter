import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

 const AddMovie = ({add}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("")
  const [rate, setRate] = useState("")
  const [description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")

  const handleTitle=(e) => {//donne l'élément qui a déclenché l'événement.
    setTitle(e.target.value)//récupère la valeur de cet élément (un champ de saisie
  }
  const handleRate=(e) => {
    setRate(e.target.value)
  }
  const handleDescription=(e) => {
    setDescription(e.target.value)
  }
  const handlePosterUrl=(e) => {
    setPosterUrl(e.target.value)
  }

const handleAdd=()=>{
  let newmovie={title,description,rate,posterUrl}
  add(newmovie)
}
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your title" onChange={(e)=>handleTitle(e)} value={title}/>
          <Form.Label>rate</Form.Label>
          <Form.Control type="number" placeholder="Enter your rate" onChange={(e)=>handleRate(e)} value={rate}/>
          <Form.Label>description</Form.Label>
          <Form.Control type="text" placeholder="Enter your description" onChange={(e)=>handleDescription(e)} value={description} />
          <Form.Label>posterUrl</Form.Label>
          <Form.Control type="url" placeholder="Enter your posterUrl" onChange={(e)=>handlePosterUrl(e)} value={posterUrl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie