

import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";

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
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 130px;
  margin-bottom: 60px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
  color: #555;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #e75480;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d24d75;
  }
`;

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
        <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
      <Footer/>
    </Container>
  );
};

export default Register;
