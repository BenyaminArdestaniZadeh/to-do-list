import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ItemsState {
  listOfItem: string[];
}

const initialState: ItemsState = {
  listOfItem: [],
};

const itemSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state,action) => {},
    deleteItem: (state) => {},
  },
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;


// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (inputValue.trim() !== "") {
//       setItems([...items, inputValue]);
//       setInputValue("");
//     }
//   };