import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage />}
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}
