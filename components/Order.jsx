import React from "react";

const Order = ({reset, yut, yi, sam, sei, plusOne, minusOne,plusTwo, minusTwo,plusThree, minusThree,plusFour, minusFour,total}) =>{

    const isEmpty = yut === 0 && yi === 0 && sam === 0 && sei === 0;

    return (
    <>
        <h2>Your Order</h2>
        {isEmpty && <p>Select an Item!</p>}
        {yut > 0 && <p>Sweet Tea Chicken: {yut} <button onClick={plusOne}>+</button> <button onClick={minusOne}>-</button></p> }
        {yi > 0 && <p>Pork and Grit {yi} <button onClick={plusTwo}>+</button> <button onClick={minusTwo}>-</button></p>}
        {sam > 0 && <p>Ribs: {sam} <button onClick={plusThree}>+</button> <button onClick={minusThree}>-</button></p>}
        {sei > 0 && <p>Salad: {sei} <button onClick={plusFour}>+</button> <button onClick={minusFour}>-</button></p>}
        <p><b>Total:${total}</b></p>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Order