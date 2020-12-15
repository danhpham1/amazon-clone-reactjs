import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, price, image, rating }) {

    const [{ basker }, dispatch] = useStateValue()

    const removeItemFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            idItem: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeItemFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
