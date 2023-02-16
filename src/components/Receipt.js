import React from 'react'

function Receipt({ item }) {
  const order = item.order
  return (
    <div className='Receipt'>
      <h1>{item.person}</h1>

      <div className='order'>
        <h3><span className="title"> Main: </span> {order.main}</h3>
        <h3><span className="title">Protein: </span>{order.protein} </h3>
        <h3><span className="title">Rice: </span>{order.rice}</h3>
        <h3><span className="title">Sauce: </span>{order.sauce}</h3>
        <h3><span className="title">Toppings: </span>
          {order.toppings.map(top => top + '; ')}
        </h3>
        <h3><span className="title">Drink: </span>{order.drink} </h3>
        <h3><span className="title">Cost: </span>{order.cost}</h3>
      </div>

    </div>
  )
}

export default Receipt
