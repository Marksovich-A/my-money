import { createBrowserRouter, RouterProvider } from "react-router-dom"

// components
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainLayout/>,
        children: [
          {
          index: true,
          element: <Home/>
        },{
          path: "/login",
          element: <Login/>
        },{
          path: "/signup",
          element: <SignUp/>
        }
        ]
      }
    ]
  )

  return (
   <RouterProvider router={router}/>
  )
}

export default App
