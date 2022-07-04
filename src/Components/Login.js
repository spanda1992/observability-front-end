import React, { useRef, useState } from "react";
import { authActions } from "../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import '../global.css'

const Login = () => {
  const userName = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastname = useRef();
  const signupUserName = useRef();
  const signupPassword = useRef();

  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccessSignupAlert, setSuccessSignupAlert] = useState(false);
  const [showFailureSignupAlert, setFailureSignupAlert] = useState(false);
  const [showSignupErrorMessage , setSignupErrormessage] = useState('')

  const authState = useSelector((state) => {
    return state.auth;
  });

  const dispatch = useDispatch();

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredUserName = userName.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredUserName);

    try {
      const response = await axios.post(
        process.env.REACT_APP_HOST_URL + process.env.REACT_APP_LOGIN_URL,
        {
          emailID: enteredUserName,
          password: enteredPassword,
        }
      );
      if (response.data.response === "success") {
        dispatch(authActions.login({token: response.data.token , firstName : response.data.firstName}));
        navigate("/alerts");
      }
    } catch (error) {
      setError(error.response.data.error);
      setShowAlert(true);
    }
  };

  const modalOpenHandler = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    const signupEnteredUserName = signupUserName.current.value;
    const signupEnteredPassword = signupPassword.current.value;
    const enteredFirstName = firstName.current.value;
    const enteredLastName = lastname.current.value;

    try {
      const response = await axios.post(
        process.env.REACT_APP_HOST_URL + process.env.REACT_APP_SIGNUP_URL,
        {
          emailID: signupEnteredUserName,
          password: signupEnteredPassword,
          firstName: enteredFirstName,
          lastName: enteredLastName,
        }
      );
      console.log(response.data.response)
      if (response.data.response === "success") {

        setSuccessSignupAlert(true)

        setTimeout(() => {
          setShowModal(false)
          setSuccessSignupAlert(false)
        },2000)
      }
    } catch (error) {
      if(error.response.data.error.includes('duplicate')){
        setSignupErrormessage('Email Id Already Exist !!')
      }
      setFailureSignupAlert(true)
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    
    <div className=" login-page-background">
    <div className="background-overlay">
    
    
    <div className="container d-flex align-items-center">

    <h1 id='login-display' className=" display-1 text-white pb-5">Observability Platform</h1>
    <div className="container text-white p-5 mt-5 w-50">
      <h1 className="mt-3">Login Page</h1>

      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}

      <Form onSubmit={loginFormSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={userName}
          />
          <Form.Text className="text-white">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button
        className="mt-5 mb-5"
        variant="warning"
        onClick={modalOpenHandler}
      >
        Don't have an account ? Sign Up
      </Button>
      {showModal && (
        <Modal show={showModal} onHide={handleClose}>
          {showSuccessSignupAlert && (
            <Alert
              variant="success"
              onClose={() => setSuccessSignupAlert(false)}
            >
              <Alert.Heading>
                Success !! Registered. Now you can login
              </Alert.Heading>
            </Alert>
          )}

          {showFailureSignupAlert && (
            <Alert
              variant="danger"
              onClose={() => setSuccessSignupAlert(false)}
            >
              <Alert.Heading>
                Oops! Something Went Wrong
              </Alert.Heading>
              {showSignupErrorMessage}
            </Alert>
          )}

          <Modal.Header closeButton>
            <Modal.Title>Signup Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={signupUserName}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={signupPassword}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  ref={firstName}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  ref={lastname}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={signupHandler}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
    </div>
    
  
    </div>
    </div>
  );
};

export default Login;
