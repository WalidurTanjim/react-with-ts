import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Register from './pages/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { path: '/', element: <Home /> },
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/register', element: <Register /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
