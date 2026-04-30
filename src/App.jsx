import React,{ useReducer } from "react";


import Menu from "../components/Menu";
import Order from "../components/Order";

const App = () => {


const initialState = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
};

    const [state, dispatch] = useReducer(reducer, initialState);
    
    function reducer(state, action) {
        switch(action.type){
            case 'INCREMENT':
                return{
                    ...state,
                    [action.payload]:state[action.payload] + 1
                }
            case 'DECREMENT':
                return{
                    ...state,
                    [action.payload]: state[action.payload] - 1
                }
               case 'RESET':
                
                return {
                    one: 0,
                    two: 0,
                    three: 0,
                    four: 0
                }
            default: return state;
        }
    }

    const handleClick = (name) =>{
        dispatch({
            type: 'INCREMENT',
            payload: name
        });
    }
    const handleMinus = (name) => {
        dispatch({
            type: 'DECREMENT',
            payload: name
        });
    };
    const reset = () => {
        dispatch({
            type: 'RESET',
        });
    };
const final = 0 + state.one * 8.50 + state.two * 6.50 + state.three * 10 + state.four * 5.75;

    return (
        <>
        
        <div className="container d-flex">
            <div className="col-sm-6">
                <Menu
                one={() => handleClick('one')}
                two={() => handleClick('two')}
                three={() => handleClick('three')}
                four={() => handleClick('four')}
                />
            </div>
            <div className="col-sm-6">
                <Order reset={reset}total={final} yut={state.one} yi={state.two} sam={state.three} sei={state.four} plusOne={()=>handleClick('one')} minusOne={()=>handleMinus('one')} plusTwo={()=>handleClick('two')} minusTwo={()=>handleMinus('two')} plusThree={()=>handleClick('three')} minusThree={()=>handleMinus('three')} plusFour={()=>handleClick('four')} minusFour={()=>handleMinus('four')}/>
            </div>
        </div>
        </>
    );
};

export default App;