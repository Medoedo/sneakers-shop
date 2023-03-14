import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/http.hook";

const sneakersAdapter = createEntityAdapter()

const initialState = sneakersAdapter.getInitialState({
    filteredSneakers: [],
    sneakersLoadingStatus: "idle",
    showModal: false
})

export const sneakersFetch = createAsyncThunk(
    "sneakers/Fetch",
    () => {
        const {request} = useHttp()
        return request("http://localhost:3001/sneakers");
    }
)

const sneakersSlice = createSlice({
    name: "sneakers",
    initialState,
    reducers: {
        toggleFavorite: sneakersAdapter.updateOne,
        toggleCart: sneakersAdapter.updateOne,
        toggleModal(state) {
            state.showModal = !state.showModal;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sneakersFetch.pending, (state) => {state.sneakersLoadingStatus = "loading"})
            .addCase(sneakersFetch.fulfilled, (state, action) => {
                state.sneakersLoadingStatus = "idle";
                sneakersAdapter.setAll(state, action.payload)
            })
            .addCase(sneakersFetch.rejected, (state) => {state.sneakersLoadingStatus = "error"})
            .addDefaultCase(() => {})
    }
})

export const {selectAll} = sneakersAdapter.getSelectors(state => state.sneakers);

const {reducer, actions} = sneakersSlice;

export const {toggleFavorite, toggleCart, toggleModal, sneakersFetched } = actions;
export default reducer;