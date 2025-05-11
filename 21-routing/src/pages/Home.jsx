// Utilizamos link como uma ancora, serve para não deixar o navegador
// fazer outra requisição http e então baixar o arquivo completo novamente
import { Link } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function HomePage() {
    return (
    <>  
        <h1>My Home Page</h1>
        <p>Go to <Link to={"/products"}>the list of products</Link></p>
    </>
    )
}
export default HomePage;