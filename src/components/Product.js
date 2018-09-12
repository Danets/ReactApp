import React from 'react';

const Product = ({ name, ingredients, steps }) => {
    return (
        <section>
            <li>{name}</li>
            <div>
                {ingredients.map((food, i) => {
                    return ( 
                    <div key={i}>
                    <p>{food.name}</p>
                    <p>{food.measurement}</p>
                    </div>  
                    )
                })}
            </div>
            <div>
                {steps.map((step, index) => {
                    return ( 
                    <div key={index}>
                    <p>{step}</p>
                    </div>  
                    )
                })}
            </div>
        </section>
    )
}

export default Product;