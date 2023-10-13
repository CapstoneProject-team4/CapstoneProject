import { Badge } from "@mui/material";
import {ShoppingCartOutlined} from "@mui/icons-material"
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import {Link} from "react-router-dom";




const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`;
const Wrapper = styled.div `
padding: 10px 20px;
display: flex;
align-items: center; 
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`;



const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
 font-weight: bold; 
 font-size: 40px;
 color :#CA226B;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({setToken,setRole}) => {
    return(
    <Container>
    <Wrapper>
    <Left>
        <Language>EN</Language>
       
    </Left>
    <Center><Logo>HeadPhones</Logo></Center>
    <Right>
      <Link to= "/"> 
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to= "/admin"> 
        <MenuItem>AdminDashBoard</MenuItem>
      </Link>
      <Link to= "/products">
        <MenuItem>Products</MenuItem>
      </Link>
      {setToken?null:<Link to= "/login">
        <MenuItem>Login</MenuItem>
      </Link>}
      <Link to= "/register">
        <MenuItem>Register</MenuItem>
      </Link>
      <Link to= "/cart">
         <MenuItem>
          <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined/>
          </Badge>
        </MenuItem>
        </Link>
    </Right>
    </Wrapper>
    </Container>
    );
};

export default Navbar


