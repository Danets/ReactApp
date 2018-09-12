import React from 'react';
import Product from './Product';

const ListProducts = ({title, recipes}) => {
   return (
       <ul>
           {recipes.map((recipe, index)=> {
               return <Product key={index} {...recipe} />
           })}
       </ul>
   )
}

export default ListProducts;