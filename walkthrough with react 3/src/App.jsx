import './App.css';
import ImgDetails from './assets/components/ImgDetails';
import ImgGrid from './assets/components/ImgGrid';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ImgGrid />,
  },
  {
    path: '/img/:id',
    element: <ImgDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
