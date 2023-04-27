const CartReducer = (prevState, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return {
                cart: [],
            }
        default:
            return prevState; 
    }
}

export default CartReducer;