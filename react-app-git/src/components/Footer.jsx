import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const StyledFooterDiv =styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
    justify-content:space-around;
    margin-left:20px;
    @media(max-width:768px){
        margin-left:-40px;
        margin-right:20px;
    }
    @media(max-width:390px){
        margin-left:200px;
    }

    @media(max-width:430px){
        margin-left:200px;
        margin-right:20px;
    }
`

const Hr =styled.hr`
    width:100%;
    @media(max-width:390px){
        width:200%;
    }

    @media(max-width:430px){
        width:200%;
    }
`
const StyledHeading=styled.p`
    color:navy;
    text-decoration:underline;
    font-weight:bold;
    font-size:20px;
    @media(max-width:768px){
        font-size:15px;  
    }
`
const StyledList = styled.ul`
    color:black;
    &: hover{
        text-decoration:underline;     
    }
    @media(max-width:768px){
        margin-left:-40px;
        margin-right:40px;
    }
`

const StyledLine = styled.p`
    margin-left:1050px;
    @media(max-width:1440px){
        margin-left:500px;
    }
    @media(max-width:768px){
        margin-left:200px;
    }
    @media(max-width:390px){
        width:100%;
    }

    @media(max-width:430px){
        width:100%;
    }
`

const Footer = () => {
    const navigate=useNavigate();
     
  const handleNavigate = (category) => {
    navigate(`/collection?category=${category}`);
  };
  return (
    <div>
        <Hr />
        <StyledFooterDiv>
            <div>
                <StyledHeading>SHOP</StyledHeading>
                <StyledList>
                    <li onClick={() =>handleNavigate('Women')}>Women</li>
                    <li onClick={() =>handleNavigate('Men')}>Men</li>
                    <li onClick={() =>handleNavigate('Girls')}>Girls</li>
                    <li onClick={() =>handleNavigate('Boys')}>Boys</li>
                </StyledList>
            </div>
            <div>
                <StyledHeading>COMPANY</StyledHeading>
                <StyledList>
                    <li onClick={() =>navigate('/')}>Home</li>
                    <li onClick={() =>navigate('/about')}>About Us</li>
                    <li onClick={() =>navigate('/login')}>Register</li>
                    <li onClick={() =>navigate('/')}>Policy</li>
                </StyledList>
            </div>
            <div>
                <StyledHeading>CONTACT US</StyledHeading>
                <StyledList>
                    <li>405-456-7890</li>
                    <li>contact@ws.com</li>
                </StyledList>
            </div>
        </StyledFooterDiv>
        <div>
            <Hr />
            <StyledLine>Copyright 2024 Westside.-All rights reserved </StyledLine>
        </div>
    </div>
  )
}

export default Footer