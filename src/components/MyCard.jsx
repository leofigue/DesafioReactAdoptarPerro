import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags from './Tags.jsx'

const MyCard = ({imagen, nombre, texto,bgColor, textoB}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen}  />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
       <Tags bgColor={bgColor} textoB={textoB}></Tags>
      </Card.Body>
    </Card>
    
  )
}

export default MyCard
