import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    subtotal: 0,
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { },
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const shoeSize = action.size;
        const existingCartItemWithSizeIndex = state.items.findIndex((item) => item.id === action.item.id && item.size === shoeSize);
        const quantity = action.quantity;

        const updatedItems = [...state.items];
        let newSubtotal = state.subtotal;

        if (existingCartItemWithSizeIndex > -1) {
            const existingItem = state.items[existingCartItemWithSizeIndex];
            const updatedItem = {
                ...existingItem,
                quantity: Number(existingItem.quantity) + 1,

            };
            updatedItems[existingCartItemWithSizeIndex] = updatedItem;
            newSubtotal += Number(existingItem.price);
        } else {
            updatedItems.push({ ...action.item, quantity: quantity, size: shoeSize });
            newSubtotal += action.item.price * quantity;
        }

        return { ...state, items: updatedItems, subtotal: newSubtotal }
    }

    if (action.type === 'REMOVE_ITEM') {
        const shoeSize = action.size;
        const existingCartItemWithSizeIndex = state.items.findIndex((item) => item.id === action.id && item.size === shoeSize);

        const existingCartItem = state.items[existingCartItemWithSizeIndex];
        const updatedItems = [...state.items];
        let newSubtotal = state.subtotal;

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItem, 1);
            newSubtotal -= existingCartItem.price;
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };

            updatedItems[existingCartItemWithSizeIndex] = updatedItem;
            newSubtotal -= existingCartItem.price;
        }

        return { ...state, items: updatedItems, subtotal: newSubtotal  };
    }

    if (action.type === 'CLEAR_CART') {
        return { items: [], subtotal: 0 }; 
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [], subtotal: 0 });

    function addItem(item, size, quantity) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item,
            size,
            quantity
        });
    }

    function removeItem(id, size) {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id,
            size,
        });
    }

    function clearCart() {
        dispatchCartAction({
            type: 'CLEAR_CART',
        });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        subtotal: cart.subtotal,
        removeItem,
        clearCart
    }

    console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;