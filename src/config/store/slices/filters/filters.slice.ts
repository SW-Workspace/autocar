import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    pick_up_location: string;
    date_collection: string;
    hour: string;
    date_return: string;
};

const initialState: FilterState = {
    pick_up_location: "",
    date_collection: "",
    hour: "",
    date_return: ""
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<FilterState>) => {
            return { ...state, ...action.payload };
        },
        clearFilters: () => initialState,
    },
});

export const { setFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer