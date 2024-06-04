// import React from 'react'
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import BookContainer from './components/BookContainer';
import MyBookShelf from './pages/MyBookShelf';
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
    <Provider store={store}>
    <Navbar />
    <Outlet />
    </Provider>
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<BookContainer />
      },{
        path:"/bookshelf",
        element:<MyBookShelf />
      }
    ]
  }
])


export default App
