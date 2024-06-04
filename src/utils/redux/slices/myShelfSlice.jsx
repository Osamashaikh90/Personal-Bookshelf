import { createSlice } from "@reduxjs/toolkit";

const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
const myShelfSlice = createSlice({
    name:"myShelf",
    initialState:{
        books:storedBooks,
    },
    reducers:{
        addBooks:(state,action)=>{
            const newBook = action.payload;
            state.books.push(newBook);
            localStorage.setItem("books",JSON.stringify(state.books));
        }
    }

})

export const {addBooks} = myShelfSlice.actions;
export default myShelfSlice.reducer;