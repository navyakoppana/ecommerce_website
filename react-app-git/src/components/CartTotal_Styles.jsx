import styled from 'styled-components'

export const TotalMainDiv = styled.div`
    display:flex;
    flex-direction:column;
    text-align:right;
    width:100%;
    margin-bottom:50px;
    justify-content:space-between;

`
export const Heading = styled.div`
    display:flex;
    margin-right:150px;
    justify-content:space-between;
    color:black;
    font-family: "Amazon Ember", Arial, sans-serif;
    font-weight:600;
    font-size:22px;
    @media(max-width:768px){
        width:200px;
    }

`
export const AmountInfo = styled.div`
    display:flex;
    width:100%;
    gap:70%;
    color:black;
    font-weight:200;
    justify-content:space-between;

`
export const Hr = styled.hr`
    margin:10px 0;
    width:100%;

    @media(max-width:768px){
        width:100%;
    }
`