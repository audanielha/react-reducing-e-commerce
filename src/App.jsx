import React,{ useReducer } from "react";


import Menu from "../components/Menu";
import Order from "../components/Order";

const App = () => {
const initialState = 0;

    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action){
        switch(action.type){
            case 'INCREMENT':
                return state +1;
            case 'DECREMENT':
                return state  -1;
        }
    }
    return (
        <>
            <h1>{state}</h1>
            <div className="container d-flex">
                <div className="col-sm-6">
                    <Menu/>
                </div>
                <div className="col-sm-6">
                    <Order/>
                </div>
            </div>
        </>
    );
};

export default App;