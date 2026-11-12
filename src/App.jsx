import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

// components
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ProtectedRoutes from "./components/ProtectedRoutes"

//custom hooks
import { useGlobalContext } from "./components/hooks/useGlobalContext"

function App() {
  
  const {user, dispetch}  = useGlobalContext()
 

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: 
        (<ProtectedRoutes user={user}>
          <MainLayout/>
        </ProtectedRoutes>),  
        children: [
          {
          index: true,
          element: <Home/>
        },
        ]
      },{
          path: "/login",
          element: user ? <Navigate to="/" /> : <Login/>
        },{
          path: "/signup",
          element: user ? <Navigate to="/" /> : <SignUp/>
        }
    ]
  )

  return (
   <RouterProvider router={router}/>
  )
}

export default App
