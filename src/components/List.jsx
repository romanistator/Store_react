import {Product} from "./Product.jsx"
import { useEffect, useState } from 'react'

export function List(){
    const [listProducts,setListProducts] = useState([])
    useEffect(()=>{
        fetch("https://api.npoint.io/68bf5db20a3c236f68ed")
        .then((response)=>response.json())
        .then(data => setListProducts(data))
      
      },[])
       
    return(
        <>
           {listProducts.map((product,index)=>
                <Product 
                    key={index}
                    product={product}
                /> 
            )}
        </>
     
    )


}

