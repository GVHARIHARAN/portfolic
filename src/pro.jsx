import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/pro.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// import { Footer } from "flowbite-react";


import { Container, Row, Col, Card, Button, Offcanvas, ListGroup, } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useRef, useState } from 'react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon from '../src/icon.png';
import wrapp from '../src/wrapper.jpg';
import wrapp1 from '../src/wrapper1.jpg';
import wrapp2 from '../src/wrapper2.jpg';
import wrapp3 from '../src/wrapper3.jpg';
import wrapp4 from '../src/wrapper4.jpg';
import wrapp5 from '../src/wrapper5.jpg';
import Spring from '../src/springimg.jpg';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';


const BasicExample = () => {



  const navigate = useNavigate()
  const but = () => {
    navigate('/pro1')
  }
  const watch = [{

    id: 1,
    img: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5dea78ac/images/Titan/Catalog/1639SM02_1.jpg?sw=360&sh=360',
    name: 'Olivia Burton',
    price: 350
  },
  {
    id: 2,
    img: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e380d61/images/Titan/Catalog/2725WM01_1.jpg?sw=360&sh=360',
    name: 'Olivia Burton,Timex',
    price: 200

  }, {
    id: 3,
    img: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw727a1cbe/images/Titan/Catalog/1802SL13_1.jpg?sw=360&sh=360',
    name: 'Cocomi',
    price: 250
  }

  ];
  // const watch1 = [{
  //   id: 4,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/15540-364_2000x-300x300.jpg',
  //   name: 'Timberland',
  //   model: 'Classic 11935-222 Black 35 mm',
  //   price: 222
  // },
  // {
  //   id: 5,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/1-1-300x300.jpg',
  //   name: 'Cocomi',
  //   model: 'Cocomi Rainbow Rose Gold',
  //   price: 225
  // }, {
  //   id: 6,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/11-300x300.jpg',
  //   name: 'Olivia burton',
  //   model: 'Modern Wood No.0',
  //   price: 350
  // }, {
  //   id: 7,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/VOID-Watches-V03D-GO-RB-WH-2000x2000-Classic_1600x-300x300.jpg',
  //   name: 'Nixon',
  //   model: 'Nixon Time Teller Blue',
  //   price: 888
  // }, {
  //   id: 8,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/p17-300x300.jpg',
  //   name: 'Nixon',
  //   model: 'Nixon Time Teller Gold Limit',
  //   price: 79
  // }, {
  //   id: 9,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/VOID-Watches-PKG01-SI-MR-WH-2000x2000-Classic_1600x-300x300.jpg',
  //   name: 'Nixon',
  //   model: 'Nixon Time Teller Silver',
  //   price: 999
  // }, {
  //   id: 10,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/13-300x300.jpg',
  //   name: 'Olivia burton',
  //   model: 'Olivia Burton Abstract Florals',
  //   price: 225
  // }, {
  //   id: 11,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/15-300x300.jpg',
  //   name: 'Nixon',
  //   model: 'Terrazzo Florals Grey (Ob16Tz01)',
  //   price: 600
  // }, {
  //   id: 12,
  //   img: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/12-300x300.jpg',
  //   name: 'Olivia burton, Timex',
  //   model: 'Terrazzo Florals Grey (Ob16Tz01)',
  //   price: 550
  // }
  // ];

  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCart = (product) => {
    // (" Please check the cart"); // alert message
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementQuantity = (productId) => {
    setCart(
      cart.map((item) => item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
      )
    );
  };
  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));

  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  let imgg = document.getElementsByClassName('imgg');
  let cartb = document.getElementsByClassName('cartb');


  // var copy = document.querySelector('.silde').cloneNode(true);
  // document.querySelector('.wrapper').appendChild(copy);




  for (let i = 0; i < imgg.length; i++) {
    imgg[i].addEventListener('mouseover', () => {
      cartb[i].style.display = 'block';
    })
    imgg[i].addEventListener('mouseout', () => {
      cartb[i].style.display = 'none';
      cartb[i].style.transition = '0.5s';


    })
  }
  // let insta = document.getElementsByClassName('insta');
  // let sildee = document.getElementsByClassName('sildee');



  // for (let j = 0; j < sildee.length; j++) {
  //   sildee[j].addEventListener('mouseover', () => {
  //     insta[j].style.display = 'block';
  //   })
  //   sildee[j].addEventListener('mouseout', () => {
  //     insta[j].style.display = 'none';
  //     insta[j].style.transition = '0.2s';


  //   })
  // }

  return (
    <>
    
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar expand="lg" className="bg-body-tertiary" id="pnavbar">
        <Container>
          <Navbar.Brand href="#home" style={{ color: '#013220', margin: '10px' }} className=''>
            PRODUCT 24
            <a href="" style={{ color: '#013220' }} className='fw-bolder'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-hourglass mb-1" viewBox="0 0 16 16">
                <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z" />
              </svg>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto col d-flex justify-content-end" style={{ color: '#013220' }}>
              <Nav.Link href="#back1" className='navberlink'>HOME</Nav.Link>
              {/* <Nav.Link href="#link" className='navberlink'>LINK</Nav.Link> */}
              <Nav.Link href="#section" className='navberlink'>ABOUT</Nav.Link>
              <Nav.Link href="" className='navberlink' onClick={() => handleShow()} >CART</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* home */}
      <Swiper cssMode={true}

        // pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,        // Time between each slide (in milliseconds)
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}

        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide id='back1'> <div className="slide1 img-fluid">
          <h1 className='text-dark h11 '>Enchanted Garden <br />Unisex Watches</h1>
          <button className=' b btn btn-outline-dark' onClick={() => but()}>pre-order</button>
          {/* <img src={First} alt=""  className='img-fluid' height={400} width={1000} /> */}
        </div></SwiperSlide>
        <SwiperSlide id='back2' ><div className="slide2 img-fluid">
          <h1 className='text-dark h11 '>Enchanted Garden <br />Unisex Watches</h1>
          <button className='b btn btn-outline-dark ' onClick={() => but()}>pre-order</button>
          {/* <img src={Second} alt=""  className='img-fluid'/> */}
        </div></SwiperSlide>
        <SwiperSlide id='back3' ><div className="slide3 img-fluid">
          <h1 className='text-light h11 '>Enchanted Garden <br />Unisex Watches</h1>
          <button className='b btn btn-outline-light ' onClick={() => but()}>pre-order</button>
          {/* <img src={Second} alt="" className='img-fluid' /> */}
        </div></SwiperSlide>


      </Swiper>

      <div className="container-fluid mt-5" >
        <div className="row d-flex justify-content-evenly" >
          <div className="col dr col-12 col-md-6 col-lg-4 img-fluid m-3" onClick={() => but()}>
            <h1 className='men1 text-center'>Dress Watch</h1>
          </div>
          <div className="col me col-12 col-md-6 col-lg-4 img-fluid m-3  " onClick={() => but()}>
            <h1 className="men1 text-center"> Men's watch</h1>
          </div>
          <div className="col wom col-12 col-md-6 col-lg-4 img-fluid m-3" onClick={() => but()}>
            <h1><div className="men1 text-center"> Women's watch</div></h1>
          </div>
        </div >
      </div >

      <div className="container  mt-5">
        <div className="row " >
          <div className="col">
            <h1 className='text-center tr1'>Trending Now</h1>


            <p className='text-center mt-3 pr1'>We are happy to introduce the new Lawson Collection. These are three quartz models <br />
              designed with simplicity and elegance kept in mind.</p>

          </div>
        </div>

      </div>
      {/* product */}

      <Container className="mt-5">
        <Row>
          {watch.map((product) => (
            <Col key={product.id} xs={12} lg={4} md={6}>
              <Card className="boxx" data-aos="flip-right" data-aos-offset="200" data-aos-delay={50 * product.id} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <Card.Img variant="top" src={product.img} className="img-fluid" style={{ height: 300, width: "auto", objectFit: 'cover' }} alt={product.name} />
                <Card.Body className='text-center  imgg'>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>$ {product.price}</Card.Text>
                  {/* <Card.Text>✪ {product.ratting}</Card.Text> */}
                  <span className='d-flex justify-content-center'>
                    <button className='cartb btn btn-outline-dark' onClick={() => addToCart(product)} >Add to Cart</button>
                  </span>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {cart.length === 0 ? (
              <p style={{ fontWeight: 'bolder', fontSize: '1.2rem', color: '#777' }}>Your cart is empty.</p>
            ) : (
              <ListGroup>
                {cart.map((item, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <Card style={{ height: '100%' }}>
                      <Card.Body className="d-flex justify-content-between align-items-center">
                        <div className='container-fluid'>
                          <div className='row'>
                            <img src={item.img} alt="" height={200} width={150} /><br />
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>${item.price} X {item.quantity} = {item.price * item.quantity}</Card.Text>
                          </div><br />
                          <div className='row'>
                            <div className='d-flex justify-content-around'>
                              <Button variant="outline-dark" size="sm" onClick={() => incrementQuantity(item.id)} className="btn col-2">+</Button>
                              <Button variant="outline-dark" size="sm" onClick={() => decrementQuantity(item.id)} className='btn col-2'>-</Button>
                              <Button variant="outline-dark" size="sm" onClick={() => removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                              </svg></Button>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
            <div className="mt-3">
              <h5>Total: ${calculateTotal()}</h5>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      {/* shop */}
      <div className="container-fluid mt-5 ">
        <div className="row d-flex p-3" >
          <div className="col-12 col-md-6 col-lg-6 justify-content-between" >
            <img className=' shim img-fluid' src={Spring} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-4 shop2" >
            <h2 id='sh2' className='mt-lg-5'>Spring Winter 2025</h2>
            <p id='shp' className='mt-lg-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Quis ipsum suspendisse ultrices gravida. Risus commodo  viverra maecenas accumsan lacus vel facilisis.</p>
            <button className='btn mt-lg-5 shb btn-outline-dark' onClick={() => but()} >shop the look</button>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5 d-flex  shopnew" >
        <div className="row d-flex justify-content-center " >



          <p className='sncp text-center mt-4'>10% Off & The Best Indie Art Ever!</p>
          <h1 className='snch1 text-center mt-3'> Be The First To <br />
            Get Limited Editions</h1>
          <span className=' d-flex justify-content-center'> <button className=' sncb btn btn-outline-light' onClick={() => but()} >SHOP NEW COLLECTION</button></span>



        </div>
      </div>

      {/* Feature Product */}
      <div className="container mt-5">
        <div className="row" >
          <div className="col">
            <h2 className='text-center' >Feature Product</h2>
            <p className='text-center m-3' >
              Hurry up to own our best products on the occasion of discounts to <br />
              give to friends and relatives
            </p>
          </div>
        </div>
      </div>

      {/* insta */}
      <div className="container mt-5">
        <div className="row" >
          <div className='col'>
            <a href="https://www.instagram.com/imhariharasudhan?igsh=bHRqaHIybzRhd3ls" className=" text-decoration-none text-dark"><h1 className="text-center">@PROUDUCT 24</h1></a>
            <p className="text-center">Follow us on Instagram</p>
          </div>
        </div>

      </div>

      {/* scroll img */}
      <div className="wrapper"   >
        <div className="silde"  >


          <img src={wrapp} alt="" />
          <img src={wrapp1} alt="" />
          <img src={wrapp2} alt="" />
          <img src={wrapp3} alt="" />
          <img src={wrapp4} alt="" />
          <img src={wrapp5} alt="" />




        </div>
        <div className="silde">

          <img src={wrapp} alt="" />
          <img src={wrapp1} alt="" />
          <img src={wrapp2} alt="" />
          <img src={wrapp3} alt="" />
          <img src={wrapp4} alt="" />
          <img src={wrapp5} alt="" />

        </div>


      </div>

      {/* contact us */}

      <div className="footer"  >
        <div className="section"  >
          <h4>PRODUCT 24<a href="" style={{ color: '#013220' }} className='fw-bolder '>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-hourglass" viewBox="0 0 16 16">
              <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z" />
            </svg>
          </a></h4>
          <p>+80 123 567 89</p>
          <p>283 N. Glenwood Street, Levittown, NY</p>
          <a href="" className='text-dark'>product24@gmail.com</a>
          <br />
          <span className='d-flex '   >
            <a href="" className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg></a>
            <a href=" " className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
            </svg></a>
            <a href="" className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg></a>
            <a href="" className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg></a>
          </span>

        </div>
        <div className="section">
          <h5>Help</h5>
          <a className='text-dark'  ><p onClick={() => handleShow()}>Cart</p></a>
          <a className='text-dark'><p>Reviews</p></a>
          <a href="" className='text-dark'><p>About Us</p></a>
        </div>
        <div className="section" id='section'>
          <h5>Services</h5>
          <a href="" className='text-dark'> <p onClick={() => but()}>Shop</p></a>
          <a href="" className='text-dark' > <p onClick={() => but()}>New Desing1</p></a>
          <a href="" className='text-dark' > <p onClick={() => but()} >New Desing2</p></a>
          <a href="" className='text-dark'> <p onClick={() => but()} >New Design3</p></a>
        </div>

      </div>

      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6 "><p className='fss'>© 2025 Product 24.All Rights Reserved</p></div>
          <div className="col-12 col-md-6 d-flex justify-content-sm-start  amzn"></div>
        </div>
      </div>






    </>
  );
}

export default BasicExample;