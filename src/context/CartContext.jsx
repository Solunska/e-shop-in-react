import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { },
    isQuantityModalOpen: false,
    setIsQuantityModalOpen: () => { },
    subtotal: 0,
    setSubtotal: () => { }
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
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [], subtotal: 0 });
    const [isQuantityModalOpen, setIsQuantityModalOpen] = useState(false);

    function addItem(item, size, quantity) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item,
            size,
            quantity
        });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        isQuantityModalOpen,
        setIsQuantityModalOpen,
        subtotal: cart.subtotal, 
    }

    console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;