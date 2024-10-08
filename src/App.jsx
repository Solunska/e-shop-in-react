import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import ShoppingCartPage from './pages/ShoppingCart';
import ProfilePage from './pages/Profile';
import CheckoutPage from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/mens',
        element: <ProductsPage />
      },
      {
        path: 'products/womens',
        element: <ProductsPage />
      },
      {
        path: 'products/kids',
        element: <ProductsPage />
      },
      {
        path: 'products/:productId',
        element: <ProductDetailsPage />
      },
      {
        path: 'shopping-cart',
        element: <ShoppingCartPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}
