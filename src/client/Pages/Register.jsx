import styled from "styled-components";
import Navbar from "../components/Navbar";

import { mobile } from "../responsive";
import { Email } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


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
  border-radius: 20px;
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

const AlreadyHaveAccount = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  width: 100%;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "Customer",
          name: name,
          password: password,
          email: email,
        }),
      });

      const result = await response.json();
      console.log(result, "result");
      alert(result.message);
      if (result.token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error, "error");
    }
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">Submit</Button>
        </Form>
        <AlreadyHaveAccount>
          <Link to="/login"> Already has an account? Log in now! </Link>
        </AlreadyHaveAccount>
      </Wrapper>
      
    </Container>
  );
};

export default Register;
