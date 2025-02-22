import React from 'react'
import { useState } from 'react'

function Item({ name, category }) {
  const [className, setClassName] = useState(false)

  function handleItem() {
    setClassName((className) => !className)
  }
  return (
    <li className={className ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button className={className ? 'remove' : 'add'} onClick={handleItem}>
        {className ? 'Remove From' : 'Add to'} Cart
      </button>
    </li>
  )
}

export default Item
