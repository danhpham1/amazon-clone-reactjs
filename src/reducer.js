export const initialState = {
    basket: []
}

//get total basket 
export const getTotalBasket = (itemsArr) => {
    return itemsArr.reduce((total, item) => {
        return total = total + (+item.price);
    }, 0)
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((item) => item.id === action.idItem);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                alert("error");
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export default reducer;