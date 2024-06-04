// import React from 'react'
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux"

const MyBookShelf = () => {
    const books = useSelector((store)=>store?.myShelf?.books);
    console.log(books);
  return (
    <div className="sm:mx-1 xl:mx-36 lg:mx-20 flex flex-col items-center gap-5 ">
        <div className='text-2xl'>My BookShelf</div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
        {books.map((book) => (
            <BookCard key={book.key} book={book} showAddButton={false}/>
          ))}
        </div>
    </div>
  )
}

export default MyBookShelf