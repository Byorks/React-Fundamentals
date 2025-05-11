// Utilizamos link como uma ancora, serve para não deixar o navegador
// fazer outra requisição http e então baixar o arquivo completo novamente
import { Link, useNavigate } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    // Navegando de forma programática
    navigate("/products");
  }

  return (
    <> 
      <h1>My Home Page</h1>
      <p>
        Go to <Link to={"products"}>the list of products</Link>
      </p>
      <p>
        {/* Essa forma de implementar navigate não é a ideal, apenas exemplo, 
            aqui deveria ser com link
            Assim caso precisasse navegar por conta de um timer que expirou, essa seria uma maneira 
            Outros exemplos
            - Redirecionamento após ação de usuário, como envio de formulário
            - Navegação com base em uma lógica de negócio
            - Navegação com base em eventos externos como após conclusão de uma requisição assincrona*/}
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
export default HomePage;
