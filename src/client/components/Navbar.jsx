import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  
  
`;

const Wrapper = styled.div`
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
  color: black; /* Set text color to black */
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #CA226B;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  color: black; /* Set text color to black */

  &:hover {
    color: #CA226B;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = ({token,role}) => {
  console.log(role,"role")
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
     {token && role == "Admin"?<Link to= "/admin"> 
        <MenuItem>AdminDashBoard</MenuItem>
      </Link>:null}
      <Link to= "/products">
        <MenuItem>Products</MenuItem>
      </Link>
     {token?<Link to= "/logout">
        <MenuItem>LogOut</MenuItem>
      </Link>:<Link to= "/login">
        <MenuItem>Login</MenuItem>
      </Link>}
      <Link to= "/register">
        <MenuItem>Register</MenuItem>
      </Link>
      <Link to= "/cart">
         <MenuItem>
          <Badge badgeContent={0} color="primary">
          <ShoppingCartOutlined/>
          </Badge>
        </MenuItem>
        </Link>
    </Right>
    </Wrapper>
    </Container>
  );
};

export default Navbar;
