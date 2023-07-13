import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './components/Home';
import Categories from './components/Categories';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
