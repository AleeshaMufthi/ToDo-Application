import React, { useState } from 'react'
import bagsData from './ProductData'
import {Card, Button} from 'react-bootstrap'
import './Product.css'


const Products = () => {
  const [items, setItems] = useState(bagsData)

  const decQty = (id) => {
       const newItem = items.map((item) =>
        item.id == id && item.qty > 1? {...item, qty: item.qty-1} : item
      )
      setItems(newItem)
  }
  const incQty = (id) => {
    const newItem = items.map((item) =>
     item.id == id? {...item, qty: item.qty+1} : item
   )
   setItems(newItem)
}
  return (
    <div>
      <h1>G U C C I</h1>

      <div className='d-flex justify-content-around flex-wrap'>

      {items.map((item) => (

<Card key={item.id} className='shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '13rem', margin: '0 11px' }}>
<Card.Img  style={{ height: '15rem' }} className='p-2' variant="top" src= {item.image} />
<Card.Body className='d-flex flex-column justify-content-between'>

  <div>
  <Card.Title>{item.desc}</Card.Title>
  <h5>{item.price}</h5>
  </div>
  <div className='quantity-container mt-2'>
 
      <Button 
      onClick={()=>decQty(item.id)}
      className='quantity-btn' size="sm" variant="outline-dark">-</Button>
      {item.qty}
      <Button 
      onClick={()=>incQty(item.id)}
      className='m-1 quantity-btn'size="sm" variant="outline-dark">+</Button>
  </div>
  </Card.Body>

    <div className='card-footer mt-2'>
     <Button variant="dark">Add to Cart</Button>
    </div>
</Card>



      )) }
     
     </div>
    </div>
  )
}

export default Products
