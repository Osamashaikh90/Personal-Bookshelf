/* eslint-disable react/prop-types */
// import React from 'react'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addBooks } from "../utils/redux/slices/myShelfSlice";
const BookCard = ({book,showAddButton = true }) => {
    const dispatch = useDispatch();
    const handleAddBook = (key,title,edition_count)=>{
        const newBook = { key, title, edition_count };
        dispatch(addBooks(newBook));
    }
  return (
    <div className="px-2 py-5 glass shadow-lg rounded-xl flex flex-col gap-5 roboto-regular">
    <div className="flex items-start justify-start gap-1">
    <span className="font-semibold w-[40%]">Book Tilte:</span>
    <h1 className=" w-[60%]">{book.title}</h1>
    </div>
    <div className="flex items-start  justify-start gap-1.5">
    <span className="font-semibold">Edition Count:</span>
    <h1 className="">{book.edition_count}</h1>
    </div>
    {showAddButton && (
                <Link to='/bookshelf'>
                    <button onClick={() => handleAddBook(book.key, book.title, book.edition_count)} className="rounded-lg w-full bg-[#edae2f] p-1 font-semibold">
                        Add to Bookshelf
                    </button>
                </Link>
            )}
    </div>
  )
}

export default BookCard