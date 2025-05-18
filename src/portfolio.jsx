import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
  ListGroup,
} from "react-bootstrap";
import "./portfolio.css";
import G from "../src/g.png";
import Hr from "../src/Hotelrpic.jpg";
import Pro from "../src/pro24pic.jpg";
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { PiMapPinSimpleArea } from "react-icons/pi";
import Preloader from '../src/preloader';
import Resume from'../src/hariharan.pdf';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; 

const portfolio = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (e.g., fetching content or images)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert("Thank you! We'll get in touch soon.");
    setFormData({ name: '', email: '', phone: '', message: '' });

  };

  const show = () => {
    const aboutElements = document.getElementsByClassName('about');
    for (let element of aboutElements) {
      element.style.display = 'block';
      alert('scroll my portfolio')
    }
  };

  const show1 = () => {
    const interestElements = document.getElementsByClassName('interest');
    for (let element of interestElements) {
      element.style.display = 'block';

    }
  };
  const show2 = () => {
    const contactElements = document.getElementsByClassName('contactelements');
    for (let element of contactElements) {
      element.style.display = 'block';

    }
  };
  const show3 = () => {
    const projectElements = document.getElementsByClassName('projeect');
    for (let element of projectElements) {
      element.style.display = 'block';

    }
  };


  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
      {/* bar */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar expand="lg" className="bg-body-light sticky-top" id="navb">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src={G} height={60} width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto col d-flex justify-content-end">
              <Nav.Link href="#homme" className="navberlink"  >
                Home
              </Nav.Link>
              <Nav.Link href="#abouut" className="navberlink" >
                About
              </Nav.Link>
              <Nav.Link href="#skillseet" className="navberlink" >
                Skillset
              </Nav.Link>

              <Nav.Link href="#projecct" className="navberlink" >
                Project
              </Nav.Link>
              <Nav.Link href="#contacct" className="navberlink" >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid welcom1" id="homme" style={{ color: "#82a448" }}>
        <div className="row welcome d-flex justify-content-evenly">
          <div className="col-12 col-lg-4 col-md-4  mt-sm-3 ">
            <img src="" className="bgimage img-fluid" alt="" />
          </div>
          <div className=" col-12 col-lg-8 col-md-8  wrapper">
            {/* <h2 className=''>Welcome to my portfolio</h2> */}
            <h4 className="welh2">Hi I'm Hariharan G V</h4>

            <p className="mt-lg-3 welp">
              I'm a front-end developer focused on building
              responive,accessible,and <br /> interactive user interfaces using
              modern tools like HTML,CSS,JavaScript and React.
            </p>
            <a href={Resume} download='Resume'className="download-btn seecv">
              Download CV{" "}
              <FaFileDownload style={{ backgroundColor: "white", color: ' #82a448', padding: '1px' }} size={18} />{" "}
            </a>
          </div>

        </div>
      </div>

      {/* about */}

      <div className="container-fluid mt-5  about" id='abouut' style={{ color: "#82a448" }}>
        <div className="row d-flex justify-content-around">
          <h1 className="text-center ">About me</h1>

          <div
            className="col-12 col-md-6  col-lg-6 mt-3 skillcol"
            style={{ color: "#82a448" }}
          >
            <h2 className="mt-3 text-center"> Front-end Developer</h2>
            <p className="mt-3 text-center">
              I am an enthusiastic and self-motivated Front-End Developer with a strong foundation in web technologies such as HTML, CSS, JavaScript, and responsive design principles. I have a keen interest in building dynamic and user-friendly websites, with a focus on performance, clean code, and cross-browser compatibility.

              As a recent graduate, I’ve worked on personal and academic projects like Product 24, a watch shopping website, where I implemented responsive layouts and interactive UI components. I am continuously learning and currently exploring modern libraries and frameworks like React and Bootstrap to enhance my development skills.

             


            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-3 skillcol"
            style={{ color: "#82a448", }}>
            <h2 className="mt-3 text-center">Education</h2>
            <div className="row">
              <div className="col-12 educt">
                <h3>Bachelor of Science in Computer Science</h3>
                <h4>< VscCode /> Sourashtra Collage,Madurai</h4>
                <p>< VscCode /> 2021 - 2024</p>
                <p>< VscCode />Acedamic CGPA : 5.5</p>
              </div>
              <div className="col-12  educt">
              <h3>Higher Sec School</h3>
                <h4>< VscCode /> Nadar Higher Sec School</h4>
                <p>< VscCode /> 2020-2021</p>
                <p>< VscCode /> Acedamic Percentage: 74.5%</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* skillset */}

      <div className="container-fluid mt-5  interest " id='skillseet'>
        <div className="row justify-content-around ">
          <h1 className="text-center mb-4">Skillset</h1>

          {/* Technical Skills */}
          <div className="col-12 col-md-6 mb-4 skills">
            <h3>Technical Skills</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <FaHtml5 size={35} style={{ color: "darkorange" }} />
                  <p>90%</p>
                </div>
                <div className="bar"><span className="html"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <FaCss3 size={35} style={{ color: "#1e90ff" }} />
                  <p>80%</p>
                </div>
                <div className="bar"><span className="css"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <SiJavascript size={35} style={{ color: "yellow" }} />
                  <p>95%</p>
                </div>
                <div className="bar"><span className="javascript"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <FaBootstrap size={35} style={{ color: "purple" }} />
                  <p>85%</p>
                </div>
                <div className="bar"><span className="bootstrap"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <RiReactjsFill size={35} style={{ color: "#82caff" }} />
                  <p>75%</p>
                </div>
                <div className="bar"><span className="react"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <FaGithub size={35} style={{ color: "black" }} />
                  <p>100%</p>
                </div>
                <div className="bar"><span className="githubb"></span></div>
              </li>
            </ul>
          </div>

          {/* Professional Skills */}
          <div className="col-12 col-md-6 skills">
            <h3>Professional Skills</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <h4>Leadership</h4>
                  <p>90%</p>
                </div>
                <div className="bar"><span className="leadership"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <h4>Time Management</h4>
                  <p>80%</p>
                </div>
                <div className="bar"><span className="timemanagement"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <h4>Communication</h4>
                  <p>95%</p>
                </div>
                <div className="bar"><span className="communication"></span></div>
              </li>
              <li className="mb-3">
                <div className="d-flex justify-content-between">
                  <h4>Creativity</h4>
                  <p>85%</p>
                </div>
                <div className="bar"><span className="creativity"></span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* project */}

      <div className="container-fluid mt-5 projeect" id='projecct' style={{ color: '#82a448' }}>
        <h1 className="text-center">Projects</h1>
        <div className="row d-flex justify-content-around mt-5">
          <div className=" col col-12 col-md-6 col-lg-6  card" >
            <span className="image-box">
              <img src={Pro} alt="Card Image" />
            </span>
            <span className="content">
              <p>"Product 24" is a watch shopping website.In this website build using Html,Css,Boostrap framework Javascript,React js libraties etc </p>
              <a href='https://product-24.vercel.app/' className="btn btn-outline-light">project details</a>
            </span>

          </div>
          <div className="col card1 col-12 col-md-6 col-lg-6" >
            <span className="image-box1">
              <img src={Hr} alt="Card Image" />
            </span>
            <span className="content1">
              <p>"Hotel R" is a watch shopping website.In this website build using Html,Css,Boostrap framework Javascript,React js libraties etc </p>
              <a href='https://hotel-r-hxrihxrxns-projects.vercel.app/' className="btn btn-outline-light">project details</a>
            </span>
          </div>
        </div>
      </div>

      {/* contact */}

      <div className="container-fluid mt-5 contactelements " id='contacct' style={{ color: "#82a448" }}>
        <div className="row contactt d-flex justify-content-around justify-content-md-center">

          {/* Contact Form */}
          <div className="col-12 col-md-6 col-lg-4" >
            <h1 style={{ color: '#82a448' }}>Get in Touch</h1>
            <form onSubmit={handleSubmit} className="contact-form">

              <input
                type="text"
                id="name"
                name="name"
                // className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                // className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                // className="form-control"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                pattern="[0-9]{10}"
                required
              />
              <textarea
                id="message"
                name="message"
                // className="form-control"

                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>

          {/* Google Map Embed */}
          <div className="col-12 col-md-6 col-lg-4">
            <h1 style={{ color: '#82a448' }} className='map-text'>I'm in here</h1>
            <div className=" ratio ratio-4x3">
              <iframe className='map'
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.332227351772!2d78.11327307411116!3d9.906263274642527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTQnMjIuNSJOIDc4wrAwNic1Ny4xIkU!5e0!3m2!1sen!2sin!4v1746606955496!5m2!1sen!2sin"
                title="Location Map"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-12 col-md-12 col-lg-4">
            <h1 style={{ color: '#82a448' }}>Contact</h1>
            <h5 className="contact-text mt-3">
              <MdOutlinePhoneIphone className="me-2 contact-icon" />
              +91 8939600125
            </h5>
            <hr />
            <h5 className="contact-text">
              <MdOutlineLocalPostOffice className="me-2 contact-icon" />
              hariharanvenkadesh@gmail.com
            </h5>
            <hr />
            <h5 className="contact-text">
              <PiMapPinSimpleArea className="me-2 contact-icon" />
              Near by Villapuram, Madurai-11
            </h5>
            <hr />
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="container-fluid"  style={{ color: "#82a448" }}>
        <div className="row d-flex footer">
          <div className="col-12 col-md-6 col-lg-6 align-self-center ">
            <p className="copyright">
              © 2025 Copyright Hariharan.All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 justify-content-end align-self-center">
            <div className="social-icons justify-content-evenly ">
              <div className="icon-box facebook ">
                <div className="label">Facebook</div>
                <a href='https://www.facebook.com/imhariharasudhan' className="icon text-decoration-none"><i className="fab fa-facebook text-decoration-none" ></i></a>
              </div>
              <div className="icon-box instagram">
                <div className="label">Instagram</div>
                <a href='https://www.instagram.com/imhariharasudhan?igsh=bHRqaHIybzRhd3ls' className="icon text-decoration-none"><i className="fab fa-instagram text-decoration-none"></i></a>
              </div>
              <div className="icon-box linkedin">
                <div className="label">LinkedIn</div>
                <a href='https://www.linkedin.com/in/hariharan-g-v-6b902030a' className="icon text-decoration-none"><i className="fab fa-linkedin-in text-decoration-none"></i></a>
              </div>
              <div className="icon-box github">
                <div className="label">Github</div>
                <a href='https://github.com/GVHARIHARAN' className="icon text-decoration-none"><i className="fab fa-github text-decoration-none"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default portfolio;
