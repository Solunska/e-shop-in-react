# 🛍️ NABI Store
**NABI Store** is a modern e-commerce application built using React and Firebase. The application allows users to browse sneakers, filter and sort them, view product details, manage a shopping cart, and handle user authentication.
The application follows best practices in modern React development, leveraging functional components, custom hooks, and efficient state management.

## 🌟 Features
- **User Authentication**: 🔑 The application employs Firebase Authentication to manage user sessions, supporting both user registration and login with robust validation.
- **Product Browsing**: 👟 Browse sneakers and filter them by categories.
- **Product Details Page**: 📄 View detailed information for individual sneakers.
- **Shopping Cart Management**: 🛒 Add items to the shopping cart and proceed to checkout.
- **User Profile Management**: 👤 Manage your user profile.

## 🛠️ Technologies Used
- **Frontend**: React
- **Backend**: Firebase (Firestore and Authentication)
- **Styling**: CSS for custom styling of components
- **React Router**: For handling navigation between different components

## 📥 Installation
Clone the repository:
```bash
git clone https://github.com/Solunska/e-shop-in-react
```
Navigate to the project directory:
```bash
cd nabi-store
```
Install the required dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```

## 🚀 Usage

Once the application is running, you can:

- Register a new account or log in using an existing account.
- Browse sneakers and view their details.
- Add items to the shopping cart and proceed to checkout.
- Manage your user profile.

## 📂 Folder Structure
The project is organised into a structured directory layout to enhance maintainability and scalability. 
```
nabi-store/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Checkout/
│   │   ├── Home/
│   │   ├── ProductDetails/
│   │   └── ... (other folders for page components)
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ... (other contexts)
│   ├── hooks/
│   │   ├── useFetch.js
│   │   ├── useModal.js
│   │   └── ... (other hooks)
│   ├── pages/
│   │   ├── Home.jsX
│   │   ├── Products.jsX
│   │   ├── ProductDetails.jsX
│   │   ├── ShoppingCart.jsX
│   │   ├── Profile.jsX
│   │   └── ... (other pages)
│   ├── UI/
│   │   ├── Alert.js
│   │   ├── Button.js
│   │   └── ... (other UI components)
│   ├── App.css
│   ├── App.jsx
│   ├── auth.js
│   ├── firebase.js
│   └── http.js
└── ...
```

## 🔗 Routing
The application uses `react-router-dom` for navigation. The main routes defined in `App.jsx` are:

- `/`: Root layout with child routes.
- `/products`: Lists all sneakers.
- `/products/mens`: Men's Products Page.
- `/products/womens`: Women's Products Page.
- `/products/kids`: Kids' Products Page.
- `/products/:productId`: Displays detailed information for a specific product.
- `/shopping-cart`: Displays the shopping cart.
- `/profile`: Displays the user profile page.
- `/checkout`: Displays the checkout page.

## 🔐 Authentication
The application uses Firebase Authentication for user sign-up and sign-in functionalities:

- `doCreateUserWithEmailAndPassword`: Creates a new user.
- `doSignInWithEmailAndPassword`: Signs in an existing user.
- `doSignOut`: Signs out the user.

## 📦 Firestore Integration
The application retrieves sneaker data from Firestore and handles user data through the following functions:

- **`fetchSneakers`**: Fetches the list of sneakers from Firestore.
- **`fetchUsersWithId`**: Fetches user information by user ID.
- **`fetchOrdersOfUser`**: Fetches the orders by user ID.

## ♻️ Reusable Components
The project implements reusable components to encapsulate functionality and enhance code maintainability. These components are designed to be modular and can be reused across different parts of the application, ensuring consistency and reducing code duplication.

## ⚙️ React Hooks Used
The project leverages various built-in React hooks to enhance functionality and state management, including:
- **`useState`**: Manages local component state.
- **`useEffect`**: Handles side effects like data fetching and subscriptions.
- **`useContext`**: Provides access to context values (e.g., authentication and cart context).
- **`useRef`**: Allows direct access to DOM elements or persistent values.
- **`useMemo`**: Optimizes performance by memoizing expensive calculations.
- **`useCallback`**: Memoizes callback functions to prevent unnecessary re-renders.
- **`useReducer`**: Manages complex state logic and updates, allowing for more structured state transitions, particularly useful in managing the shopping cart state.

## 🔧 Custom Hooks
Custom hooks are utilized to abstract and manage complex logic, improving reusability and readability across components. Some notable custom hooks include:

- **`useFetch`**: Handles data fetching logic, including loading and error states.
- **`useModal`**: Manages the state of modal dialogs across the application.

## 🌀 Portals
The application utilizes React Portals to render modal components outside the main DOM hierarchy. For example, the **`Modal`** component leverages portals to ensure that it can be displayed on top of any page, maintaining a consistent user experience across the application.

## In Development 🚧

The following features are currently in development and not fully functional yet:

- **Account Management**: The account management features, including user profile editing and password reset functionalities, are still being implemented.
- **Checkout Confirmation**: The checkout confirmation feature is also not done yet.
