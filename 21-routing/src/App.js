import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route
} from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage  from './pages/ProductDetail.js';

// No modo antigo definia-se as rotas atravez dos componentes, como a seguir
// const routeDefinitions = createRoutesFromElements (
//   // Está fazedo exatamente o mesmo que createBrowserRouter
//   // Mas se trata de uma forma que só tinha em versões anteriores
//   <Route>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/products" element={<ProductsPage />}/>
//   </Route>
// );
// const router  = createBrowserRouter(routeDefinitions);

// Precisamos armazenar o valor que criamos
// RootLayout -> com Outlet do react router dom conseguimos fazer esse componente empacotar/wrapper em volta dos filhos que estabelecemos abaixo.
// Dessa maneira conseguimos colocar componentes fixos em todas as páginas
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // configurando página de erro caso a / não funcione
    errorElement: <ErrorPage />,
    children : [

      // Cada objeto representa uma rota
      // { path: '', element: <HomePage /> },

      // Forma alternativa de colocar a página padrão Index Roots
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage />, },
      // Criando caminho dinâmico
      { path: 'products/:productId', element: <ProductDetailPage/> }
    ]
  },
  { // Dessa forma conseguimos criar vários caminhos independentes
    // esse é só exemplo
    path: "/admin",
    children: [
      {}
    ]
  }
 
]);

function App() {
  // Router provider
  return <RouterProvider router={router} />;
}

export default App;
