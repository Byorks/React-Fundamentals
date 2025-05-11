import { useParams, Link } from 'react-router-dom'

function ProductDetailPage () {
    // Descobrindo o Id que foi inserido na URL
    // Para por exemplo dar um fetch nos detalhes do prod específico
    const params = useParams();
    
    
    return (
        <>
            <h1>Product Details!</h1>
            
            <p>
                {
                // O nome abaixo é o mesmo que definimos na URL dinâmica
                params.productId
                }
            </p>
            {/* Identificador para subir um level do caminho 
            Vamos acabar voltando para a home, porque esse também é um caminho relativo
            Isso acontece porque o caminho /root é a mão e /products é apenas um irmão
            Quando mudamos a prop relative para path então ai sim conseguimos voltar para
            /products*/}
            <p><Link to=".." relative='path'>Back</Link></p>
        </> 
    );
}

export default ProductDetailPage;