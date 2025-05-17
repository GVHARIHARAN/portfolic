import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import  '../src/log-in.css';
import { useNavigate } from 'react-router-dom';
import Icon from '../src/icon.png';
const Login = () => {
    const navigate = useNavigate();
    let ld;
    let n;

    function sum() {
        var b = document.getElementById("pa").value;
        if (b == '') {
            alert("please fill the name and password");
        }
        
        else {
            var d = Math.trunc(Math.random() * 10000);
            localStorage.setItem("otp", d);
            ld = localStorage.getItem("otp");
            alert("OTP"+":"+d);

        }
    }
        function demo() {
            var a = document.getElementById("na").value;
            var b = document.getElementById("pa").value;
            var c = document.getElementById("ot").value;

            localStorage.setItem("na", a);
            n = localStorage.getItem("na");

            if (a === "" && b === "" && c === "") {
                document.getElementById("na").style.borderColor = "red";
                document.getElementById("pa").style.borderColor = "red";
                document.getElementById("ot").style.borderColor = "red";
                alert("please fill the details");
            } else if (a === "" && b === "") {
                document.getElementById("na").style.borderColor = "red";
                document.getElementById("pa").style.borderColor = "red";
            } else if (b === "" && c === "") {
                document.getElementById("pa").style.borderColor = "red";
                document.getElementById("ot").style.borderColor = "red";
            } else if (c === "" && a === "") {
                document.getElementById("ot").style.borderColor = "red";
                document.getElementById("na").style.borderColor = "red";
            } else if (a === "") {
                document.getElementById("na").style.borderColor = "red";
                document.getElementById("pa").style.borderColor = "green";
                document.getElementById("ot").style.borderColor = "green";
            } else if (b === "") {
                document.getElementById("pa").style.borderColor = "red";
                document.getElementById("ot").style.borderColor = "green";
                document.getElementById("na").style.borderColor = "green";
            } else if (c === "") {
                document.getElementById("ot").style.borderColor = "red";
                document.getElementById("na").style.borderColor = "green";
                document.getElementById("pa").style.borderColor = "green";
            } else if (c === ld) {
                document.getElementById("na").style.borderColor = "green";
                document.getElementById("pa").style.borderColor = "green";
                document.getElementById("ot").style.borderColor = "green";
                alert("Welcome" + " " + n);
                navigate('/pro');
            } else if (c !== ld) {
                document.getElementById("na").style.borderColor = "green";
                document.getElementById("pa").style.borderColor = "green";
                document.getElementById("ot").style.borderColor = "red";
                alert('OTP is incorrect, please click OTP button')
            } else {
                alert("log in failed");
            }
        }

        return (
            <>
            <link rel="icon" href={Icon} />
                <Navbar expand="lg" className="bg-body-tertiary" id="pnavbar">
                    <Container >
                        <Navbar.Brand href="#home">  <h2>PRODUCT  24<a href="" style={{ color: '#98bf64' }} className='fw-bolder '>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-hourglass mb-1" viewBox="0 0 16 16">
                <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z" />
              </svg>
            </a> </h2></Navbar.Brand>
                        
                    </Container>
                </Navbar>
                <div className='container-fluid img-fluid' id='login'>
                    <div className='row '>
                        <div className='col-md-6 col-lg-5 mx-auto boxlo'
                         data-aos="zoom-out-left"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="false">
                            <form action="">
                                <h1 className='h1 text-center text-light'>Log in</h1>
                                <span className='form-group'>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className='form-control  text-light' placeholder='' id="na" required  />
                                </span>
                                <span className='form-group'>
                                    <label htmlFor="password">Password:</label>
                                    <input type="password"  className='form-control text-light'  placeholder='' id="pa" minLength={8} required/>
                                </span>
                                <span className='form-group'>
                                    <label htmlFor="otp">OTP:</label>
                                    <input type="text" className='form-control text-light'  placeholder=''  id="ot" required/>
                                </span>
                                <button type="button" id='btn' className='btn btn-outline-light' onClick={sum}>OTP</button>
                                <button type="button" id='btn' className='btn btn-outline-light' onClick={demo}>Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );

    }

export default Login;