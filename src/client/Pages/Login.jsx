import styled from "styled-components";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {mobile} from "../responsive";

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

const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: #555;
`;

const Login = () => {
  return (
    <Container>
    
   <Navbar/>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
          <Button>LOGIN</Button>
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      
      </Wrapper>
     <Footer/>
    </Container>
  );
};

export default Login;

