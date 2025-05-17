// import React, { useState } from 'react'

// function Cart() {

//     const [cart, setCart] = useState([]);
//     const items = [
//         {
//             img: 'https://t3.ftcdn.net/jpg/04/19/13/34/240_F_419133411_3xqpBMGkMKBZMDCvb9Fv5UNiStX7bTqV.jpg',
//             id: 1,
//             name: "Dosa",
//             price: "₹" + 50,
//             ratting: "✪" + 4.3
//         }, {
//             img: 'data:image/jpeg;base64,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',
//             id: 2,
//             name: "Idhy",
//             price: "₹" + 12,
//             ratting: "✪" + 4.3,

//         }, {
//             img: 'data:image/jpeg;base64,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',
//             id: 3,
//             name: "CHAPPATHI ",
//             price: "₹" + 35,
//             ratting: "✪" + 4.8,
//         }]

//     const addToCart = (item) => {
//         const exisTingItem = cart.filter((cartItem) => cartItem.id === item.id)

//         if (exisTingItem) {
//             const exisTingItemUpdate = cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
//             setCart(exisTingItemUpdate)
//         }
//         else {
//             setCart([...cart, { ...item, quantity: 1 }])
//         }
//     }
//     const removeFromCart = (id) => {
//         setCart(cart.filter((item) => item.id !== id))
//     }
//     const updateQuantity = (id, amount) => {
//         const updatedCart = cart.map(item => {
//             if (item.id === id) {
//                 return { ...item, quantity: item.quantity + amount }
//             }
//             return item;
//         })
//         const filteredCart = updatedCart.fliter(item => {
//             item.quantity > 0
//         })
//         setCart(filteredCart);
//     }
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);


//     return (
//         <>
//             <section id='food'>
//                 {items.map((item) => (
//                     <div className='row'>
//                         <div className="col-md-6 col-lg-4 col-12 ">
//                             <img src={item.img} height={100} width={100} />
//                             <p>name :{item.name}</p>

//                             <p>name :{item.price}</p>
//                             <button className=' btn btn-outline-dark' onClick={() => addToCart(item)}>Add to Cart</button>
//                         </div>
//                     </div>

//                 ))}
//                 <h1>Cart </h1>
//                 {cart.length === 0 && <p> no items in the cart</p>}
//                 div
//                 <ul>
//                     {cart.map((item) => (

//                         <li key={item.id}>
//                             <img src={item.img} className='img-fluid' height={100} width={100} />
//                             <span>{item.name} - Quantity:{item.quantity}</span>
//                             <div>
//                                 <button className='btn btn-outline-dark' onClick={() => updateQuantity(item.id, 1)}>+</button>
//                                 <button className='btn btn-outline-dark' onClick={() => updateQuantity(item.id, -1)}>-</button>
//                                 <button className='btn btn-outline-dark' onClick={() => removeFromCart(item.id)}>remove</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//                 <p>total items: <span>{totalItems}</span></p>
//                 <p>total amout: <span>{totalPrice}</span></p>
//             </section>

//         </>
//     )
// }

// export default Cart


// import React, { useState } from 'react';
// import { Button, Offcanvas } from 'react-bootstrap';

// function CartOffCanvas() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Show Cart
//       </Button>

//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Cart</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           {/* Your cart content goes here */}
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default CartOffCanvas;

import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
const OffCanvasCart = ({ items }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show Cart
      </Button>

      <Offcanvas  show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ListGroup>
                {items.map((item, index) => (
                  <ListGroup.Item key={index}>
                    {item.name} - ₹{item.price} x {item.quantity}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="mt-3">
                <strong>Total Price: ₹{totalPrice}</strong>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasCart;









// import React, { useState } from 'react';

// const Cart = () => {
//     const [cart, setCart] = useState([
//         {
//             img: 'https://t3.ftcdn.net/jpg/04/19/13/34/240_F_419133411_3xqpBMGkMKBZMDCvb9Fv5UNiStX7bTqV.jpg',
//             id: 1,
//             name: "Dosa",
//             price: "₹50",
//             rating: "✪ 4.3"
//         },
//         {
//             img: 'https://example.com/another-image.jpg',
//             id: 2,
//             name: "Samosa",
//             price: "₹30",
//             rating: "✪ 4.5"
//         }
//     ]);

//     return (
//         <div>
//             <h2>Your Cart</h2>
//             <div>
//                 {cart.map(item => (
//                     <div key={item.id} style={{ display: 'flex', marginBottom: '20px' }}>
//                         <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
//                         <div>
//                             <h3>{item.name}</h3>
//                             <p>{item.price}</p>
//                             <p>{item.rating}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Cart;
