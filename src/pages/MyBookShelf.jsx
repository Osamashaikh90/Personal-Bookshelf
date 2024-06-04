// import React from 'react'
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux"

const MyBookShelf = () => {
    const books = useSelector((store)=>store?.myShelf?.books);
    console.log(books);
  return (
    <div className="xxsm:mx-10 lg:mx-36 flex flex-col items-center gap-5 ">
        <div className='text-2xl'>My BookShelf</div>
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        {books.map((book) => (
            <BookCard key={book.key} book={book} showAddButton={false}/>
          ))}
        </div>
    </div>
  )
}

export default MyBookShelf