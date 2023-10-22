import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Tags = ({bgColor, textoB}) => {
  return (
    <Badge className='p-2 w-100' bg={bgColor}>{textoB}</Badge>
  )
}

export default Tags
