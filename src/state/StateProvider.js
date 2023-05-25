import { React, useState,useReducer,createContext } from "react";

const initialState ={
    basket: [],
    user:null
};

 const reducer = (state, action)=>{
    //state={basket: [{},{},{}]}
    console.log(state)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item]
            };


        case 'REMOVE_FROM_BASKET':
         
            const index = state.basket.findIndex(item=>item.id===action.id)
            const newBasket = [...state.basket]//need to create new array to do splice 

            if(index>=0){
                newBasket.splice(index,1)
            }else{
                console.warn(`cannot remove product ${action.id} as its not in basket`)
                
            }
            return{
                ...state,
                basket:newBasket
            };
           
         case 'LOGIN':
            return {
                ...state,
                user:action.user
            }
         case 'LOGOUT': return {
            ...state,
            user:null
        }

            default:
                return state;
    }
}
const StateContext = createContext(initialState)

const StateProvider = (props)=>{

    const [state, dispatch] = useReducer(reducer,initialState)
console.log(state)//basket 
    const addtoBasket = (item) =>{
        dispatch(
            {
                type: 'ADD_TO_BASKET',
                item:item
            }
        )
    }
        const removeFromBasket = (productId) =>{
            dispatch(
                {
                    type: 'REMOVE_FROM_BASKET',
                    id:productId
                }
            )
        }
        const login = (user)=>{
            dispatch(
                {
                    type: 'LOGIN',
                    user:user
                }
            )
        }
        const logout = ()=>{
            dispatch(
                {
                    type: 'LOGOUT',
                    user:null
                }
            )
        }

   return( 
   <StateContext.Provider value={{basket:state.basket, addtoBasket,removeFromBasket, user:state.user, login, logout}}
        {...props} />
        )
}


export {StateContext, StateProvider}