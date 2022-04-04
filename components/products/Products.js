import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import Product from './product/Product';

const Products = () => {

     const [products,setProducts]=useState([]);
     useEffect(()=>{
          const url='https://young-depths-90342.herokuapp.com/products';
          fetch(url)
          .then(res=>res.json())
          .then(data=>{
               console.log(data);
               setProducts(data)
          })
     },[])
     
     return (
          <View>
          <Text>this is  Products page</Text>
          {
               products.map(product=><Product
                    product={product}
               ></Product>)
          }
          </View>
     )
}

export default Products