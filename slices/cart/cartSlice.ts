import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CartState {
  cartItem: object[];
  amount: number;
  total: number;
  isLoading: boolean;
}

export interface CartInput {
  product: any;
}

export interface CartToggleType {
  product: any;
  count: number;
}

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
  isLoading: true,
} as CartState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartInput>) => {
      const checkCart: any = state.cartItem.find((cart: any) => cart.id === action.payload.product.id);
      if (!checkCart || checkCart === undefined) {
        state.cartItem.push(action.payload.product);
      }
    },
    toggleCartAmount: (state, action: PayloadAction<CartToggleType>) => {
      const count = action.payload.count;
      const checkCart: any = state.cartItem.find((cart: any) => cart.id === action.payload.product.id);
      checkCart.amount = count;
    },
    removeSingleCart: (state, action: PayloadAction<CartInput>) => {
      const cart: any = state.cartItem.filter((cart: any) => cart.id != action.payload.product.id);
      state.cartItem = cart;
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.amount = 0;
      state.total = 0;
    },
    calculateCart: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItem.map((cart: any) => {
        amount += cart.amount;
        total += cart.price * cart.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { setCart, calculateCart, clearCart, toggleCartAmount, removeSingleCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
