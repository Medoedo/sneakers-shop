import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/http.hook";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    cartLoadingStatus: "idle"
});

export const cartFetch = createAsyncThunk(
    "cart/Fetch",
    () => {
        const {request} = useHttp()
        return request("http://localhost:3001/cart");
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        changeSum: cartAdapter.updateOne
    },
    extraReducers: (builder) => {
        builder
            .addCase(cartFetch.pending, (state) => {state.cartLoadingStatus = "loading"})
            .addCase(cartFetch.fulfilled, (state, action) => {
                state.cartLoadingStatus = "idle";
                cartAdapter.setAll(state, action.payload)
            })
            .addCase(cartFetch.rejected, (state) => {state.cartLoadingStatus = "error"})
            .addDefaultCase(() => {})
    }
})

export const {selectAll} = cartAdapter.getSelectors(state => state.cart);

const {reducer, actions} = cartSlice;
export const {changeSum} = actions;

export default reducer;