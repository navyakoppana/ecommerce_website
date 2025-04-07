import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'
import styled from 'styled-components'

const StyledDiv = styled.div`
    @media(max-width:768px){
        margin-right:100px;
    }

`

const GridContainer = styled.div`
    @media(max-width:1440px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        width: 100%;
    }
    @media(max-width:768px){
        grid-template-columns: repeat(2, 1fr);
        gap:0px;
        margin-right:50px;
    }
`



const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    

    useEffect(() => {
        console.log('Products in bestseller:', products); 
        //products.then(res => res.json()).then(products => setBestSeller(products.filter(x => x.bestseller)))
        setBestSeller(products.filter((item)=>(item.bestseller)));
    },[products])
    return (
    <div>
        <StyledDiv >
            <Title text1='best' text2='sellers'></Title>
        </StyledDiv>
        <GridContainer>
                {bestSeller.map((item, index) => (
                    
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </GridContainer>    
    </div>
    
  )
}

export default BestSeller;