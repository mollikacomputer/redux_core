import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../redux/actionCreators/productActions";
import {RiDeleteBin5Fill} from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { REMOVE_FROM_CART } from "../redux/actionsTypes/actionTypes";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
    >
      {pathname.includes("cart")&&(<div className="grid place-items-center bg-indigo-500 rounded-full h-8 w-8 text-white absolute top-2 right-2">
        <p>{product.quantity}</p>
      </div>)}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
      {pathname.includes("cart")&& (<button
          className='bg-indigo-500 flex justify-between px-5 bg-red-500 items-center  rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={()=> dispatch(RemoveFromCart(product))}
        >
          <p> Remove</p>
          <RiDeleteBin5Fill />
        </button>)}

        {!pathname.includes("cart")&& (<button
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={()=> dispatch(AddToCart(product))}
        >
          Add to cart
        </button>)}
        {!pathname.includes("cart")&& (<button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>)}
      </div>
    </div>
  );
};

export default ProductCard;
