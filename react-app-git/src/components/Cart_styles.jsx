// import styled from 'styled-components'

// export const MainDiv = styled.div`
//     display:flex;
//     flex-direction:column;
//     @media(max-width:1440px){
//         overflow-x:hidden;
//     }
//     @media(max-width:430px){
//         width:100%;
//         max-width:430px;
//         margin-right:-200px;
//     }
//     @media(max-width:390px){
//         width:100%;
//         max-width:390px;
//         margin-right:-200px;
//     }

// `
// export const HeadingDiv =styled.div`
//     font-size:25px;
//     margin-left:-2200px;
//     color:black;

//     @media(max-width:768px){
//         margin-left:-700px;
//     }
//     @media(max-width:1440px){
//         margin-left:-1150px; 
//         margin-bottom:-30px;
//     }
//     @media(max-width:390px){
//         margin-left:-200px;
//     }
//     @media(max-width:430px){
//         margin-left:-200px;
//     }

// `
// export const CartInfoDiv = styled.div`
//     display:flex;
//     flex-direction:row;
//     justify-content:space-between;
//     align-items: center;
//     padding: 10px;
//     border-bottom: 1px solid #ccc;
//     margin-bottom: 10px;
    
// `
// export const SubDiv = styled.div`
//     display:flex;
//     flex-direction:row;
//     flex-grow: 1; /* Allow SubDiv to take available space */
//     color:black;
// `
// export const ImageDiv = styled.img`
//     width:120px;
//     height:120px;
//     border:2px solid #000;
//     gap:30px;
// `
// export const DescriptionDiv = styled.div`
//     margin-left:40px;
//     font-size:18px;
//     font-family:"Amazon Ember", Arial, sans-serif;
//     font-weight:200;
//     @media(max-width:768px){
//         font-size:15px;
//     }
//     @media(max-width:430px){
//         font-size:18px;
//         width:200px;
//     }
//     @media(max-width:390px){
//         font-size:18px;
//         width:200px;
//     }

// `
// export const Input = styled.input`
//     width: 60px;
//     padding: 5px;
//     font-size: 16px;
//     text-align: center;
//     border: 2px solid #ffd814;
//     border-radius: 8px;
//     margin-right: 50%;

//     @media(max-width:768px){
//         margin-right:25%;
//     }
//     @media(max-width:1440px){
//         margin-right:25%;
//       }
// `
// export const CartTotalDiv = styled.div`
//     margin-left:80%;
//     @media(max-width:768px){
//         margin-left:20%;
//     }
//     @media(max-width:1440px){
//         margin-left:75%;
//     }
// `
// export const CheckoutDiv = styled.div`
//     margin-left:90%;
//     display:inline-block;
//     width:100%;
//     @media(max-width:768px){
//         margin-left:45%;
//         margin-right:150px;
//     }
//     @media(max-width:1440px){
//         margin-left:85%; 
//     }

// `
// export const CheckoutButton = styled.button`
//     background-color: #FF9900;;
//     color:white;
//     padding:10px 20px 10px 20px;
//     font-weight: bold;
//     font-size:16px;
//     border-radius:8px;
    
//     &:hover {
//         background-color: #E68000;
//         box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.3);
//     }

//     &:active {
//         transform: scale(0.98);
//     }

// `

import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; /* Full width */
    overflow: visible;

    @media (max-width: 430px) {
        width: 100%; /* Remove restrictions */
        margin-right: 0; /* Remove negative margin */
    }

    @media (max-width: 390px) {
        width: 100%; /* Remove restrictions */
        margin-right: 0; /* Remove negative margin */
    }
`;

export const HeadingDiv = styled.div`
    font-size: 25px;
    margin-left: 0; /* Remove negative margin for proper alignment */
    color: black;

    @media (max-width: 768px) {
        margin-left: 0;
    }

    @media (max-width: 1440px) {
        margin-left: 0;
    }

    @media (max-width: 430px) {
        margin-left: 0;
    }

    @media (max-width: 390px) {
        margin-left: 0;
    }
`;

export const CartInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
`;

export const SubDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1; /* Allow SubDiv to take available space */
    color: black;
`;

export const ImageDiv = styled.img`
    width: 100%; /* Make the image responsive */
    max-width: 120px;
    height: auto; /* Keep aspect ratio */
    border: 2px solid #000;
    margin-right: 10px; /* Spacing between images */
`;

export const DescriptionDiv = styled.div`
    margin-left: 10px; /* Adjust for better spacing */
    font-size: 18px;
    font-family: "Amazon Ember", Arial, sans-serif;
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 15px;
    }

    @media (max-width: 430px), (max-width: 390px) {
        font-size: 16px;
        width: 100%; /* Make it span full width */
        margin-left: 50px; 
    }
`;

export const Input = styled.input`
    width: 60px;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    border: 2px solid #ffd814;
    border-radius: 8px;
    margin-right: 10px; /* Adjust alignment */

    @media (max-width: 768px) {
        margin-right: 0; /* Center-align for smaller screens */
    }

    @media (max-width: 1440px) {
        margin-right: 0;
    }
`;

export const CartTotalDiv = styled.div`
    margin-left: auto;
    text-align: right;

    @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
    }

    @media (max-width: 1440px) {
        margin-left: auto;
    }
`;

export const CheckoutDiv = styled.div`
    margin-left: auto;
    margin-right: auto; /* Center-align the checkout button */
    width: 100%; /* Ensure it spans full width */
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        margin-right: auto;
    }

    @media (max-width: 1440px) {
        margin-left: auto;
    }
`;

export const CheckoutButton = styled.button`
    background-color: #FF9900;
    color: white;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #E68000;
        box-shadow: 0px 4px 8px rgba(255, 153, 0, 0.3);
    }

    &:active {
        transform: scale(0.98);
    }
`;
