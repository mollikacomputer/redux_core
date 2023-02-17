import ProductCard from "../../components/ProductCard"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionsTypes/actionTypes"

export const AddToCart = (product) =>{
    return {
        type:ADD_TO_CART,
        payload:product,
    }
};

export const RemoveFromCart = (product) =>{
    return{
        type:REMOVE_FROM_CART,
        payload:product,
    }
}