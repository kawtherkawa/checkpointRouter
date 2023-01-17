import React from 'react'
import {  Col, Form } from 'react-bootstrap'

import Row from 'react-bootstrap/Row';
const Filtermovies = ({inputSearch,setInputsearch}) => {

 //const handleInputSearch=(e) => {//donne l'élément qui a déclenché l'événement.
    //setInputSearch(e.target.value)//récupère la valeur de cet élément (un champ de saisie
  //}
  return (
    <div>
       <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
          
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Enter your movie title " onChange={(e)=>setInputsearch(e.target.value)} value={inputSearch}/>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default Filtermovies