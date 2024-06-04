// BookContainer.js
import { useDispatch, useSelector } from "react-redux";
import { useSearchBooksQuery } from "../utils/redux/slices/apiSlice";
import { setQuery } from "../utils/redux/slices/searchSlice";
import BookCard from "./BookCard";
import BookCardShimmer from "./BookCardShimmer";

const BookContainer = () => {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.search.query);
  const { data, isFetching } = useSearchBooksQuery({ query });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    dispatch(setQuery(searchQuery));
    console.log(searchQuery);
  };

  return (
    <div className="sm:mx-1 xl:mx-36 lg:mx-20 mt-5 flex flex-col gap-5">
      <div className="cursor-pointer sort-selection flex items-center justify-center">
        <form onSubmit={handleSearch}>
          <label htmlFor="" className="text-2xl font-medium ">
            Search by book name:{" "}
          </label>
          <input
            className="px-4 py-1 border border-[#edae2f] focus:outline-none rounded-md w-72 bg-[#1d232a]"
            type="text"
            name="query"
            placeholder="SEARCH"
          />
        </form>
      </div>
      {/* books */}
      {isFetching ? (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-5">
        {Array(10)
          .fill("")
          .map((e, index) => (
          <BookCardShimmer key={index}/>
           ))}
        </div>
      ) : (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
          {data?.docs.length > 0 ? (
            data.docs.map((book) => (
              <BookCard key={book.key} book={book} />
            ))
          ) : (
            <div className="col-span-5 flex flex-col items-center justify-center pt-20">
            <h1 className="text-xl text-[#edae2f]">
            Start Searching for books</h1>
            <img src="/Home.png" alt="Home" className="h-60 w-100"/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookContainer;
