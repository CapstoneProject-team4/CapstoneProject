import { Badge } from "@mui/material";
import {ShoppingCartOutlined} from "@mui/icons-material"
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";




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

const Navbar = () => {
    return(
    <Container>
    <Wrapper>
    <Left>
        <Language>EN</Language>
       
    </Left>
    <Center><Logo>HeadPhones</Logo></Center>
    <Right>
          <MenuItem>Home</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>Log In</MenuItem>
        <MenuItem>
        
        <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined/>
      </Badge>
        </MenuItem>
    </Right>
    </Wrapper>
    </Container>
    );
};

export default Navbar


