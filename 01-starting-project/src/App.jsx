// Esse método de importaçao de imagem funciona por conta do processo de compilação
// que faz também o JSX funcionar.
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// ******** Criando componente personalizado ********
// O nome deve ser padrão Pascal Case
// A função deve retornar sempre algo
// A princípio escreveremos tudo no APP, mas futuramente será tudo separado cada um com sua função
function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// Normalmente executariamos a função aqui, em React não é o caso
// Para executar vamos colocar como uma tag HTML
// Podemos escrever da maneira comum abre e fecha tag ou abreviar => <Header></Header>
// Para escrever de forma abreviada não podemos esquecer a /
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title="Componets" 
              description="The core UI building block."
              img={componentsImg}
            />
            <CoreConcept title="Props" />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
