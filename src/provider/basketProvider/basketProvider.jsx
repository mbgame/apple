import React, { createContext, useReducer, useContext, useCallback } from 'react';

export const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

const initialState = {
  basket: [],
};

const basketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, { ...action.product, purchasedQty: 1 }],
      };
      case 'INCREASE_QUANTITY':
        const index1 = state.basket.findIndex((item) => item.id === action.product.id);
      
        if (index1 !== -1) {
          const newBasket = [...state.basket];
          newBasket[index1] = { ...newBasket[index1], purchasedQty: newBasket[index1].purchasedQty + 1 };
          return {
            ...state,
            basket: [...newBasket],
          };
        } else {
          return {
            ...state,
            basket: [...state.basket, { ...action.product, purchasedQty: 1 }],
          };
        }
    case 'DECREASE_QUANTITY':
      const index = state.basket.findIndex((item) => item.id === action.product.id);
      if (index !== -1) {
        const newBasket = [...state.basket];
        if (newBasket[index].purchasedQty > 1) {
          newBasket[index] = { ...newBasket[index], purchasedQty: newBasket[index].purchasedQty - 1 };
        } else {
          newBasket.splice(index, 1);
        }
        return {
          ...state,
          basket: [...newBasket],
        };
      } else {
        return state;
      }
      case 'REMOVE_FROM_BASKET':
        const newBasket = state.basket.filter((item) => item.id !== action.product.id);
        return {
          ...state,
          basket: [...newBasket],
        };
    default:
      return state;
  }
};

const useBasketReducer = () => {
  const reducer = useCallback(basketReducer, []);
  return useReducer(reducer, initialState);
};

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useBasketReducer();

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};