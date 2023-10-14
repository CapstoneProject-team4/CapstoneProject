import styled from "styled-components";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";

import {mobile} from "../responsive";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import { useEffect } from "react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluayUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
  background-position: center;
  background-size: cover;
  height: 100vh; /* Adjust the height as needed */
  margin: 0;
`;




const Wrapper = styled.div`
  width: 25%;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  text-align: center;
  margin-top: 130px;
  margin-bottom: 80px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px;
  background-color: #e75480;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d24d75;
  }
`;


const Login = ({setToken,setRole}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

/*  useEffect(()=>{
    localStorage.setItem('setToken', setToken);
    localStorage.setItem('setRole', setRole);

  },[])
  */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const result = await response.json();
      alert(result.message);
      if (!response.ok) {
        throw result;
      }
      setToken(result.token);
      setRole(result.user.role);
    
      if(result.token){
      navigate('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Button type="submit">LOGIN</Button>
          <Link to="/register">Create a new account</Link>
        </Form>
      </Wrapper>
     
    </Container>
  );
};

export default Login;


