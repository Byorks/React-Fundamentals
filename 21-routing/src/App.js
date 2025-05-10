import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

// Precisamos armazenar o valor que criamos
const router = createBrowserRouter([
  // Cada objeto representa uma rota
  {path: '/', element: <HomePage />},
  {path: '/products', element: <ProductsPage />}
]);

function App() {
  // Router provider
  return <RouterProvider router={router} />;
}

export default App;
