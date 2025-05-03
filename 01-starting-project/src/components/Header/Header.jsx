
/*
Esse método de importaçao de imagem funciona por conta do processo de compilação
que faz também o JSX funcionar.
*/
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
// Gera um número aleátorio
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

/* 
******** Criando componente personalizado ********
O nome deve ser padrão Pascal Case
A função deve retornar sempre algo
A princípio escreveremos tudo no APP, mas futuramente será tudo separado cada um com sua função
Devemos exportar para que consiga ser importado no App
*/
export default function Header(){
    const description = reactDescriptions[genRandomInt(2)];
  
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  
}

// export default Header;