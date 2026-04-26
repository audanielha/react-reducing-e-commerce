import React from "react";

const Menu = ({}) =>{

    return (
        <>
            <div className="container">
                <div className="col-sm-6">
                    <h3>Sweet Tea Fried Chicken</h3>
                    <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Add to Order</button>
                </div>
                <div className="col-sm-6">
                    <h3>Pork and Grit</h3>
                    <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Add to Order</button>
                </div>
                <div className="col-sm-6">
                    <h3>Ribs</h3>
                    <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Add to Order</button>
                </div>
                <div className="col-sm-6">
                    <h3>Salad</h3>
                    <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Add to Order</button>
                </div>
            </div>
        </>
    )
}

export default Menu